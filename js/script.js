const members = [
  { name: "Lucas", id: 0 },
  { name: "Biblop", id: 1 },
  { name: "Sergi", id: 2 },
  { name: "Ariann", id: 3 },
];

/*for (const object of members) {
  console.log(object);
}*/

/*IMPRIMIR EN HTML LOS MEMBERS */
function print() {
  for (const object of members) {
    let localizacion = document.getElementById("members");
    localizacion.innerHTML += `
    <section class="button1">
    <img id="${object.id}"
    class="iconsButtonKill"
    src="/css/img/icons/kill.png"
    ;
    alt="Hand with  knife image"
  />
  <p class="memberTitle">${object.name}</p>
  <img
    class="iconsButtonTrash"
    src="/css/img/icons/trash.svg"
    ;
    alt="Trash can image"
  />
</section>`;
  }
}

print();

/*SELECCIONE MEMBERS ALEATORIAMENTE*/
function randomMembers() {
  const index = Math.floor(Math.random() * members.length);
  let changeOpacity = document.getElementsByClassName("button1");
  console.log(changeOpacity);
}
randomMembers();

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
