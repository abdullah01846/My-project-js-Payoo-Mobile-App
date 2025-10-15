document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    
    const acountNumber = document.getElementById("Acount-Number").value;
    const pin = document.getElementById("pin").value;
    const convertedpin = parseInt(pin);


    if (acountNumber.length === 11) {
      if (convertedpin === 1234) {
        window.location.href = "./main.html";
      } else {
          alert("pin Number not oky");
      }
    } 
    else {
        alert('need valid acount number')
    }
  });
