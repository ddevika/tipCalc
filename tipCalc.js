<script language = "javascript" type = "text/javascript">
function tCalc() {
	
 var amt, tip, result;


  amt = +document.getElementById ('totalamt').value;
 // tip = +document.getElementById ('tipamt').value;

  //tip amount 
  	var tip;
		if (document.myForm.tipamt[0].checked==true) {tip="15";}
		else if (document.myForm.tipamt[1].checked==true) {tip="18";}
		else if (document.myForm.tipamt[2].checked==true) {tip="20";}
		else if (document.myForm.tipamt[3].checked==true) {tip="25";}
		

  //split between people
  var split;
  	if (document.myForm.totsplit.value == "")
	{
	split = 1;
	}

	else {
	split = +document.getElementById ('totsplit').value;
	}
//var split = 1;

result = (amt + (amt * (tip/100)))/split; 

result = result.toFixed(2);

//alert(result);
document.getElementById('outputArea').value = result;
//return result;
}

//test function for debugging
function onClick(item){

	var balance;
		if (document.myForm.tipamt[0].checked==true) {balance="15";}
		else if (document.myForm.tipamt[1].checked==true) {balance="18";}
		else if (document.myForm.tipamt[2].checked==true) {balance="20";}
		else if (document.myForm.tipamt[2].checked==true) {balance="25";}
	
	alert(balance)
}

function submit()
{
	document.getElementById("myForm").submit()
}

</script>
