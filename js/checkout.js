const submitBtn = document.getElementById('btn-s');

const validate = (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  if (username.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
  if (password.value === "") {
    alert("Please enter your password.");
    password.focus();
    return false;
  }
  window.location.href='./checkout2.html'
  return true;
}

submitBtn.addEventListener('click', validate);

