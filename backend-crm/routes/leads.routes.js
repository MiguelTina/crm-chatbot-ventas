const express = require('express');
const router = express.Router();
const Lead = require('../models/lead.model');

// Guardar un nuevo lead
router.post('/', async (req, res) => {
  try {
    const nuevoLead = new Lead(req.body);
    await nuevoLead.save();
    res.status(201).json({ message: 'Lead guardado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el lead' });
  }
});

// Obtener todos los leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ creadoEn: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los leads' });
  }

// Actualizar estado del lead
router.put('/leads/:id/estado', async (req, res) => {
  try {
    const { estado } = req.body;
    await Lead.findByIdAndUpdate(req.params.id, { estado });
    res.json({ message: 'Estado actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el estado' });
  }
});

module.exports = router;
