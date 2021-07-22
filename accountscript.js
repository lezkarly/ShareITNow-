/***********************************************************************
 *  Logging In Setup
 **********************************************************************/

var database = [
    {
        username: "webdevlover198",
        password: "2015k"
    },
    {   
        username: "krista",
        password: "123"
    },
    {
        username: "jess",
        password: "password"
    }
];

inputInfo();

function inputInfo(){
    var userInput = prompt("Type in your username");
    var passInput = prompt("Now type in your password");
    //found(userInput, passInput);
    signIn(userInput, passInput);
}

function found(usernameI, passwordI){
    for(var i = 0; i < database.length; i++){
        if(usernameI === database[i].username && passwordI === database[i].password)
        {   
            //username found in database
            return true;
        }
    }//end of for loop
    return false
}


function signIn(usernameI, passwordI)
{   
    if(found(usernameI, passwordI) == true)
    {
        console.log("You logged in", usernameI + "!");
    }
    else {
        alert("Wrong Username or Password. Please log in again.");
        inputInfo();
    }
    
}

/***********************************************************************
 *  Logging In Setup
 **********************************************************************/


/***********************************************************************
 *  Change Background
 **********************************************************************/

 var color1 = document.querySelector(".color1");
 var color2 = document.querySelector(".color2");
 var body = document.getElementById("grad");
 
 
 function setGradient(){
     body.style.background = 
     "linear-gradient(to right, " 
     + color1.value 
     + ", " 
     + color2.value 
     + ")";

 }
 
 
 color1.addEventListener("input", setGradient);
 
 color2.addEventListener("input", setGradient);

 /***********************************************************************
 *  Change Background
 **********************************************************************/