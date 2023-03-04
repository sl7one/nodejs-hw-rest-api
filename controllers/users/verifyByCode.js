const { TWILLIO_ACCOUNT_SID, TWILLIO_AUTH_TOKEN, TWILLIO_VERIFY_SID } = process.env;
const client = require('twilio')(TWILLIO_ACCOUNT_SID, TWILLIO_AUTH_TOKEN);

const verifyByCode = async (req, res, next) => {
  const { code } = req.params;
  try {
    const result = await client.verify.v2
      .services(TWILLIO_VERIFY_SID)
      .verificationChecks.create({ to: '+380635942909', code });

    const { valid } = result;

    if (!valid) {
      const err = new Error();
      err.status = 404;
      err.message = 'Invalid sms code';
      throw err;
    }

    res.json({ message: 'succsess' });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyByCode;
