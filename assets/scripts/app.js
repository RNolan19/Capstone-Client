'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./auth/events')
// const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const logEvents = require('./log/events')
// const api = require('.log/api')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  //
  $('#add-log').on('submit', logEvents.onAddLog)
  $('#view-logs').on('submit', logEvents.onViewLogs)

  // Delete Card Event Listeners
  $('#content').on('click', '.delete-card', logEvents.onDeleteLog)
  $('#content-feb').on('click', '.delete-card', logEvents.onDeleteLog)

  // Update Card Event Listeners
  // update card is the button on the handlebars card
  $('#content').on('click', '.update-card', logEvents.onUpdateLog)
  // // $('#content').on('click', '.update-card', function () { $('#modalLRForm').modal({ show: true }) })
  // $('#modalLRForm').modal({ show: false })

  $('#content-feb').on('click', '.update-card', logEvents.onUpdateLog)

  // update log is the button on the pop up modal form, that submits to the API
  $('#update-log').on('submit', logEvents.sendFormData)

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
