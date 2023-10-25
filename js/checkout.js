// OPEN COLLAPSE
function openColl(buttonId) {
  var colls = document.getElementsByClassName('collapse');
  document.getElementById(buttonId + "tick").style.display = 'none';
  document.getElementById(buttonId + "selected").innerText = '';
  for (var i = 0; i < colls.length; i++) {
    if (colls[i].id === buttonId) {
      var btn = document.getElementById(buttonId);
      var content = document.getElementById(buttonId + 'Content');
      content.style.display = 'block';
      btn.style.color = 'rgb(255, 68, 0)';
    }
    else {
      document.getElementById(colls[i].id + 'Content').style.display = 'none';
      colls[i].style.color = "black";
    }
  }
}

// ADD NEW ADDRESSES
function addNewAddress() {
  const nameField = document.querySelector("#name");
  const mobileNoField = document.getElementById("mobile");
  const addressField = document.getElementById("address");
  const pincodeField = document.getElementById("pincode");
  const cityField = document.getElementById("city");
  const stateField = document.querySelector("#state");
  const addBtn = document.getElementById("submitBtn");

  const userName = nameField.value;
  const userMobile = mobileNoField.value;
  const userAddress = addressField.value;
  const userPincode = pincodeField.value;
  const userCity = cityField.value;
  const userState = stateField.value;

  const newAdd = document.createElement("div");
  newAdd.className = "delivery-add";

  const inputTag = document.createElement("input");
  inputTag.type = "radio";
  inputTag.className = "deliveryAdd";
  inputTag.name = "DeliveryRadio";
  inputTag.value = "delivery-address";
  newAdd.appendChild(inputTag);

  const bolderSpan = document.createElement("span");
  bolderSpan.className = "bolder";
  bolderSpan.innerText = userName + " ";
  newAdd.appendChild(bolderSpan);

  const spanTag = document.createElement("span");
  spanTag.innerText = userAddress + " ";
  newAdd.appendChild(spanTag);

  const upperCaseSpan = document.createElement("span");
  upperCaseSpan.className = "uppercase";
  upperCaseSpan.innerText = userCity + " " + userState + " " + userPincode + " India";
  newAdd.appendChild(upperCaseSpan);
  newAdd.setAttribute('onclick', "selectRadio(this)");
  document.getElementById("new-addresses").appendChild(newAdd);
  nameField.value = "";
  mobileNoField.value = "";
  addressField.value = "";
  pincodeField.value = "";
  cityField.value = "";
  stateField.value = "none";
}


// POPUP
const popup = document.querySelector(".popup");
function openPopup() {
  popup.classList.add('open');
}
function closePopup() {
  popup.classList.remove('open');
}


// ENABLE 
function enable(toEnable) {
  document.getElementById(toEnable).style.pointerEvents = "auto";
}



// ADDRESS FORM SUBMISSION  

const form = document.getElementById("addressForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission


  var stateSelect = document.getElementById("state");
  if (stateSelect.value === "none") {
    event.preventDefault();
    alert("Please choose a state");
    return;
  }

  if (form.checkValidity()) {
    // Form is valid, handle successful submission
    closePopup();
    addNewAddress();
  }
})

// SELECT RADIO FROM DIV
function selectRadio(div) {
  var radio = div.querySelector('.deliveryAdd');
  radio.checked = true;
  showUseThisButton();
}


// SHOW USE THIS ADDRESS BUTTON
function showUseThisButton() {
  var radioButtons = document.querySelectorAll('.deliveryAdd');
  var useThisButton = document.getElementById('useThis');

  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      useThisButton.style.display = 'inline';
      break; // Exit the loop when a checked radio button is found
    }
  }
}

// USE THIS ADDRESS
function useThisAdd() {
  var radioButtons = document.querySelectorAll('.deliveryAdd');
  var deliveryAdds = document.querySelectorAll('.delivery-add');

  enable("paymentOps");
  var checkedNum = 0;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedNum++;
    }
  }
  if (checkedNum == 0) {
    alert("No address selected");
    return;
  }

  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      deliveryAdds[i].style.display = 'block';
      document.getElementById("deliverytick").style.display = 'inline';
      document.getElementById("deliveryselected").innerHTML = deliveryAdds[i].innerText;
    } else {
      deliveryAdds[i].style.display = 'none';
    }
  }

  document.getElementById("useThis").style.display = 'none';
  document.getElementById("addAddress").style.display = 'none';
  document.getElementById("changeAddress").style.display = 'inline';
  document.getElementById("your-addresses").style.display = 'none';
  enable('delivery');
  openColl("paymentOps");
}

// CHANGE ADDRESS

function changeAdd() {
  var radioButtons = document.querySelectorAll('.deliveryAdd');
  var deliveryAdds = document.querySelectorAll('.delivery-add');
  for (var i = 0; i < deliveryAdds.length; i++) {
    radioButtons[i].checked = false;
    deliveryAdds[i].style.display = 'block';
  }
  document.getElementById("useThis").style.display = 'inline';
  document.getElementById("addAddress").style.display = 'inline';
  document.getElementById("changeAddress").style.display = 'none';
  document.getElementById("your-addresses").style.display = 'inline';
}

var radioButtons = document.querySelectorAll('.deliveryAdd');
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', showUseThisButton);
}



// PAYMENTS OPTIONS

document.getElementById('payment-form').addEventListener('submit', function (event) {


  // Validate and process the card details here
});

function selectRadio2(div) {
  var radio = div.querySelector('.paymentOpRadio');
  radio.checked = true;
  showUseThisButton();
}

function showInput(radioId) {

  if (radioId === '1') {
    document.getElementById("payment-form").style.display = 'block';
    document.getElementById("banks").style.display = 'none';
    document.getElementById("upi").style.display = 'none';
    document.getElementById("upiBtn").style.display = 'none';
  }
  else if (radioId === '2') {
    document.getElementById("banks").style.display = 'inline';
    document.getElementById("payment-form").style.display = 'none';
    document.getElementById("upi").style.display = 'none';
    document.getElementById("upiBtn").style.display = 'none';
  }
  else if (radioId === '3') {
    document.getElementById("upi").style.display = 'inline';
    document.getElementById("upiBtn").style.display = 'inline';
    document.getElementById("banks").style.display = 'none';
    document.getElementById("payment-form").style.display = 'none';
  }
  else {
    document.getElementById("payment-form").style.display = 'none';
    document.getElementById("banks").style.display = 'none';
    document.getElementById("upi").style.display = 'none';
    document.getElementById("upiBtn").style.display = 'none';
  }
}

function useThisPay() {
  var radioButtons = document.querySelectorAll('.paymentOpRadio');
  var checkedNum = 0;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedNum++;
    }
  }
  if (checkedNum == 0) {
    alert("No payment method selected");
    return;
  }
  var selectedPaymentMethod = document.querySelector('input[name="PaymentRadio"]:checked');
  var selectedPaymentMethodValue = selectedPaymentMethod ? selectedPaymentMethod.value : "";
  var continueButton = document.getElementById('continueBtn');
  continueButton.style.pointerEvents = "click";
  continueButton.style.pointerEvents = "hover";
  console.log(selectedPaymentMethodValue);
  if (selectedPaymentMethodValue) {
    // Hide all payment method content
    var paymentMethodContent = document.querySelectorAll('.paymentOp');
    paymentMethodContent.forEach(function (element) {
      element.style.display = 'none';
    });
    document.getElementById("paymentOpsContent").style.display = 'none';

    // You can also display the selected payment method name or other information as needed
    var paymentOpsselected = document.getElementById('paymentOpsselected');
    paymentOpsselected.style.display = 'inline';
    document.getElementById("paymentOpstick").style.display = 'inline';
    paymentOpsselected.innerText = selectedPaymentMethodValue;
    document.getElementById("paymentOps").style.color = "black";

  }
}
