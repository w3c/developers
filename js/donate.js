/*function paypal() {
	var form = document.getElementById('form_field_paypal').style.display='';
	var form = document.getElementById('form_field_credit').style.display='none';
}

function credit() {
	var form = document.getElementById('form_field_credit').style.display='';
	var form = document.getElementById('form_field_paypal').style.display='none';
}*/

var targets = {
	'w3c': {
		'key':'w3c'
	},
	'devtools': {
		'key': 'devtools'
	}
}

var currentTarget = 'w3c';
var currentAmount = 20;

function setTarget(name) {
	currentTarget = name;
	console.log(name);
}

function setAmount(amount){
	currentAmount = amount;
	console.log(amount);
}

function setOtherAmount(){
	setAmount(document.getElementById('other-amount-field').value);
}

function setPaymentMethod(method){
	if(method == 'credit'){
		console.log(method + currentTarget + currentAmount);
		generateCreditForm();
	} else {
		console.log(method + currentTarget + currentAmount);
		generatePaypalForm();
	}
}

function generatePaypalForm(){
	document.getElementById('data-field').innerHTML = document.getElementById('data-field').innerHTML
	+ '<input type="hidden"  name="cmd" value="_donations" id="cmd_donation">'
	+ '<input type="hidden" name="business" value="&#x76;&#x61;&#x6C;&#x69;&#x64;&#x61;&#x74;&#x6F;&#x72;&#x2D;&#x64;&#x6f;&#x6e;&#x61;&#x74;&#x65;&#x40;w3.org">'
	+ '<input type="hidden" name="item_name" value="W3C Validators Supporters donation">'
}



var steps = document.getElementsByClassName('step');

function init() {
	steps[0].style.display="";
	for(var i = 1; i <= steps.length - 1; i++) {
		steps[i].style.display="none";
	}
}

function next(btn) {
	steps[btn.parentElement.getAttribute('step')-1].style.display="none";
	steps[btn.parentElement.getAttribute('step')].style.display="";
}

init();
