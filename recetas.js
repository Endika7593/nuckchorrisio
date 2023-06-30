

  async function obtenerRecetas(mealType) {
    try {
      const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=e9facfa6&app_key=97d767d3203b63e1691eebdb6cd1a547&diet=balanced&cuisineType=British&imageSize=REGULAR&random=true&mealType='+mealType);
      const recetas = await response.json();
      const recetaAleatoria = recetas.hits[0];
      
      return recetaAleatoria;
    } catch (error) {
      console.log(error);
    }
  }

  function renderReceta(receta) {
    console.log(receta);
    const recetaElement = document.createElement('div');
    recetaElement.classList.add('receta-card')
    recetaElement.innerHTML = `
      <h3>${receta.recipe.label}</h3>
      <img src="${receta.recipe.image}"></img>
      <p>Ingredientes: ${receta.recipe.ingredientLines.join(', ')}</p>
      <p><a href="${receta.recipe.url}" target="_blank">Ver instrucciones</a></p>
      <hr>
      <p>Calorias: ${receta.recipe.calories}</p>
      <p>mealType: ${receta.recipe.mealType}</p>


    `;
    let recetasContainer = document.getElementById('recetasContainer');
    recetasContainer.innerHTML = '';
    recetasContainer.appendChild(recetaElement);
  }

  function sacarBotones(){

    
    let buttonBreakfast = document.getElementById("botonBreakfast");
  buttonBreakfast.textContent = 'Breakfast';
  botonBreakfast.addEventListener("click", () => {
    llamadaFunciones(mealType = "Breakfast")
    
  })
  
  let buttonLunch = document.getElementById("botonLunch");
  botonLunch.textContent = 'Lunch';
  botonLunch.addEventListener("click", () => {
    llamadaFunciones(mealType = "Lunch")   
  })

  let buttonDinner = document.getElementById("botonDinner");
  botonDinner.textContent = 'Dinner';
  botonDinner.addEventListener("click", () => {
    llamadaFunciones(mealType = "Dinner")   
  })
  
  let buttonSnack = document.getElementById("botonSnack");
  botonSnack.textContent = 'Snack';
  botonSnack.addEventListener("click", () => {
    llamadaFunciones(mealType = "Snack")   
  })
  
  let buttonTeatime = document.getElementById("botonTeatime");
  botonTeatime.textContent = 'Teatime';
  botonTeatime.addEventListener("click", () => {
    llamadaFunciones(mealType = "Teatime")   
  })
  
}

sacarBotones();
  
  
  const botonesContainer = document.createElement('div');
botonesContainer.id = 'botonesContainer';
document.querySelector('body').appendChild(botonesContainer);


 function mostrarRecetaAleatoria(mealType) {
  const recetasFiltradas = recetas.filter(receta => receta.mealType === mealType);
  const recetaAleatoria = recetasFiltradas[Math.floor(Math.random() * recetasFiltradas.length)];
 //console.log(recetaAleatoria);
}


  async function llamadaFunciones(mealType){
    const receta = await obtenerRecetas(mealType);
   
    renderReceta(receta);

     }

  llamadaFunciones("dinner");


  
