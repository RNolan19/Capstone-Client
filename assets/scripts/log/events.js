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

const onDeleteLog = function (event) {
  event.preventDefault()
  console.log('I clicked the delete button')
  const formData = getFormFields(event.target)
  api.onDeleteLog(formData)
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
