const { TWILLIO_ACCOUNT_SID, TWILLIO_AUTH_TOKEN, TWILLIO_VERIFY_SID } = process.env;
const client = require('twilio')(TWILLIO_ACCOUNT_SID, TWILLIO_AUTH_TOKEN);

const getSmsCode = async (req, res, next) => {
  try {
    await client.verify.v2
      .services(TWILLIO_VERIFY_SID)
      .verifications.create({ to: '+380635942909', channel: 'sms' });

    res.json({ message: 'succsess' });
  } catch (error) {
    next(error);
  }
};

module.exports = getSmsCode;
