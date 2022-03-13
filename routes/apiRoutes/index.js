const express = require('express');
const router = express.Router();

// Api routes
router.use(require('./partyRoutes'));
router.use(require('./candidateRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));

// Export for routing
module.exports = router;