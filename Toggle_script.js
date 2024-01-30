togglePassword = document.querySelector("#togglePassword")
password = document.querySelector(".ps")
togglePassword.addEventListener("click",
 function() {
const type = password.getAttribute("type") === "password" ? "text":"password";
password.setAttribute("type",type);
this.classList.toggle = "bi-eye";
})
const form = document.querySelector("form");
form.addEventListener("submit",function(e) {
	e.preventDefault();
})