async function fetchDog() {
    const url = "https://dog.ceo/api/breeds/image/random";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const dogImage = document.getElementById("dogImage");
        dogImage.src = data.message;
        dogImage.hidden = false;
    }
    catch (error){
        console.error(error);
    }
}