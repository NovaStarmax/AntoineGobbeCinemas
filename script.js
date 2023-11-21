// fetch(
//   "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22"
// )
const reponse = await fetch(
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22"
);
const data = await reponse.json();

const totalCount = data.total_count;
const totalCountElement = document.createElement("h2");
totalCountElement.innerText = totalCount;
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(totalCountElement);

for (let i = 0; i < data.results.length; i++) {
  const ficheEvenement = document.createElement("article");
  sectionFiches.appendChild(ficheEvenement);

  const titreEvenement = document.createElement("h2");
  titreEvenement.innerText = `Voici le titre du concert : ${data.results[i].title_fr}`;
  ficheEvenement.appendChild(titreEvenement);

  const imageEvenement = document.createElement("img");
  imageEvenement.src = ` ${data.results[i].originalimage}`;
  ficheEvenement.appendChild(imageEvenement);

  const descriptionCourte = document.createElement("p");
  descriptionCourte.innerText = `Voici une courte description : ${data.results[i].description_fr}`;
  ficheEvenement.appendChild(descriptionCourte);

  const dateHeure = document.createElement("p");
  dateHeure.innerText = `Voici la date et l'heure : ${data.results[i].daterange_fr}`;
  ficheEvenement.appendChild(dateHeure);

  for (let j = 0; j < data.results[i].keywords_fr.length; j++) {
    const motsCles = document.createElement("p");
    motsCles.innerText = `mot clef : ${data.results[i].keywords_fr[j]}`;
    ficheEvenement.appendChild(motsCles);
  }

  const adresse = document.createElement("p");
  adresse.innerText = `L'adresse ce trouve au :  ${data.results[i].location_address} ${data.results[i].location_postalcode}`;
  ficheEvenement.appendChild(adresse);

  const region = document.createElement("p");
  region.innerText = `Voici la région :  ${data.results[i].location_region}`;
  ficheEvenement.appendChild(region);
}

// (upDatedat) => data.results[i].updatedat;
// console.log(upDatedat);
// const btnTrie = document.querySelector("#trie");
// btnTrie.addEventListener("click", () => {
//   const fichesEvenementArray = Array.from(fichesEvenement);
//   btnTrie.sort((a, b) => a.prix - b.prix);
//   console.log(fichesEvenement);
//   afficher(fichesEvenement);
// });

const btnTrie = document.querySelector("#trie");
btnTrie.addEventListener("click", () => {
  alert(
    "Ce bouton marche, cependant, un génie de votre niveau ne mérite pas de voir un résultat aussi médiocre"
  );
});
