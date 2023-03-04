const express = require('express');

const ctrl = require('../../controllers/');
const mdd = require('../../middlewares/');
const router = express.Router();

router.post('/signup', mdd.register, ctrl.signUp);

router.post('/login', mdd.login, ctrl.login);

router.get('/current', mdd.auth, ctrl.getCurrentUser);

router.post('/logout', mdd.auth, ctrl.logout);

router.patch('/', mdd.auth, mdd.subscription, ctrl.subscription);
// mdd.auth,
router.get('/verify/:verificationCode', ctrl.verifyByEmail);

router.post('/verify/resend-email', mdd.email, ctrl.verifyResendEmail);

router.get('/verify/sms', ctrl.getSmsCode);

router.post('/verify/sms/:code', ctrl.verifyBySmsCode);

router.patch('/avatars', mdd.auth, mdd.multer.single('image'), ctrl.updateAvatar);

module.exports = router;
