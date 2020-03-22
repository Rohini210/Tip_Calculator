function tipCalculator()
{
	var amt =Number(document.getElementById("amount").value);
	var amt_tip = Number(document.getElementById("total").value);

	if(amt === " " || amt_tip == 0)
	{
		alert("Please fill all boxes");
		return ;
	}
	
	alert(amt + (amt * (amt_tip/100)));	
	
}
