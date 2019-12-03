'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./auth/events')
// const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // $('#sign-up').on('submit', authEvents.onSignUp)
  // $('#sign-in').on('submit', authEvents.onSignIn)
  // $('#change-password').on('submit', authEvents.onChangePassword)
  // $('#sign-out').on('submit', authEvents.onSignOut)
  //
  // $('#add-log').on('submit', gameEvents.onAddRun)
  // $('#view-logs').on('submit', gameEvents.onViewRuns)
  // $('#delete-log').on('submit', gameEvents.onDeleteRun)
  // $('#update-log').on('submit', gameEvents.onUpdateRun)

  $('#sign-up').hide()
  $('.h2signup').hide()
  $('#sign-in').hide()
  $('.h2signins').hide()

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
