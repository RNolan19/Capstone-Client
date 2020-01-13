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

// lets try to send the button that got clicked and the logID with a diff function
// const triggerUpdateModal = function (correctButton, logID) {
//   event.preventDefault()
//   console.log('Event listener works')
//
//   const buttons = document.querySelectorAll('.update-card')
//   console.log(buttons)
//
//   // the event.target is the button that is clicked
//   const buttonThatGotClicked = event.currentTarget
//   // log that to make sure we have the right one
//   console.log(buttonThatGotClicked)
//
//   // this gives you just the long Id
//   console.log(buttonThatGotClicked.nextElementSibling.nextElementSibling.textContent)
//
//   // put the long ID in a variable + pass that to the API
//   const logId = buttonThatGotClicked.nextElementSibling.nextElementSibling.textContent
//
//   $('#modalLRForm').modal('show')
//
//
// }

// function onUpdateLog (event) {
//   event.preventDefault()
//
  // const form = event.target
  // console.log(form)
  // const formData = getFormFields(form)
  // console.log(formData)
//
//   // this logs the formData date entered
//   const formDataDate = formData.log.date
//   console.log(formData.log.date)
//
//   // this logs all the buttons
//   // const buttons = document.querySelectorAll('.update-card')
//   // console.log(buttons.parentElement)
//
//   const cards = document.querySelectorAll('.list-group')
//   console.log(cards)



  // Loop thru cards....if card date = formData date, return card

  // this logs all the Ids
  // const buttonIds = buttons.forEach(button => console.log(button.nextElementSibling.nextElementSibling.textContent))
  // console.log(buttonIds)

  // That gives us all the card dates
  // const cardDates = buttons.forEach(button => console.log(button.parentElement.firstElementChild.textContent))
  // console.log(cardDates)


  // if the formData date === the cardDate, the id ===
  // let id = ''
  // if (formDataDate === cardDates) {
  //   console.log('that kinda works')
  // }

  // api.onUpdateLog(formData)
  //   .then(ui.onUpdateLogSuccess)
  //   .catch(ui.onUpdateLogFailure)
// }

// const buttons = document.querySelectorAll('.update-card')
// console.log(buttons)
//
// const modalUpdateForm = document.querySelector('.update-log')
// console.log(modalUpdateForm)
//
const onUpdateLog = function (event) {
  event.preventDefault()

  console.log('Event listener works')

  // 1) This finds which button was clicked
  // the event.target is the button that is clicked
  const buttonThatGotClicked = event.target

  // log that to make sure we have the right one
  console.log(buttonThatGotClicked)
  // 2) This gets the uniqueID so that you can update the forms
  // this gives you just the long Id

  console.log(buttonThatGotClicked.id)

  document.getElementById('focustarget').value = buttonThatGotClicked.id

  // put the long ID in a variable + pass that to the API
  // const logId = buttonThatGotClicked.nextElementSibling.nextElementSibling.textContent

  // 3) This makes the modal pop up

  $('#modalLRForm').modal('show')
}

// This gets what is entered into the update modal
// const formDataTarget = document.querySelector('#update-log')
// console.log(formDataTarget)
//
// const formData = getFormFields('#hours')
// console.log(formData)
//
// // Now we need a way to send formData and the uniqueID to the API
// // We need to tell the computer to send that info when the modal update button is clicked
//
// // $('.update-log').on('submit', function() { console.log(formData, logId)
// const modalUpdateForm = document.querySelector('#update-log')
// console.log(modalUpdateForm)
//
// modalUpdateForm.addEventListener('submit', function (event) {
//   event.preventDefault()
//   console.log(formData)
//   console.log(logId)
// api.onUpdateLog(formData, logId)
//   .then(ui.onUpdateLogSuccess)
//   .catch(ui.onUpdateLogFailure)

//     api.onUpdateLog(formData, logId)
//   .then(ui.onUpdateLogSuccess)
//   .catch(ui.onUpdateLogFailure)
// }
//
// modalOuter.addEventListener('click', function(event) {
//   const isOutside = !event.target.closest('.modal-inner');
//   if (isOutside) {
//     closeModal();
//   }

function sendFormData () {
  event.preventDefault()

  const form = event.target
  console.log('form', form)
  console.log('id', document.getElementById('focustarget').value)
  const myId = document.getElementById('focustarget').value
  const formData = getFormFields(form)
  console.log(formData)

  api.onUpdateLog(formData, myId)
    .then(ui.onUpdateLogSuccess)
    .catch(ui.onUpdateLogFailure)
}

// $(document).on('submit', '.update-log', item.onEditItem)

module.exports = {
  onAddLog,
  onUpdateLog,
  onViewLogs,
  onDeleteLog,
  sendFormData
}
