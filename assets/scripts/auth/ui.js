'use strict'
// require store object, so we can keep track of the user and their unique token
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign Up Failed.  Please Try Again')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  // successMessage('Signed in successfully!')
  // setTimeout(function () {
  //   successMessage('')
  // }, 1000)
  // save the user we got from the API inside of 'store', so we can use it later
  // from any file
  store.user = responseData.user

  //  a good place to hide the sign in button
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.h2signin').hide()
  $('.h2signup').hide()
  $('.feb').hide()

  // $('.quote').show()
  $('.jan').show()
  $('.navbar-right').show()
  $('#change-password').show()
  $('.h2changepassword').show()
  $('#sign-out').show()
  $('.h2signout').show()
  $('#add-log').show()
  $('.h2addlog').show()
  $('#view-logs').show()
  $('.h2viewlogs').show()
  $('#delete-log').show()
  $('.h2deletelog').show()
  $('#update-log').show()
  $('.h2updatelog').show()
}

const onSignInFailure = function () {
  failureMessage('Sign In Failed.  Please Try Again')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Password changed successfully!')
  setTimeout(function () { successMessage('') }, 3000)
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change Failed.  Please try again')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (responseData) {
  successMessage('Signed out successfully.  Go Do Some More Coding!')
  setTimeout(function () { successMessage('') }, 3000)
  $('.content').empty()
  $('.content-feb').empty()

  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').show()
  $('.h2signin').show()
  $('.h2signup').show()

  $('.navbar-right').hide()
  $('#change-pw').hide()
  $('#change-password').hide()
  $('.h2changepassword').hide()
  $('#sign-out').hide()
  $('.h2signout').hide()
  $('#add-log').hide()
  $('.h2addlog').hide()
  $('#view-logs').hide()
  $('.h2viewlogs').hide()
  $('#delete-log').hide()
  $('.h2deletelog').hide()
  $('#update-log').hide()
  $('.h2updatelog').hide()

  $('.quote').hide()
  $('.month').hide()
  $('.feb').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign Out Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
