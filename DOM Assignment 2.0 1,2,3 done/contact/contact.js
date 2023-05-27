// Change Placeholder Value of Output Form
const par = document.getElementsByClassName('mainLeftDetails')[0];
par.getElementsByTagName('input')[0].placeholder='FSJS 2.0';
par.getElementsByTagName('input')[1].placeholder='fsjs@ineuron.ai';
par.getElementsByTagName('textarea')[0].placeholder='Hello Word';

// Change Placeholder Value of Input Form
const hel = document.getElementsByClassName('mainRight')[0];
const form = hel.getElementsByTagName('form')[0];
form.getElementsByTagName('input')[0].placeholder = "'FSJS 2.0";
form.getElementsByTagName('input')[1].placeholder = "fsjs@ineuron.ai";
form.getElementsByTagName('textarea')[0].placeholder = "Hello Word";

$(document).ready(function () {
	$(".userName").keyup(function(){ 
		let usenm = $(this).val();
		$('.enterName').val(usenm);
	});

	$(".userEmail").keyup(function(){
		let usereml = $(this).val();
		$('.enterMail').val(usereml);
	});

	$(".userMessage").keyup(function(){
		let usermsg = $(this).val();
		$('.enterMessage').val(usermsg);
	});

});