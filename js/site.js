//Get the string from the page
//controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(userString){

    let revString = [];

    //let name = Bobby;
    //name[0] = "B";
    //name [4] = "y";
    //last pos in an array name.length -1 

    //reverse a strong using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }

    return revString;
}

//Display our message with reversed string to the user
//View function
function displayString(revString){

    //write to the page
    document.getElementById("msg").innerHTML = `Your word reversed is ${revString}`;
    //turn on the alert box
    document.getElementById("alert").classList.remove("invisible");

}