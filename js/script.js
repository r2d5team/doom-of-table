const members = ["Lucas", "Biplop", "Sergio", "Ariann"];

/*for (const object of members) {
  console.log(object);
}*/

/*IMPRIMIR EN HTML LOS MEMBERS */

/*Q SELECCIONE ALEATORIAMENTE*/

/*RECORRER ARRAY ALEATORIAMENTE*/
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
          <p class="memberTitle">Member 1</p>
          <img
            class="iconsButton"
            src="/css/img/icons/trash.svg"
            ;
            alt="Trash can image"
          />
        </section>*/
