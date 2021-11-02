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
  killMember();
}

function killMember() {
  members.forEach((coder) => {
    const knifeImage = document.getElementById(coder.name);
    if (!coder.itsAlive) {
      knifeImage.style.opacity = "1";
    }
  });
}

function cleanInput() {
  let input = document.getElementById("text");
  input.value = "";
}

/*SELECCIONE MEMBERS ALEATORIAMENTE*/
function filtersAlive() {
  return members.filter((object) => object.itsAlive);
}

function randomMembers() {
  let aliveList = filtersAlive();
  const index = Math.floor(Math.random() * aliveList.length);
  const coder1 = aliveList[index];
  coder1.itsAlive = false;
  print();
  checkingWinner();
}

function checkingWinner() {
  let aliveList = filtersAlive();
  if (aliveList.length === 1) {
    alert(`the winner is ${aliveList[0].name}`);
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
