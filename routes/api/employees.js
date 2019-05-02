const express = require("express");
const router = express.Router();
//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
//const validateInsertInput = require("../../validation/insertemployee");

// Load Employee model
const Employee = require("../../models/Employee");

// @route POST api/employees/insertemployee
// @desc Insert Employee
// @access Public
router.post("/insertemployee", (req, res) => {
  // Form validation

  //const { errors, isValid } = validateInsertemployeeInput(req.body);

  // Check validation
  //if (!isValid) {
    //return res.status(400).json(errors);
  //}

  //Employee.findOne({ email: req.body.email }).then(employee => {
    //if (employee) {
      //return res.status(400).json({ email: "Employee may already exist since email already exists" });
    //} else {
      const newEmployee = new Employee({
        name: req.body.name,
        email: req.body.email,
        joindate: req.body.joindate,
        birthdate: req.body.birthdate,
        address: req.body.address,
        aadharcardno: req.body.aadharcardno,
        pancardno: req.body.pancardno,
        salary: req.body.salary
      });
      res.send(newEmployee);

    //}
  //});
});

// @route POST api/employees/Findemployee
// @desc Find employee and return details
// @access Public
router.post("/findemployee", (req, res) => {
  // Form validation

  //const { errors, isValid } = validateFindemployeeInput(req.body);

  // Check validation
  //if (!isValid) {
    //return res.status(400).json(errors);
  //}

  //const email = req.body.email;
  const name = req.body.name;

  // Find employee by name
  Employee.findOne({ name }).then(employee => {
    // Check if user exists
    if (!employee) {
      return res.status(404).json({ namenotfound: "Name not found" });
    }

    else {
        // Employee matched
        // Create JWT Payload
        const payload = {
          name: employee.name,
          email: employee.email,
          joindate: employee.joindate,
          birthdate: employee.birthdate,
          address: employee.address,
          aadharcardno: employee.aadharcardno,
          pancardno: employee.pancardno,
          salary: employee.salary
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      }
    });
  });

module.exports = router;
