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
  successMessage('Here Are Your Coding Sessions For This Month:')
  setTimeout(function () {
    successMessage('')
  }, 3000)

  // January Logic
  const dataLogsJan = data.logs.filter(item => (item.date[1] === '1') || item.date.includes('Jan') || item.date.includes('jan'))
  console.log(dataLogsJan)
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
  }

  // Feb Logic
  // January Logic
  const dataLogsFeb = data.logs.filter(item => (item.date[1] === '2') || item.date.includes('Feb') || item.date.includes('feb'))
  console.log(dataLogsFeb)
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
