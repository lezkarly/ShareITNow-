var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");

function inputLength() {
    return input.value.length;
}

function createListElement () {
    var li = document.createElement("li");//"" is the type of element that we will create
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //this is so the same item cannot be added again
}

function addAfterClick() {
    if(inputLength() > 0)
    {
        createListElement();
    }
}

function addAfterEnter(event){
    if(inputLength() > 0 && event.which == 13)
    {
       createListElement();
    }

}

button.addEventListener("click", addAfterClick)
input.addEventListener("keypress", addAfterEnter);
