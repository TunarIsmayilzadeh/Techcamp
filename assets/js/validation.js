$(document).ready(function () {
    // Custom method for phone validation
    $.validator.addMethod(
      "azerbaijanPhone",
      function (value, element) {
        // This regex now strictly follows the mask applied below
        return (
          this.optional(element) ||
          /^(\+994|0)(50|51|55|70|77|99|10)-(\d{3})-(\d{2})-(\d{2})$/.test(value)
        );
      },
      "Düzgün nömrə daxil edin!"
    );

    // Validating the form
    $("#orderForm").validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        email: {
          required: true,
          email: true,
        },
        telephone: {
          required: true,
          azerbaijanPhone: true,
        },
        message: {
          required: true,
          maxlength: 1000,
        },
      },
      messages: {
        name: {
          required: "Boş buraxıla bilməz!",
          minlength: "Minimum 3 simvol tələb olunur!",
        },
        email: {
          required: "Boş buraxıla bilməz!",
          email: "Düzgün email daxil edin!",
        },
        telephone: {
          required: "Boş buraxıla bilməz!",
          azerbaijanPhone: "Düzgün nömrə daxil edin! (nümunə: +994-XX-XXX-XX-XX)",
        },
        message: {
          required: "Boş buraxıla bilməz!",
          maxlength: "Maksimum 1000 simvol",
        },
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        error.insertAfter(element);
      },
      submitHandler: function (form) {
        // Handle the submission of the form
        alert("Form is valid! Sending data...");
        form.submit();
      },
    });
  });
  
  // telephone format on order form
  $("#orderForm input[name=telephone]").inputmask({
    mask: "+994(50|51|55|70|77|99|10)-###-##-##",
    clearIncomplete: true, // clear the input if it is incomplete
    showMaskOnHover: false,
    definitions: {
      "#": {
        validator: "[0-9]",
        cardinality: 1,
      },  
    },
  });

