import { backDrop } from './RemoveBackdrop.js';

const firstName = $("#fname");
const email = $("#email");
const phoneNumber = $("#phoneNumber");
const message = $("#message");

const clearInputs = () => {
  firstName.val('');
  email.val('');
  phoneNumber.val('');
  message.val('');
}

export const formValidation = () => {
  $('form').submit(function(e) {
    e.preventDefault();

    let isNameValid = false, isEmailValid = false, isNumberValid = false, isMessageVailid = false;

    $(".error").removeClass("show");

    if (firstName.val().trim().length < 1) {
      $(".name-error").addClass("show");
    } else {
      isNameValid = true;
    }

    if (email.val().trim().length < 1) {
      $(".email-error").addClass("show");
    } else {
      var email_regex = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+\.[a-zA-Z]{2,6}$/;
      var validEmail = email_regex.test(email.val().trim());
      if (!validEmail) {
        $(".email-error").addClass("show").text("Please enter a valid email");
      } else {
        isEmailValid = true;
      }
    }

    if (phoneNumber.val().trim().length < 1) {
      $(".number-error").addClass("show");
    } else {
      var number_regex = /^(\+995){1}5{1}(95|92|99|98|97|96|93|92|91|79|77|74|70|68|59|58|57|55|52|51|14)[0-9]{6}$/;
      var validNumber = number_regex.test(phoneNumber.val().trim());
      if (!validNumber) {
        $(".number-error").addClass("show").text("Please enter a valid phone number");
      } else {
        isNumberValid = true;
      }
    }

    if (message.val().trim().length < 1) {
      $(".message-error").addClass("show");
    } else {
      isMessageVailid = true;
    }

    if (isNameValid && isEmailValid && isNumberValid && isMessageVailid) {
      clearInputs();
      backDrop.addClass("visible");
    }
  });
}
