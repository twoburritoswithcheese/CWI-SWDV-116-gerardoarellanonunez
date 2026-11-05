// properties 
let vehicleType = document.querySelector("#type");
let pickupDate = document.querySelector("#pickup");
let returnDate = document.querySelector("#return");

let searchButton = document.querySelector("#search-button").addEventListener("click", validateSearch);

// handle form validation
function validateSearch (event) {

    // validate entries
    let errorMsgs = validateValues(vehicleType.value, pickupDate.value, returnDate.value)

    // check for any errors
    if (errorMsgs.length > 0) {
        // get the ul ready
        let ul = document.querySelector("#ulErrMsg");
        ul.innerHTML = "";
        
        // display each error
        for (let i = 0; i < errorMsgs.length; i++) {
            let li = document.createElement('li');
            li.innerText = errorMsgs[i];
            ul.appendChild(li);
        }
        // prevent submission of form
        event.preventDefault();
    } 
} 


// check for any missing fields
function validateValues(vehicleType, pickupDate, returnDate) {
    let errMsg = [];
    let currentDate = new Date();

    if (vehicleType === "") {
        errMsg.push("* Missing vehicle type.");
    }

    if (pickupDate === "") {
        errMsg.push("* Missing pickup date.");
    }

    if (returnDate === "") {
        errMsg.push("* Missing return date.");
    }

    if (new Date(pickupDate) < currentDate) {
        errMsg.push("* Pickup date must be in the future.");
    }

    if (new Date(returnDate) < new Date(pickupDate)) {
        errMsg.push("* Return date must be after pickup date.");
    }

    return errMsg;
}