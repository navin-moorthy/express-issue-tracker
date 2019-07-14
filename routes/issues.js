/* eslint-disable no-param-reassign */
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

/* Issue Index */
router.get("/", (req, res) => {
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../public/issue-data.json")
  );
  const { issues } = JSON.parse(rawdata);
  res.render("issues", { issues });
});

/* New Issue */
router.post("/", (req, res) => {
  const issue = {
    id: Number(req.body.id),
    shortDescription: req.body.shortDescription,
    status: req.body.status,
    severity: req.body.severity,
    dateCreated: req.body.dateCreated,
    resolutionDate: req.body.resolutionDate,
    details: req.body.details
  };
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../public/issue-data.json")
  );
  const issues = JSON.parse(rawdata);
  issues.issues.push(issue);
  const data = JSON.stringify(issues);
  fs.writeFileSync(path.resolve(__dirname, "../public/issue-data.json"), data);
  res.redirect("/issues");
});

/* Show Issue */
router.get("/new", (req, res) => {
  const id = new Date().getTime();
  res.render("issues/new", { id });
});

/* Show Issue */
router.get("/:id", (req, res) => {
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../public/issue-data.json")
  );
  const { issues } = JSON.parse(rawdata);
  issues.forEach(issue => {
    if (issue.id.toString() === req.params.id) {
      res.render("issues/show", { issue });
    }
  });
});

/* Show Issue */
router.get("/:id/edit", (req, res) => {
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../public/issue-data.json")
  );
  const { issues } = JSON.parse(rawdata);
  issues.forEach(issue => {
    if (issue.id.toString() === req.params.id) {
      res.render("issues/edit", { issue });
    }
  });
});

/* Update Issue */
router.put("/:id", (req, res) => {
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../public/issue-data.json")
  );
  const issues = JSON.parse(rawdata);
  issues.issues.forEach(issue => {
    if (issue.id.toString() === req.params.id) {
      issue.shortDescription = req.body.shortDescription;
      issue.status = req.body.status;
      issue.severity = req.body.severity;
      issue.dateCreated = req.body.dateCreated;
      issue.resolutionDate = req.body.resolutionDate;
      issue.details = req.body.details;
    }
  });
  const data = JSON.stringify(issues);
  fs.writeFileSync(path.resolve(__dirname, "../public/issue-data.json"), data);
  res.redirect(`/issues/${req.body.id}`);
});

/* Delete Issue */
router.delete("/:id", (req, res) => {
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../public/issue-data.json")
  );
  const issues = JSON.parse(rawdata);
  issues.issues.forEach((issue, index) => {
    if (issue.id.toString() === req.params.id) {
      issues.issues.splice(index, 1);
    }
  });
  const data = JSON.stringify(issues);
  fs.writeFileSync(path.resolve(__dirname, "../public/issue-data.json"), data);
  res.redirect(`/issues`);
});

module.exports = router;
