var apple = "Red Apple";
//alert(apple);
var appleWeight = 4;
//alert(appleWeight);

var currentInvWeight = 10;
var maxInvWeight = 15;

if (currentInvWeight + appleWeight > maxInvWeight ){
	alert("Too Heavy");
} else {
 alert("You pick up a "+ apple );
 currentInvWeight = currentInvWeight + appleWeight;
}
