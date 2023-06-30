/* async function obtenerRecetas() {

try {
  const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=e9facfa6&app_key=97d767d3203b63e1691eebdb6cd1a547&diet=balanced&cuisineType=British&imageSize=REGULAR&random=true');
    const recetas = await response.json();
    return recetas.hits;
  
} catch (error) {
  console.log(error)
}   
}
  
  async function mostrarRecetasPorTipo(tipo) {
    const recetasObtenidas = await obtenerRecetas();
    const recetasFiltradas = recetasObtenidas.filter(
      receta => receta.recipe.mealType === tipo
    );
  
    const recetasContainer = document.getElementById('recetasContainer');
    recetasContainer.innerHTML = '';
  
    for (const receta of recetasFiltradas) {
      const recetaElement = document.createElement('div');
      recetaElement.innerHTML = `
        <h3>${receta.recipe.label}</h3>
        <p>Ingredientes: ${receta.recipe.ingredientLines.join(', ')}</p>
        <p>Instrucciones: <a href="${receta.recipe.url}" target="_blank">Ver instrucciones</a></p>
        <hr>
      `;
      recetasContainer.appendChild(recetaElement);
    }
  }
  
  const tiposReceta = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  
  // botones???
  const botonesContainer = document.createElement('div');
  botonesContainer.id = 'botonesContainer';
  document.body.appendChild(botonesContainer);
  
  for (const tipo of tiposReceta) {
    const boton = document.createElement('button');
    const span = document.createElement('span')
    span.textContent = tipo;
    boton.appendChild(span)
    boton.classList.add('boton-receta');
    boton.addEventListener('click', () => mostrarRecetasPorTipo(tipo));
    botonesContainer.appendChild(boton);
  }
  
  //el contenedor
  const recetasContainer = document.createElement('div');
  recetasContainer.id = 'recetasContainer';
  recetasContainer.classList.add('recetas-container');
  document.body.appendChild(recetasContainer);
   */


  async function obtenerRecetas(mealType) {
    try {
      const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=e9facfa6&app_key=97d767d3203b63e1691eebdb6cd1a547&diet=balanced&cuisineType=British&imageSize=REGULAR&random=true&mealType='+mealType);
      const recetas = await response.json();
      const recetaAleatoria = recetas.hits[0];
      
      return recetaAleatoria;
    } catch (error) {
    }
  }

  function renderReceta(receta) {
    console.log(receta);
    const recetaElement = document.createElement('div');
    recetaElement.innerHTML = `
      <h3>${receta.recipe.label}</h3>
      <p>Ingredientes: ${receta.recipe.ingredientLines.join(', ')}</p>
      <p>Instrucciones: <a href="${receta.recipe.url}" target="_blank">Ver instrucciones</a></p>
      <hr>
      <img src="${receta.recipe.image}"></img>

    `;
    let recetasContainer = document.getElementById('recetasContainer');
    recetasContainer.innerHTML = '';
    recetasContainer.appendChild(recetaElement);
  }



    
    
//     async function render() {
      
//       let recetas = await obtenerRecetas()
      
      
//      // recetas.hits.recipe.forEach(element => {
        
//      recetas.forEach(element => {
//        //console.log(element.recipe)
      
//      });   


// };







// async function recetasRender() {
//   let recetas = await obtenerRecetas()
//   recetas.forEach(element => {
//     //console.log(element.recipe)
//     return recetas
//   });
// }




//contenedor de los botones
const botonesContainer = document.createElement('div');
botonesContainer.id = 'botonesContainer';
document.querySelector('body').appendChild(botonesContainer);

function botonesTiposRecetas() {
  const tiposReceta = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];

  for (const tipo of tiposReceta) {
    const boton = document.createElement('button');
    const span = document.createElement('span')
    span.textContent = tipo;
    boton.appendChild(span)
    boton.classList.add('boton-receta');
    boton.addEventListener('click', () => mostrarRecetasPorTipo(tipo, recetas));
    botonesContainer.appendChild(boton);
  }
}

// function mostrarRecetasPorTipo(tipo, recetas) {
//   obtenerRecetaPorTipo(tipo, recetas);
// }



 function mostrarRecetaAleatoria(mealType) {
  const recetasFiltradas = recetas.filter(receta => receta.mealType === mealType);
  const recetaAleatoria = recetasFiltradas[Math.floor(Math.random() * recetasFiltradas.length)];

 
  //console.log(recetaAleatoria);
}








async function pintarRecetas() {
  let recetas = await recetasRender()
  recetas.forEach(element => {
    //console.log(element.recipe)
    return recetas
  })
}

function mostrarRecetasPorTipo(tipo) {
  
  var receta = obtenerRecetaPorTipo(tipo);

 
  var contenedorReceta = document.getElementById('recetasContainer');
  contenedorReceta.innerHTML = receta;
}
function mostrarRecetasPorTipo(tipo) {
 
  switch (tipo) {
    case 'Breakfast':
      obtenerRecetaPorTipo('Breakfast');
      break;
      case 'Lunch':
        obtenerRecetaPorTipo('Lunch');
        break;
        case 'Dinner':
          obtenerRecetaPorTipo('Dinner');
          break;
          case 'Snack':
            obtenerRecetaPorTipo('Snack');
            break;
            case 'Teatime':
      obtenerRecetaPorTipo('Teatime');
      break;
      default:
        //console.log('Receta no encontrada');
      }
}

    function obtenerRecetaPorTipo(tipo, recetas) {
      const recetasFiltradas = recetas.filter(receta => receta.mealType === tipo);
      if (recetasFiltradas.length > 0) {
        const recetaAleatoria = recetasFiltradas[Math.floor(Math.random() * recetasFiltradas.length)];
        const recetaHTML = `
          <div class="receta">
            <h2>${recetaAleatoria.recipe.label}</h2>
            <img src="${recetaAleatoria.recipe.image}" alt="${recetaAleatoria.recipe.label}">
            <p>${recetaAleatoria.recipe.source}</p>
          </div>
        `;
        const contenedorRecetas = document.getElementById('recetasContainer');
        contenedorRecetas.innerHTML = recetaHTML;
      } else {
        //console.log('Receta no encontrada');
      }
    }
    
    
  async function llamadaFunciones(mealType){
    const receta = await obtenerRecetas(mealType);
   
    renderReceta(receta);

    botonesTiposRecetas();
  }

  llamadaFunciones("dinner");


  
