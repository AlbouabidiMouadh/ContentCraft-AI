// packRoutes.js
const express = require('express');
const router = express.Router();
const packController = require('../../controllers/packController'); // adjust the path as necessary

// Create a new Pack
router.post('/pack', packController.createPack);

// Get all Packs
router.get('/packs', packController.getAllPacks);

// Get a Pack by ID
router.get('/pack/:id', packController.getPackById);

// Update a Pack by ID
router.put('/pack/:id', packController.updatePack);

// Delete a Pack by ID
router.delete('/pack/:id', packController.deletePack);

module.exports = router;
