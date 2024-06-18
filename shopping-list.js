const myUnorderedList = document.createElement("ul")
document.body.appendChild(myUnorderedList)
const myInput = document.querySelector("#item")
const myButton = document.querySelector("#btn")



myButton.addEventListener("click", () => {
    const myItem = myInput.value;
    myInput.value = '';

    const myList = document.createElement("li");
    const mySpan = document.createElement("span");
    const myListButton = document.createElement("button");
git 
    myList.appendChild(mySpan);
    myList.appendChild(myListButton);
    mySpan.textContent = myItem;
    myListButton.textContent = "Delete";
    myUnorderedList.appendChild(myList);

    myListButton.addEventListener("click", () => {
        myUnorderedList.removeChild(myList);
    });
    myInput.focus();
});



