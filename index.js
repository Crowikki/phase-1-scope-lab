// Write your solution in this file!

var customerName = "bob"

function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
   // this changes the customer name b/c we modified the global variable
}


 function setBestCustomer(){
    bestCustomer = "not bob"
    return bestCustomer;
 }

 function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
    return bestCustomer;
 }

 const leastFavoriteCustomer = "dave"
 
 function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "jeff"
    return leastFavoriteCustomer;
 }
 // can't change the value because it was declared with const globally