const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// 🟢 Registro de usuario
router.post('/register', async (req, res) => {
  try {
    const { nombre, email, password, empresa } = req.body;

    // Validar si ya existe el usuario
    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ msg: 'Correo ya registrado' });

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario
    const newUser = new User({ nombre, email, password: hashedPassword, empresa });
    await newUser.save();

    res.status(201).json({ msg: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🟡 Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

    // Comparar contraseñas
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ msg: 'Contraseña incorrecta' });

    // Crear token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d' // token válido por 1 día
    });

    res.json({
      token,
      user: {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        empresa: user.empresa
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

