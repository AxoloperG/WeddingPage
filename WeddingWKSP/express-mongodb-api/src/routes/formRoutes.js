const express = require('express');
const FormController = require('../controllers/formController');

const router = express.Router();
const formController = new FormController();

router.post('/submit', formController.submitForm.bind(formController));

module.exports = router;