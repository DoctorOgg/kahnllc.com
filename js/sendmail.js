//var URL = 'https://zi07qrxhsh.execute-api.us-east-1.amazonaws.com/prod/kahnllc-sendmessage'
var URL = 'https://2c07psumw1.execute-api.us-east-1.amazonaws.com/prod/kahnllc-sendmessage'

// $('#contact-form').submit(function (event) {
$('#form-button').click(function (event) {
  event.preventDefault()

  var data = {
    name: $('#form-name').val(),
    email: $('#form-email').val(),
    message: $('#form-message').val()
  }

  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    crossDomain: true,
    success: function () {
      // clear form and show a success message
      $( "#form-sent" ).show();
    },
    error: function () {
      // show an error message
      $( "#details-error" ).show();
    }
  })
})
