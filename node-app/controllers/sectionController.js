const Section = require("../models/Section");

// Controller method to create a new section
exports.createSection = async (req, res) => {
  try {
    const { name, description, picture, url, appsIds } = req.body;
    const section = new Section({ name, description, picture, url, appsIds });
    const newSection = await section.save();
    res.status(201).json(newSection);
  } catch (error) {
    console.error("Error creating section:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller method to get all sections
exports.getAllSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json(sections);
  } catch (error) {
    console.error("Error getting sections:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller method to get a section by ID
exports.getSectionById = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json(section);
  } catch (error) {
    console.error("Error getting section by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller method to update a section by ID
exports.updateSectionById = async (req, res) => {
  try {
    const { name, description, picture, url, appsIds } = req.body;
    const updatedSection = await Section.findByIdAndUpdate(
      req.params.id,
      { name, description, picture, url, appsIds },
      { new: true }
    );
    if (!updatedSection) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json(updatedSection);
  } catch (error) {
    console.error("Error updating section by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller method to delete a section by ID
exports.deleteSectionById = async (req, res) => {
  try {
    const deletedSection = await Section.findByIdAndDelete(req.params.id);
    if (!deletedSection) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    console.error("Error deleting section by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
