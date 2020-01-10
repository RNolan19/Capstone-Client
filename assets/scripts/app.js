'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./auth/events')
// const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const logEvents = require('./log/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  //
  $('#add-log').on('submit', logEvents.onAddLog)
  $('#view-logs').on('submit', logEvents.onViewLogs)
  // $('#delete-log').on('submit', logEvents.onDeleteLog)
  // $('#content').on('click', '.delete-card', console.log('whatever'))

  $('#content').on('click', '.delete-card', logEvents.onDeleteLog)
  $('#content-feb').on('click', '.delete-card', logEvents.onDeleteLog)

  $('#update-log').on('submit', logEvents.onUpdateLog)

  // Show when you first arrive at homepage
  $('#sign-up').show()
  $('#sign-in').show()
  $('.h2signup').show()
  $('.h2signin').show()
  $('#message').show()

  $('.quote').hide()
  $('.month').hide()
  $('.feb').hide()

  // Show after sign-in SUCCESS
  $('.navbar-right').hide()
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
})
