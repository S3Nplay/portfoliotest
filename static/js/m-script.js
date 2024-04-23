function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    if (nameInput.value === '' || emailInput.value === '') {
      alert('Please fill in the first two fields for sending');
      return false;
    }

    var formInputs = document.querySelectorAll('.contact-section input, .contact-section textarea');

    formInputs.forEach(function (input) {
      if (input.type !== 'submit') {
        input.value = '';
      }
    });

    alert('Your message has been successfully sent!');

    var submitButton = document.querySelector('.contact-item input[type="submit"]');
    submitButton.classList.add('submitted');

    submitButton.addEventListener('transitionend', function () {
      submitButton.classList.remove('submitted');
    });
}



function copyCode(codeSnippetId) {
  var codeSnippet = document.getElementById(codeSnippetId);

  codeSnippet.select();
  codeSnippet.setSelectionRange(0, 99999); 

  try {
    
    document.execCommand('copy');
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Unable to copy text to clipboard', err);
  }

  window.getSelection().removeAllRanges();
}



function downloadCV() {
  var pdfUrl = 'https://drive.google.com/file/d/190CQf8eVMKjSlcsChh5XxxFEbhCeNcfx/view?usp=drive_link';  

  var link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'CV.pdf';
  link.target = '_blank';

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
}
