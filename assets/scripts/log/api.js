const config = require('../config')
const store = require('../store')
const showLogsTemplate = require('../templates/log-listing.handlebars')

const addLog = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/logs',
    headers: {
      // the token was saved in the store when we signed up
      // we access it through store.user.token
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const onViewLogs = function () {
// we make a request to out API and we MUST RETURN the result.
  return $.ajax({
    // The method is which HTTP verb to use when making the request.catch
    // We use POST because our documentation told us to.  APIs will have documentation
    method: 'GET',
    // the url our API is expecting when we create a new example.
    // We use '/examples' because our documentation told us to. OBEY THE API's instructions
    url: config.apiUrl + '/logs',
    // This is our authorization header. It tells the API who we are by using our user's token to identify us
    // our API needs to know who we are to create anything.  You need a token to create anything.
    headers: {
      // the token was saved in the store when we signed up
      // we access it through store.user.token
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onDeleteLog = function (logId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/logs/' + logId,
    headers: {
      // the token was saved in the store when we signed up
      // we access it through store.user.token
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onUpdateLog = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/logs/' + formData.log.id,
    headers: {
      // the token was saved in the store when we signed up
      // we access it through store.user.token
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  addLog,
  onViewLogs,
  onUpdateLog,
  onDeleteLog
}
