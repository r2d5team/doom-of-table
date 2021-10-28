const members = ["Lucas", "Biplop", "Sergio", "Ariann"];

/*for (const object of members) {
  console.log(object);
}*/

/*IMPRIMIR EN HTML LOS MEMBERS */
function print() {
  for (const object of members) {
    let localizacion = document.getElementById("members");
    localizacion.innerHTML += `
    <section id="${object}" class="button1">
    <img id="knife${object}"
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
  }
}

print();

/*SELECCIONE MEMBERS ALEATORIAMENTE*/
function randomMembers() {
  const index = Math.floor(Math.random() * members.length);
  console.log(members[index]);
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
