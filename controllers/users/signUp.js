const { User } = require('../../models/users');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { BASE_URL } = process.env;
const { transporter } = require('../../sendEmail');
const { v4: uuidv4 } = require('uuid');

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email);

  try {
    const hashPswrd = bcrypt.hashSync(password, 10);

    const verificationCode = uuidv4();

    const result = await User.create({ email, password: hashPswrd, avatarURL, verificationCode });
    const { subscription, email: eml } = result;

    const verifyEmail = {
      to: email,
      from: 'sl7one@meta.ua',
      subject: 'Verify email',
      html: `<a href="${BASE_URL}/api/users/verify/${verificationCode}" target="_blank">VERIFY EMAIL<a>`,
    };

    await transporter.sendMail(verifyEmail);

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        user: {
          email: eml,
          subscription,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
