const router = require('express').Router();
const savedRoutes = require('./savedRoutes');

router.use(savedRoutes);

module.exports = router;