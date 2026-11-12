// global array
const cars =[
    {type: "SUV",
     name: "Honda CV",
     description: "Benchmark compact SUV with excellent efficiency and comfort.",
     year: "2026"
     },
    {type: "SUV",
     name: "Toyota RAV4",
     description: "All-hybrid option with strong fuel economy and cargo space.",
     year: "2026"
     },
    {type: "Sedan",
     name: "Toyota Camry",
     description: "Top‑ranked midsize sedan with up to 51 mpg",
     year: "2025"
     },
    {type: "Sedan",
     name: "Honda Accord",
     description: "Smooth, efficient, and tech‑forward.",
     year: "2025"
     },
    {type: "Luxury",
     name: "Mercedes-Maybach S-Class",
     description: "6.0L V12 engine producing 621 hp, featuring massaging heated, and ventilated seats.",
     year: "2026"
     },
    {type: "Luxury",
     name: "BMW 7 Series",
     description: "Offers ergonomic seats with massage functions, advanced infotainment, and high-performance engine options.",
     year: "2026"
     },
    {type: "Pickup",
     name: "Ford Maverick",
     description: "A highly efficient, city-friendly compact truck, good interior space, and a practical bed for everyday use.",
     year: "2025"
     },
    {type: "Pickup",
     name: "Chevrolet Colorado",
     description: " It is a versatile choice for both work and recreational use.",
     year: "2025"
     },
    {type: "Electric",
     name: "Tesla Model 3",
     description: "Solid mix of performance and efficiency.",
     year: "2025"
     },
    {type: "Electric",
     name: "Chevy Equinox EV",
     description: "Smooth ride and quiet cabin on the highway.",
     year: "2025"
     }
];

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", validateSearch);

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

// display list of cars
function displayCars(carArray, hasType) {
    const carList = document.getElementById("car-list");

    // empty content inside element
    carList.innerHTML = "";

    if(carArray.length === 0) {
        carList.innerHTML = "<p>No cars found for this category.</p>"
        return;
    }

    // filter car image
    let im = "";
    if (hasType) {
        const carType = carArray[0];
        const carPicture = carType.type.toLowerCase();

        switch(carPicture) {
            case "suv":
                im = 'src="car_4.jpg"';
                break;
            case "sedan":
                im = 'src="car_1.jpg"';
                break;
            case "luxury":
                im = 'src="car_7.jpg"';
                break;
            case "pickup":
                im = 'src="car_4.jpg"';
                break;
            case "electric":
                im = 'src="car_3.jpg"';
                break;
            default:
                im = 'src="car_1.jpg"';
        }   
    } else {
        im = 'src="car_1.jpg"'
    }

    carArray.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("cars-card");
        carCard.innerHTML = `
            <img ${im}" >
            <h3>${car.name}</h3>
            <p><strong>Type:</strong> ${car.type}</p>
            <p><strong>Year:</strong> ${car.year}</p>
            <p>${car.description}</p>
        `;
        carList.appendChild(carCard);
    });

}


// filter cars
function listCars() {
    const params = new URLSearchParams(window.location.search);
    // used for picture default
    let hasType = false;

    if (params.has('type')) {
        const type = params.get('type');
        hasType = true;
        // filter the cars array by type and call displayCars with the new array
        const filteredCars = cars.filter(car => 
            car.type.toLowerCase() === type.toLowerCase());
        
        displayCars(filteredCars, hasType);
    }
    else {
        // call displayCars with the unfiltered cars array
        displayCars(cars);
    }
}

