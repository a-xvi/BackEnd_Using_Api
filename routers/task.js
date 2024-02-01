const express = require('express');
const router = express.Router();
const controllers = require('../controler/task');



router.get('/', controllers.get);
router.post('/', controllers.post );
router.get('/:id', controllers.getById);
router.delete('/:id', controllers.deleteby);
router.put('/:id', controllers.put);

model.exports = router;
