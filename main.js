


async function obtenerBromas() {
  const resultados = await fetch("https://api.chucknorris.io/jokes/random")
  console.log(resultados)
}

const broma = {
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "lsgbshl3ragvgicq7u9wsw",
    url: "https://api.chucknorris.io/jokes/lsgbshl3ragvgicq7u9wsw",
    value: "In honor of Chuck Norris, all McDonald's in Texas have an even larger size than the super-size. When ordering, just ask to be Chucksized."
  };
  
  // Acceder a los valores del chiste
  const iconUrl = broma.icon_url;
  const bromaId = broma.id;
  const bromaUrl = broma.url;
  const bromaValue = broma.value;
  
  // Utilizar los valores según sea necesario
  console.log(bromaValue);
  // Resultado: "In honor of Chuck Norris, all McDonald's in Texas have an even larger size than the super-size. When ordering, just ask to be Chucksized."
  

  function mostrarBroma(){
    const broma = {
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "lsgbshl3ragvgicq7u9wsw",
      url: "https://api.chucknorris.io/jokes/lsgbshl3ragvgicq7u9wsw",
      value: "In honor of Chuck Norris, all McDonald's in Texas have an even larger size than the super-size. When ordering, just ask to be Chucksized."
    };

  }

  // function gifConBroma(){
  //   const gifChuck = {
  //     url: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  //     console.log(gifChuck);
  //   }
  // }

  // gifConBroma()

// Obtener referencias a los elementos del DOM
const inputBroma = document.querySelector("input[type='text']");
const btnBroma = document.getElementById('boton');
const divBroma = document.getElementById('broma');

// Función para obtener una broma desde la API y mostrarla en el campo de texto
btnBroma.addEventListener('click', obtenerBroma);

function obtenerBroma() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      const bromaValue = data.value;
      divBroma.textContent = bromaValue;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

