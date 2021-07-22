var button = document.getElementById("publish");
var input = document.getElementById("userinput");
var boxy = document.getElementById("boxy");
var cloneDIV = document.getElementById("clone");

var clonee = cloneDIV.cloneNode(true);

function inputLength() {
    return input.value.length;
}

function createPost() {
    var newPost = document.createElement("p");//"" is the type of element that we will create
    newPost.appendChild(document.createTextNode(input.value));
    cloneDIV.appendChild(newPost);
    input.value = ""; //this is so the same item cannot be added again*/
}

function addAfterClick() {
    if(inputLength() > 0)
    {
        createPost();
    }
}

function addAfterEnter(event){
    if(inputLength() > 0 && event.which == 13)
    {
       createPost();
    }

}

button.addEventListener("click", addAfterClick)
input.addEventListener("keypress", addAfterEnter);