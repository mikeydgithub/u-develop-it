const express = require('express');
const router = express.Router();

// Api routes
router.use(require('./partyRoutes'));
router.use(require('./candidateRoutes'));

// Export for routing
module.exports = router;