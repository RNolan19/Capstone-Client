'use strict'
// require store object, so we can keep track of the user and their unique token
const store = require('../store')
const showLogsTemplate = require('../templates/log-listing.handlebars')

const deleteButton = document.querySelector('.delete-card')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  // $('.alert-success').text(newText)
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onAddLogSuccess = function () {
  successMessage('Coding Session Added Successfully!')
  // $('.alert-success').show('Coding Session Added Successfully!')
  $('#modalLRForm').modal('hide')
  $('.content').empty()
  $('.content-feb').empty()
  $('#add-log').trigger('reset')
  $('.feb').hide()
  setTimeout(function () {
    successMessage('')
  }, 4000)
}

const onAddLogFailure = function () {
  failureMessage('Failed To Add Coding Session')
  $('#add-log').trigger('reset')
}

const onViewLogsSuccess = (data) => {
  successMessage('Here Are Your Coding Sessions For This Month:')
  // $('.alert-success').show('Here Are Your Coding Sessions For This Month:')
  // successMessage('Here Are Your Coding Sessions For This Month:')
  setTimeout(function () {
    successMessage('')
  }, 3000)

  const dataID = data.logs

  // January Logic

  const dataLogsJan = data.logs.filter(item => (item.date[1] === '1') || item.date.includes('Jan') || item.date.includes('jan'))
  // console.log(dataLogsJan)
  // const dateEntered = dataLogs.forEach(item => console.log(item.date[1]))
  // console.log(dateEntered)
  store.logs = dataLogsJan

  const showLogsHtml = showLogsTemplate({ logs: dataLogsJan })
  // console.log(dateEntered[1])
  // if(dateEntered === '1')  {
  // || dateEntered.includes('jan')  || dateEntered.includes('Jan'))
  if (dataLogsJan) {
    $('.content').empty()
    $('.content').append(showLogsHtml)
    $('.log-id').hide()
    $('.log-id-title').hide()
  }

  // Feb Logic
  const dataLogsFeb = data.logs.filter(item => (item.date[1] === '2') || item.date.includes('Feb') || item.date.includes('feb'))
  // console.log(dataLogsFeb)
  // const dateEntered = dataLogs.forEach(item => console.log(item.date[1]))
  // console.log(dateEntered)
  store.logs = dataLogsFeb

  const showLogsHtmlFeb = showLogsTemplate({ logs: dataLogsFeb })
  // console.log(dateEntered[1])
  // if(dateEntered === '1')  {
  // || dateEntered.includes('jan')  || dateEntered.includes('Jan'))
  if (dataLogsFeb) {
    $('.feb').show()
    $('.content-feb').empty()
    $('.content-feb').append(showLogsHtmlFeb)
    $('.log-id').hide()
    $('.log-id-title').hide()
  }
}

const onViewLogsFailure = function () {
  failureMessage('Hmmmm. There seems to be a problem. Please try again')
}

const onDeleteLogSuccess = function () {
  successMessage('Coding Session Deleted Successfully')
  setTimeout(function () {
    successMessage('')
  }, 4000)
  $('#delete-log').trigger('reset')
  $('.content').empty()
  $('.content-feb').empty()
}

const onDeleteLogFailure = function () {
  failureMessage('Delete Session Failed.  Please Try Again')
  $('#delete-log').trigger('reset')
}

const onUpdateLogSuccess = function () {
  $('#modalLRForm').modal('hide')
  $('.content').empty()
  $('.content-feb').empty()
  successMessage('Coding Session Updated Successfully')
  $('#update-log').trigger('reset')
  setTimeout(function () {
    successMessage('')
  }, 4000)
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
