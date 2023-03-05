const { User } = require('../../models/users');

const verifyByEmail = async (req, res) => {
  const { verificationCode } = req.params;

  const user = await User.findOne({ verificationCode });

  if (!user) {
    const err = new Error();
    err.status = 404;
    err.message = 'User not found';
    throw err;
  }

  const { _id } = user;

  await User.findByIdAndUpdate(_id, { verify: true, verificationCode: '' });

  res.json({ message: 'Verify success' });
};

module.exports = verifyByEmail;
