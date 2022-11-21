const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profile-routes.js');
const searchRoutes = require('./search-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/search', searchRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;