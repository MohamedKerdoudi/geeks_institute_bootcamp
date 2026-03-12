
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');


router.get('/menu', menuController.getMenu);
router.get('/menu/:name', menuController.getMenuItem);
router.post('/menu', menuController.addMenuItem);
router.put('/menu/:id', menuController.updateMenuItem);
router.delete('/menu/:id', menuController.deleteMenuItem);

module.exports = router;