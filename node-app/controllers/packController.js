// packController.js
const Pack = require("../models/Pack"); // adjust the path as necessary

// Create a new Pack
exports.createPack = async (req, res) => {
  try {
    const pack = new Pack(req.body);
    await pack.save();
    res.status(201).json(pack);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Packs
exports.getAllPacks = async (req, res) => {
  try {
    const packs = await Pack.find();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a Pack by ID
exports.getPackById = async (req, res) => {
  try {
    const pack = await Pack.findById(req.params.id);
    if (!pack) {
      return res.status(404).json({ message: "Pack not found" });
    }
    res.status(200).json(pack);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Pack by ID
exports.updatePack = async (req, res) => {
  try {
    const pack = await Pack.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!pack) {
      return res.status(404).json({ message: "Pack not found" });
    }
    res.status(200).json(pack);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Pack by ID
exports.deletePack = async (req, res) => {
  try {
    const pack = await Pack.findByIdAndDelete(req.params.id);
    if (!pack) {
      return res.status(404).json({ message: "Pack not found" });
    }
    res.status(200).json({ message: "Pack deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
