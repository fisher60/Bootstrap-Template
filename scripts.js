// var name=prompt("What is your name?");
 
// if (name == "kyler") alert('Welcome twat!')
// else {
// alert("Welcome " + name)

 
// }


window.onload = init;
function init(){
	document.getElementById('btnSubmit').onclick=validate;
}

function validate(){
	var first_name=document.getElementById("fname").value;
	var last_name=document.getElementById("lname").value;
	var message=document.getElementById("subject").value;

	alert("Thanks " + first_name + " " + last_name +" for your message saying " + message + " This site is currently under construction, please contact us at TheSombros@gmail.com.");
}