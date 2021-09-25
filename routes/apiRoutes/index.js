const router = require('express').Router();
const savedRoutes = require('../apiRoutes/savedRoutes');

router.use(savedRoutes);

module.exports = router;