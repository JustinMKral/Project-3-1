/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Justin Kral
      Date:   9/10/26

      Filename: project03-01.js
*/

//load the checked box elements into an array
let menuItems = Array.from(document.getElementsByClassName("menuItem"));

//listen for clicks on the checked box
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

function calcTotal() {
  let orderTotal = 0;

//iterate through the list of possible sales and total the price
for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].checked) {
    orderTotal += Number(menuItems[i].value);
  }
}

    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}




 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
