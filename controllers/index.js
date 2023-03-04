const getAllContacts = require('./contacts/getAll');
const getContactById = require('./contacts/getContactById');
const addContact = require('./contacts/addContact');
const deleteContact = require('./contacts/deleteContact');
const updateContact = require('./contacts/updateContact');
const favoriteUpdate = require('./contacts/favoriteUpdate');

const signUp = require('./users/signUp');
const login = require('./users/login');
const getCurrentUser = require('./users/getCurrentUser');
const logout = require('./users/logout');
const subscription = require('./users/subscription');
const updateAvatar = require('./users/updateAvatar');
const getSmsCode = require('./users/getSmsCode');
const verifyBySmsCode = require('./users/verifyByCode');
const verifyByEmail = require('./users/verifyByEmail');
const verifyResendEmail = require('./users/verifyResendEmail');

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  favoriteUpdate,

  signUp,
  login,
  getCurrentUser,
  logout,
  subscription,
  updateAvatar,
  getSmsCode,
  verifyBySmsCode,
  verifyByEmail,
  verifyResendEmail,
};
