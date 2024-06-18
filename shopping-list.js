const myUnorderedList = document.createElement("ul")
const myInput = document.createElement("input")
const myButton = document.createElement("button")

// const btn = document.querySelector("#btn");

myButton.addEventListener("click", () => {
    const myItem = myInput.value;
    myInput.value = '';

    const myList = document.createElement("li");
    const mySpan = document.createElement("span");
    const myListButton = document.createElement("button");



    myList.appendChild(mySpan);
    mySpan.textContent = myItem;
    myList.appendChild(myListButton);
    myListButton.textContent = "Delete";
    list.appendChild(myList);

    //   myList.appendChild(myListButton);
    //   mySpan.textContent = myItem;
    //   myButton.textContent = "Delete";
    //   myUnorderedList.appendChild(myList);

    myListButton.addEventListener("click", () => {
        list.removeChild(myList);
    });
    input.focus();
});



