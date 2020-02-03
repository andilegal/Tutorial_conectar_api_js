const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "img/logo.png";
const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

let ajax = new XMLHttpRequest();
const URL = "https://ghibliapi.herokuapp.com/films";

ajax.open("GET", URL, true);

ajax.onload = function() {
  let data = JSON.parse(this.response);

  if (ajax.status === 200) {
    data.forEach(movie => {
      //border movie
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // title movie
      const h1 = document.createElement("h1");
      //innerHTML or textContent
      h1.innerHTML = movie.title;
      //description movie
      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300);
      //innerHTML or textContent
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("h1");
    errorMessage.textContent = `Erro, Tente novamente mais tarde`;
    app.appendChild(errorMessage);
  }
};

// send request
ajax.send();
