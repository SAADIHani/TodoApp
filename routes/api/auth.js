const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');


router.post(
  '/',
  async (req, res) => { 
    const { email } = req.body;
    try {
      const payload = {
        email: {
          id: email.length,
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token, email });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
