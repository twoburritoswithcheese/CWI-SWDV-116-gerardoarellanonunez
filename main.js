
let searchButton = document.querySelector("#search-button").addEventListener("click", validateSearch);

// handle form validation
function validateSearch (event) {

    const vehicleType = document.querySelector("#type").value;
    const pickupDate = document.querySelector("#pickup").value;
    const returnDate = document.querySelector("#return").value;
    
    let pDate = new Date(pickupDate).setHours(0, 0, 0, 0);
    let rDate = new Date(returnDate).setHours(0, 0, 0, 0);
    let currentDate = new Date().setHours(0, 0, 0, 0,);
    
    // validate entries
    let errorMsgs = validateValues(vehicleType, pDate, rDate, currentDate);

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
function validateValues(vehicleType, pickupDate, returnDate, currentDate) {
    let errMsg = [];

    if (vehicleType === "") {
        errMsg.push("* Missing vehicle type.");
    }

    if (pickupDate === "") {
        errMsg.push("* Missing pickup date.");
    }

    if (returnDate === "") {
        errMsg.push("* Missing return date.");
    }

    if (pickupDate < currentDate) {
        errMsg.push("* Pickup date must be in the future.");
        
    }

    if (returnDate < pickupDate) {
        errMsg.push("* Return date must be after pickup date.");
        
    }    
    return errMsg;
}