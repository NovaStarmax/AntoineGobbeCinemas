// fetch(
//   "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22"
// )
const reponse = await fetch(
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22"
);
const data = await reponse.json();

// console.log("data", data);
// const total_count = data.total_count;
// total_count = document.createElement("h2")
// const
// console.log("nb resultat", data.total_count);
// const results = data.results;
// console.log("results", results);
const totalCount = data.total_count;
const totalCountElement = document.createElement("h2");
totalCountElement.innerText = totalCount;
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(totalCountElement);
console.log(totalCountElement);

for (let i = 0; i < data.results.length; i++) {
  console.log(data.results[i].title_fr);
  const ficheEvenement = document.createElement("article");
  sectionFiches.appendChild(ficheEvenement);

  const titreEvenement = document.createElement("h2");
  titreEvenement.innerText = data.results[i].title_fr;
  ficheEvenement.appendChild(titreEvenement);

  const imageEvenement = document.createElement("img");
  imageEvenement.src = "adresse URL source";
  const descriptionCourte = document.createElement("p");
  const dateHeure = document.createElement("p");
  const motsCles = document.createElement("h3");
  const adresse = document.createElement("p");
  const region = document.createElement("p");
}
