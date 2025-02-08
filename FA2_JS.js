function Calculate_sum()
{
	var num1 = document.getElementById("num1").value;
	document.getElementById("num1").innerHTML = num1;
	var num2 = document.getElementById("num2").value;
	document.getElementById("num2").innerHTML = num2;
	var sum = parseInt(num1) + parseInt(num2);
	document.getElementById("result").innerHTML = ("The sum of " + num1 + " and " + num2 + " is " + sum + ".");
	return sum;
}
function Calculate_diff()
{
    var num1 = document.getElementById("num1").value;
	document.getElementById("num1").innerHTML = num1;
	var num2 = document.getElementById("num2").value;
	var diff = num1 - num2;
	document.getElementById("result").innerHTML = ("The difference of " + num1 + " and " + num2 + " is " + diff + ".");
	return diff;
}
function Calculate_prod()
{
    var num1 = document.getElementById("num1").value;
	document.getElementById("num1").innerHTML = num1;
	var num2 = document.getElementById("num2").value;
	var prod = num1 * num2;
	document.getElementById("result").innerHTML = ("The product of " + num1 + " and " + num2 + " is " + prod + ".");
	return prod;
}
function Calculate_quo()
{
    var num1 = document.getElementById("num1").value;
	document.getElementById("num1").innerHTML = num1;
	var num2 = document.getElementById("num2").value;
	var quo = num1 / num2;
	document.getElementById("result").innerHTML = ("The quotient of " + num1 + " and " + num2 + " is " + quo + ".");
	return quo;
}
function Calculate_rem()
{
    var num1 = document.getElementById("num1").value;
	document.getElementById("num1").innerHTML = num1;
	var num2 = document.getElementById("num2").value;
	var rem = num1 % num2;
	document.getElementById("result").innerHTML = ("The remainder of " + num1 + " and " + num2 + " is " + rem + ".");
	return rem;
}