/*ARRAY VACIO*/
const members = [];

/*AÑADIR MEMBERS A TRAVÉS DEL INPUT*/
function add() {
  let input = document.getElementById("text");
  members.push(input.value);
  console.log(input.value);
}

/*IMPRIMIR EN HTML LOS MEMBERS */
function print() {
  let localizacion = document.getElementById("members");
  let empty = "";
  members.forEach((object) => {
    empty += `
    <section class="button1">
    <img id="${object}"
    class="iconsButtonKill"
    src="/css/img/icons/kill.png"
    ;
    alt="Hand with  knife image"
  />
  <p class="memberTitle">${object}</p>
  <img
    class="iconsButtonTrash"
    src="/css/img/icons/trash.svg"
    ;
    alt="Trash can image"
  />
</section>`;
  });
  localizacion.innerHTML = empty;
}

function cleanInput() {
  let input = document.getElementById("text");
  input.value = "";
}

/*SELECCIONE MEMBERS ALEATORIAMENTE*/
function randomMembers() {
  const index = Math.floor(Math.random() * members.length);
  const coder1 = members[index];
  const knifeImage = document.getElementById(coder1);
  console.log(index);
  knifeImage.style.opacity = "1";
}

/*FUNCIÓN RECARGAR*/

function reloadPage() {
  location.reload();
}

/*<section class="button1">
  <img
    class="iconsButton"
    src="/css/img/icons/kill.png"
    ;
    alt="Hand with  knife image"
  />
  <p class="memberTitle">${object}</p>
  <img
    class="iconsButton"
    src="/css/img/icons/trash.svg"
    ;
    alt="Trash can image"
  />
</section>*/
