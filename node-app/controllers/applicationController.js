const Application = require("../models/Application");

const getOneController = (req, res) => {
  // Get one application logic
  const { id } = req.params; // Use req.params to get URL parameter
  Application.findById(id)
    .then((application) => {
      if (!application) {
        return res.status(404).send({ message: "Application not found" });
      }
      console.log(application);
      res.send(application);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
};
const getOneByNameController = (req, res) => {
  // Get one application logic
  const { name } = req.params; // Use req.params to get URL parameter
  Application.find({ name })
    .then((application) => {
      if (!application) {
        return res.status(404).send({ message: "Application not found" });
      }
      console.log(application);
      res.send(application);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
};

const getAllController = (req, res) => {
  // Get all applications logic
  Application.find()
    .then((applications) => {
      console.log(applications);
      res.send(applications);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
};

const updateController = (req, res) => {
  // Update application logic
  const { id } = req.params; // Use req.params to get URL parameter
  const { newApplication } = req.body; // Use req.body to get request body
  Application.findByIdAndUpdate(id, newApplication, { new: true })
    .then((application) => {
      if (!application) {
        return res.status(404).send({ message: "Application not found" });
      }
      console.log(application);
      res.send(application);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
};

const addController = (req, res) => {
  // Add new application logic
  const { newApplication } = req.body; // Use req.body to get request body
  const application = new Application(newApplication);
  application
    .save()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
};

const removeController = (req, res) => {
  // Remove application logic
  const { id } = req.params; // Use req.params to get URL parameter
  Application.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({ message: "Application not found" });
      }
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
};

const getBySectionController = (req, res) => {
  // Get applications by section logic
  const { sectionId } = req.params; // Use req.params to get URL parameter
  Application.find({ sectionId })
    .then((applications) => {
      if (!applications || applications.length === 0) {
        return res
          .status(404)
          .send({ message: "No applications found for this section" });
      }
      console.log(applications);
      res.send(applications);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
};
const getByType = (req, res) => {
  const { pack } = req.params; // Use req.params to get URL parameter
  Application.find({ pack })
  .then((applications) => {
    if (!applications || applications.length === 0) {
      return res
        .status(404)
        .send({ message: "No applications found for this section" });
    }
    console.log(applications);
    res.send(applications);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  });
}
module.exports = {
  addController,
  getAllController,
  getOneController,
  removeController,
  updateController,
  getBySectionController,
  getOneByNameController,
  getByType
};
