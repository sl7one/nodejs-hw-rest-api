const { User } = require('../../models/users');
const { transporter } = require('../../sendEmail');
const { BASE_URL } = process.env;

const verifyResendEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    const err = new Error();
    err.status = 404;
    err.message = 'Email not found';
    throw err;
  }

  const { verify, verificationCode } = user;

  if (verify) {
    const err = new Error();
    err.status = 404;
    err.message = 'Email is alredy virifyed';
    throw err;
  }

  const verifyEmail = {
    to: email,
    from: 'sl7one@meta.ua',
    subject: 'Verify email',
    html: `<a href="${BASE_URL}/api/users/verify/${verificationCode}" target="_blank">VERIFY EMAIL<a>`,
  };

  await transporter.sendMail(verifyEmail);

  res.json({ message: 'Email send success' });
};

module.exports = verifyResendEmail;
