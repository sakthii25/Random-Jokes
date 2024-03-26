let btn = document.querySelector("button");
let cont = document.getElementById("cont");

btn.addEventListener("click",()=>{
    cont.innerHTML = "";
    let category = document.getElementById("cat").value;
    let url = (category === "random" ? "https://api.chucknorris.io/jokes/random" : "https://api.chucknorris.io/jokes/random?category="+category);
    console.log(url);
    fetch(url)
    .then((response) => {
        if(!response.ok) return new Error(response.status);
        return response.json();
    })
    .then((jokes) => {
        cont.innerHTML = jokes.value;
    })
    .catch((error) => {
        cont.innerHTML = "Try again later";
    })
})