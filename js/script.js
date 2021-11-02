/*ARRAY VACIO*/
const members = [];

/*AÑADIR MEMBERS A TRAVÉS DEL INPUT*/
function add() {
  let input = document.getElementById("text");
  members.push({ name: input.value, itsAlive: true });
}

/*IMPRIMIR EN HTML LOS MEMBERS */
function print() {
  let localizacion = document.getElementById("members");
  let empty = "";
  members.forEach((object) => {
    empty += `
    <section class="button1">
    <img id="${object.name}"
    class="iconsButtonKill"
    src="/css/img/icons/kill.png"
    ;
    alt="Hand with  knife image"
  />
  <p class="memberTitle">${object.name}</p>
  <img id="${members.indexOf(object)}"
  onclick="deleteMember(this)"
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
  let aliveList = [];
  for (const object of members) {
    if (object.itsAlive === true) {
      aliveList.push(object);
    }
  }
  const index = Math.floor(Math.random() * aliveList.length);
  const coder1 = aliveList[index];
  coder1.itsAlive = false;
  const knifeImage = document.getElementById(coder1.name);
  knifeImage.style.opacity = "1";
  if (aliveList.length == 2) {
    if (aliveList[0].itsAlive == true) {
      alert(`the winner is ${aliveList[0].name}`);
    } else alert(`the winner is ${aliveList[0].name}`);
  }
}

/*FUNCIÓN RECARGAR*/

function reloadPage() {
  location.reload();
}

function deleteMember(memberDelete) {
  members.splice(memberDelete.id, 1);
  print();
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
