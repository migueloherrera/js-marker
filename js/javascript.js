$(document).ready(function() {
  $('#coordinates').validate({
    submitHandler: function(form) {
      // call add marker
      form.submit();
      return false
    },
    invalidHandler: function( event, validator ) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        var message = (errors === 1) ? 'highlighted field' : errors + ' highlighted fields';
        $('.submitError').show().find('span').html(message);
      }
    },
    rules: {
      latitude: {
        required: true
      },
      longitude: {
        required: true
      },
      message: {
        required: true
      }
    },
    messages: {
      latitude: {
        required: 'Please enter a latitude...'
      },
      longitude: {
        required: 'Please enter a longitude...'
      },
      message: {
        required: 'Please enter a message...'
      }
    }
  });
});
