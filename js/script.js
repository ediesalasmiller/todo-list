function newItem(){

    //1. adding a new item to list of items
    //let li = document.createElement
    let li = $('<li></li>');
    //let inputValue= document.getElementById("input").value;
    let inputValie = $('#input').val();
    // let text = document.createTextNode(inputValue);
    // li.appendChild(text);
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must add an item to your list");
    } else{
        //let list = document.querySelector(#list);
        //list.appendChild(li)
        $('#list').append(li);
    }

    // 2. crossing out an item from the list of items
        // function crossOut() {
        //     li.classList.toggle("strike");
        // }

        // li.addEventListener("dblclick",crossOut);
    li.on("dblclick", function() {
        li.addClass("strike");
    });

    //3(i). Adding the delete button "X": 
//    let crossOutButton = document.createElement("crossOutButton");
    let crossOutButton = $(<crossOutButton></crossOutButton>);
//    crossOutButton.appendChild(document.createTextNode("X"));
    crossOutButton.append(document.createTextNode("X"));
//    li.appendChild(crossOutButton);
    li.append(crossOutButton);
//    crossOutButton.addEventListener("click", deleteListItem);
    crossOutButton.on("click", deleteListItem);

//     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//     function deleteListItem(){
//         li.classList.add("delete")
//     }
    crossOutButton.on("click", function() {
        crossOutButton.addClass("delete");
    });
// // 4. Reordering the items: 
    $('#list').sortable();

}