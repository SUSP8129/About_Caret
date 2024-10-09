//Monitor all click events on form with Event Listener
document.forms[0].addEventListener("click", function (e) {
    var inputFielsContainer = e.target.parentNode.querySelector(".inputFields");
    // If the clicked element contains addFieldBtn
    if (e.target.classList.contains("addFieldBtn")) {
        e.preventDefault();
        var field = document.createElement("tr");
        field.classList.add("inputField");
        field.innerHTML = `
        <th><input type="text" name="content[]" placeholder="Value"></th>
        <td><button class="deleteFieldBtn">Delete input field</button></td>
        `;
        var clone = field.cloneNode(true);
        inputFielsContainer.appendChild(clone);
    }

    // If the clicked element contains the deleteFieldBtn class
    else if (e.target.classList.contains("deleteFieldBtn")) {
        e.preventDefault();
        var deleteFieldBtns = document.querySelectorAll(".deleteFieldBtn");
        //Prevent deletion if there is only one element with the deleteFieldBt class on the DOM
        if(deleteFieldBtns.length == 1){
            alert("At least one input field is required.");
            return;
        }else{
            var field = e.target.parentNode.parentNode;
            field.remove();
        }
    }
});

//Prevent input elements from being added by pressing the enter key
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
    }
});

