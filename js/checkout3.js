const submitBtn = document.getElementById('btn-ps');

const validate = () => {
  const cardinput = document.getElementById('cardinput');
  const nameinput = document.getElementById('nameinput');
  const dateinput = document.getElementById('dateinput');
  const cvvinput = document.getElementById('cvvinput');
  if (cardinput.value === "") {
    alert("Please enter your card number.");
    return false;
  }
  if (nameinput.value === "") {
    alert("Please enter your name.");
    return false;
  }
  if (dateinput.value === "") {
    alert("Please enter the expire date .");
    return false;
  }
  if (cvvinput.value === "") {
    alert("Please enter the CVV.");
    return false;
  }
  window.location.href='./payment.html'
  return true;
}

submitBtn.addEventListener('click', validate);
