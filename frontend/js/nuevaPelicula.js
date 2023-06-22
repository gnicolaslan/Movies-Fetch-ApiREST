window.onload = async () => {
  const urlBase = "http://localhost:3031/api/movies/";

  document.querySelector(".formulario").addEventListener("submit", async (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let rating = document.getElementById('rating').value;
    let length = document.getElementById('length').value;
    let awards = document.getElementById('awards').value;
    let release_date = document.getElementById('release_date').value;

    try {
      let response = await fetch(urlBase + 'create/', {
        method: 'POST',
        body: JSON.stringify({
          title,
          rating,
          length,
          awards,
          release_date
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      let result = await response.json();
      console.log(result);
      window.location.href = "home.html";
    } catch (error) {
      console.error(error);
    }
  });
  const homeButton = document.getElementById("botonHome");
  const a = document.createElement("a");
  a.setAttribute("href", "home.html");
  a.setAttribute("class", "botonAgregar");
  a.textContent = 'Home'
  homeButton.appendChild(a)

};