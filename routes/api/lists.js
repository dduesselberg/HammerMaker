const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const List = require('../../models/List');
const User = require('../../models/User');

router.get('/', (req, res) => res.send('list route'));
// @route   GET api/list/me
// @desc    Get current users lists
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const list = await List.findById(req.user.id).populate('user', [
      'name, avatar'
    ]);

    if (!list) {
      return res.status(400).json({ msg: 'There are no lists for this user' });
    }

    res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
