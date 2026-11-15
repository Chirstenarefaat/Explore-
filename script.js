// =================================
// DESTINATIONS DATA
// =================================

const destinations = [

    {
        country: "FRANCE",
        city: "Paris",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",

        description:
            "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",

        image: "image/Paris.jpg"
    },

    {
        country: "JAPAN",
        city: "Tokyo",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",

        description:
            "Tokyo is a vibrant city that combines modern technology, traditional culture and amazing experiences.",

        image: "image/Tokyo.jpg"
    },

    {
        country: "ITALY",
        city: "Rome",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",

        description:
            "Rome is a historic city filled with ancient architecture, beautiful streets and delicious Italian food.",

        image: "image/Rome.jpg"
    },

    {
        country: "EGYPT",
        city: "Cairo",
        continent: "Africa",
        food: "Koshari, Falafel",
        place: "Pyramids",
        language: "Arabic",

        description:
            "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",

        image: "image/Cairo.jpg"
    }

];


// =================================
// CURRENT DESTINATION
// =================================

let currentIndex = 0;


// =================================
// HTML ELEMENTS
// =================================

const cityName = document.getElementById("city-name");

const country = document.getElementById("country");

const continent = document.getElementById("continent");

const food = document.getElementById("food");

const place = document.getElementById("place");

const language = document.getElementById("language");

const description =
    document.getElementById("city-description");

const cityImage = document.getElementById("city-image");

const destinationCount =
    document.getElementById("destination-count");

const imageNumber =
    document.getElementById("image-number");

const dots = document.querySelectorAll(".dot");


// =================================
// SHOW DESTINATION FUNCTION
// =================================

function showDestination(index) {

    const destination = destinations[index];

    // Update city information

    country.textContent = destination.country;

    cityName.textContent = destination.city;

    continent.textContent = destination.continent;

    food.textContent = destination.food;

    place.textContent = destination.place;

    language.textContent = destination.language;

    description.textContent = destination.description;


    // Update image

    cityImage.src = destination.image;

    cityImage.alt = destination.city;


    // Update destination number

    const number = String(index + 1).padStart(2, "0");

    destinationCount.textContent =
        number + " / 04";

    imageNumber.textContent = number;


    // Update active dot

    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


// =================================
// NEXT BUTTON
// =================================

document.getElementById("next-btn")
    .addEventListener("click", function() {

        currentIndex++;

        if (currentIndex >= destinations.length) {

            currentIndex = 0;

        }

        showDestination(currentIndex);

    });


// =================================
// PREVIOUS BUTTON
// =================================

document.getElementById("prev-btn")
    .addEventListener("click", function() {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = destinations.length - 1;

        }

        showDestination(currentIndex);

    });


// =================================
// DOTS NAVIGATION
// =================================

dots.forEach((dot) => {

    dot.addEventListener("click", function() {

        currentIndex = Number(this.dataset.index);

        showDestination(currentIndex);

    });

});


// =================================
// EXPLORE MORE BUTTON
// =================================

document.getElementById("more-btn")
    .addEventListener("click", function() {

        const destination = destinations[currentIndex];

        alert(
            "Discover " + destination.city +
            " in " + destination.country + "!\n" +
            "Famous Place: " + destination.place
        );

    });


// =================================
// SHOW FIRST DESTINATION
// =================================

showDestination(currentIndex);