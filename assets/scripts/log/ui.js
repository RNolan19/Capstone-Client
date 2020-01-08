'use strict'
// require store object, so we can keep track of the user and their unique token
const store = require('../store')
const showLogsTemplate = require('../templates/log-listing.handlebars')

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

const onAddLogSuccess = function () {
  successMessage('Coding Session Added Successfully!')
  $('.content').empty()

  $('#add-log').trigger('reset')
}

const onAddLogFailure = function () {
  failureMessage('Failed To Add Coding Session')
  $('#add-log').trigger('reset')
}

const onViewLogsSuccess = (data) => {
  successMessage('Here Are Your Most Recent Coding Sessions:')
  console.log(data.logs)
  store.logs = data.logs

  const showLogsHtml = showLogsTemplate({ logs: data.logs })
  $('.content').empty()
  $('.content').append(showLogsHtml)
}

const onViewLogsFailure = function () {
  failureMessage('Hmmmm. There seems to be a problem. Please try again')
}

const onDeleteLogSuccess = function () {
  successMessage('Coding Session Deleted Successfully')
  $('#delete-log').trigger('reset')
  $('.content').empty()
}

const onDeleteLogFailure = function () {
  failureMessage('Delete Session Failed.  Please Try Again')
  $('#delete-log').trigger('reset')
}

const onUpdateLogSuccess = function () {
  successMessage('Coding Session Updated Successfully')
  $('#update-log').trigger('reset')
  $('.content').empty()
}

const onUpdateLogFailure = function () {
  failureMessage('Coding Session NOT Updated. Please Try Again')
  $('#update-log').trigger('reset')
}

module.exports = {
  onAddLogSuccess,
  onAddLogFailure,
  onViewLogsSuccess,
  onViewLogsFailure,
  onUpdateLogSuccess,
  onUpdateLogFailure,
  onDeleteLogSuccess,
  onDeleteLogFailure
}
