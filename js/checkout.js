const submitBtn = document.getElementById('btn-s');

const validate = () => {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  if (username.value === "") {
    alert("Please enter your username or email.");
    return false;
  }
  if (password.value === "") {
    alert("Please enter your password.");
    return false;
  }
  window.location.href='./checkout2.html'
  return true;
}

submitBtn.addEventListener('click', validate);

