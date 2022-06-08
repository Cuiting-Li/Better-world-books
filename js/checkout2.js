const submitBtn = document.getElementById('btn-sc');

const validate = () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const addressinput = document.getElementById('addressinput');
  const cityinput = document.getElementById('cityinput');
  const stateinput = document.getElementById('stateinput');
  const pcinput = document.getElementById('pcinput');
  if (name.value === "") {
    alert("Please enter your name.");
    return false;
  }
  if (email.value === "") {
    alert("Please enter your email.");
    return false;
  }
  if (addressinput.value === "") {
    alert("Please enter your address.");
    return false;
  }
  if (cityinput.value === "") {
    alert("Please enter your city.");
    return false;
  }
  if (stateinput.value === "") {
    alert("Please enter your state.");
    return false;
  }
  if (pcinput.value === "") {
    alert("Please enter your postol code.");
    return false;
  }

  window.location.href='./checkout3.html'
  return true;
}

submitBtn.addEventListener('click', validate);