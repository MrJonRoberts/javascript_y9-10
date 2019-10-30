

// inventory is an array.
// NOTE inventory = ["red apple", "potion of healing", "sword of truth"];

var inventory = [];
// money is a dictionary.
// NOTE money = { 'gold': 20, 'silver': 40}
var money = {};

// stuff to put into inventory.
// pot1 = { 'name': 'Red Potion', 'healing': 200, 'desc': "This heals you"}

var pot1 = "Red Potion";
var pot2 = "Blue Potion";
var pot3 = "Green Potion";

// how much money you have
var gold = 20;
var silver = 200;

money['gold'] = gold;
money['silver'] = silver;
// start to put things into the inventory.
inventory.push(pot1);
inventory.push(pot2);
inventory.push(pot3);
inventory.push(money);

// for loops 
// var i = 0 ---- set our counter to 0
// i < inventory.length ----- is i less than the length of our inventory
// i++ ---- increase our counter by 1
for (var i = 0; i < inventory.length; i++){
	// get the message area
	msg = document.getElementById('message');
  // add the item
  msg.innerHTML += "<br/>"+inventory[i];
 /* if (typeOf(inventory[i]) == 'object]'){
     for (key in inventory[i]) {
          var value = inventory[i]['money']
          msg.innerHTML += "<br/>"+key + " "+ value;
     }          
  }*/

}
