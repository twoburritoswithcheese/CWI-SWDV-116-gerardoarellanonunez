// global array
const cars =[
    {type: "suv",
     name: "Honda CV",
     description: "Benchmark compact SUV with excellent efficiency and comfort.",
     year: "2026"
     },
    {type: "suv",
     name: "Toyota RAV4",
     description: "All-hybrid option with strong fuel economy and cargo space.",
     year: "2026"
     },
    {type: "sedan",
     name: "Toyota Camry",
     description: "Top‑ranked midsize sedan with up to 51 mpg",
     year: "2025"
     },
    {type: "sedan",
     name: "Honda Accord",
     description: " Smooth, efficient, and tech‑forward.",
     year: "2025"
     },
    {type: "luxury",
     name: "Mercedes-Maybach S-Class",
     description: "6.0L V12 engine producing 621 hp, featuring massaging heated, and ventilated seats.",
     year: "2026"
     },
    {type: "luxury",
     name: "BMW 7 Series",
     description: "Offers ergonomic seats with massage functions, advanced infotainment, and high-performance engine options.",
     year: "2026"
     },
    {type: "pickup truck",
     name: "Ford Maverick",
     description: "A highly efficient, city-friendly compact truck, good interior space, and a practical bed for everyday use.",
     year: "2025"
     },
    {type: "pickup truck",
     name: "Chevrolet Colorado",
     description: " It is a versatile choice for both work and recreational use.",
     year: "2025"
     },
    {type: "electric",
     name: "Tesla Model 3",
     description: "Solid mix of performance and efficiency.",
     year: "2025"
     },
    {type: "electric",
     name: "Chevy Equinox EV",
     description: "Smooth ride and quiet cabin on the highway.",
     year: "2025"
     }
];

let searchButton = document.querySelector("#search-button").addEventListener("click", validateSearch);

// handle form validation
function validateSearch (event) {

    const vehicleType = document.querySelector("#type").value;
    const pickupDate = document.querySelector("#pickup").value;
    const returnDate = document.querySelector("#return").value;
    
    // remove hours and seconds
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

function displayCars(carsList) {
    let ulCar = document.querySelector("#ulSearchCars");
    ulCar.innerHTML = "";
    carsList.forEach(car => {
        let li = document.createElement('li');
        li.innerText = car.name +" "+ car.year;
        ulCar.appendChild(li);
    });
}

function listCars() {
    displayCars(cars);
    const params = new URLSearchParams(window.location.search);

    if (params.has('type')) {
    const type = params.get('type');
    // filter the cars array by type and call displayCars with the new array
    }
    else {
        // call displayCars with the unfiltered cars array
    }
}

