/*ARRAY VACIO*/
const members = [];

/*AÑADIR MEMBERS A TRAVÉS DEL INPUT*/
function add() {
  let input = document.getElementById("text");
  members.push({ name: input.value, itsAlive: true });
  input.value = "";
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
    src="css/img/icons/kill.png"
    ;
    alt="Hand with  knife image"
  />
  <p class="memberTitle">${object.name}</p>
  <img id="${members.indexOf(object)}"
  onclick="deleteMember(this)"
    class="iconsButtonTrash"
    src="css/img/icons/trash.svg"
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
      knifeImage.parentElement.className = "dead";
    }
  });
  audioOnPlay()
}

/*SELECCIONE MEMBERS ALEATORIAMENTE*/
function filtersAlive() {
  return members.filter((object) => object.itsAlive);
}
function lastKilled(coder) {
  const coderDead = document.getElementById("killedMembers");
  coderDead.innerHTML = "";
  coderDead.innerHTML = `<section class="dead">
  <img id="${coder.name}"
  class="iconsButtonKill"
  src="css/img/icons/kill.png"
  ;
  alt="Hand with  knife image"
/>
<p class="memberTitle">${coder.name}</p>
<img id="${members.indexOf(coder)}"
onclick="deleteMember(this)"
  class="iconsButtonTrash"
  src="css/img/icons/trash.svg"
  ;
  alt="Trash can image"
/> 
</section>`;
}

function randomMembers() {
  let aliveList = filtersAlive();
  const index = Math.floor(Math.random() * aliveList.length);
  const coder1 = aliveList[index];
  coder1.itsAlive = false;
  lastKilled(coder1);
  print();
  checkingWinner();
}

function checkingWinner() {
  let aliveList = filtersAlive();
  if (aliveList.length === 1) {
    setTimeout(() => {
      alert(`the winner is ${aliveList[0].name}`);
    }, 500);
  }
}

/*FUNCIÓN RECARGAR*/

function reloadPage() {
  location.reload();
}
/*FUNCION DELETE MEMBER KILLED IN TRASH ICON*/
function deleteMember(memberDelete) {
  members.splice(memberDelete.id, 1);
  print();
}

//AUDIO ON PLAY BUTTON
function audioOnPlay() {
let button = document.querySelector(".footerButton")
button.addEventListener("click", () => {
      let audioTag = document.createElement("audio")
      audioTag.setAttribute("src", "audio/psicosis.mp3")
      audioTag.play(1)
})
}