const Registration = require("../model/registration.model");

module.exports = app => {
    app.get("/api/test", (req, res) => {
        res.json({ message: "hey its me" });
    });

    app.get("/api/submitted-form-results", (req, res) => {
        Registration.find({})
            .then(results => res.json({ results: results }))
            .catch(err => res.status(400).json({ message: "that didn't quite work.", err }));

    });

    app.post("/api/submitted-form", (req, res) => {
        Registration.create(req.body)
            .then(newRegistration => res.json({ results: newRegistration }))
            .catch(err => res.status(400).json({ message: "that didn't work", err }))
    });
}