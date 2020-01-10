'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddLog = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.addLog(formData)
    .then(ui.onAddLogSuccess)
    .catch(ui.onAddLogFailure)
}

const onViewLogs = function (event) {
  event.preventDefault()
  api.onViewLogs()
    .then(ui.onViewLogsSuccess)
    .catch(ui.onViewLogsFailure)
}

//right now if any button is clicked, we run the deleteLog function. It is deleting the first button



const onDeleteLog = function (event) {
  event.preventDefault()
  const buttons = document.querySelectorAll('.delete-card')
  console.log(buttons)

  // the event.target is the button that is clicked
  const buttonThatGotClicked = event.currentTarget
  // log that to make sure we have the right one
  console.log(buttonThatGotClicked)
  // the nextElement after the delete button (which I've hid) is the long ID number
  console.log(buttonThatGotClicked.nextElementSibling)
  // this gives you just the long Id
  console.log(buttonThatGotClicked.nextElementSibling.textContent)

  // put the long ID in a variable + pass that to the API
  const logId = buttonThatGotClicked.nextElementSibling.textContent

  // console.log(buttonThatGotClicked.parentElement('log-id').classList('.log-id'))
  // console.log($(buttonThatGotClicked.parent('log-id')))
  // console.log(eventTarget.textContent)

    // const logId = document.querySelector('.log-id').textContent
    // console.log(logId)

  api.onDeleteLog(logId)
    .then(ui.onDeleteLogSuccess)
    .catch(ui.onDeleteLogFailure)
}

const onUpdateLog = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.onUpdateLog(formData)
    .then(ui.onUpdateLogSuccess)
    .catch(ui.onUpdateLogFailure)
}

module.exports = {
  onAddLog,
  onUpdateLog,
  onViewLogs,
  onDeleteLog
}
