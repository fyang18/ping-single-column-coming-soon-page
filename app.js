var submit = document.getElementById("submit");
submit.addEventListener("click", send);

function send() {
	var email = document.getElementById("email");
	var error = document.getElementById("error");
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.value.length !== "" && (email.value.match(mailformat))) {
		error.style.display = "none";
		email.style.border = "1px solid #c3d4ff";
		email.value = "";
	} else {
		error.style.display = "block";
		email.style.border = "2px solid hsl(354, 100%, 66%)";
	}

}