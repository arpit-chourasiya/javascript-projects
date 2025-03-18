/** @format */

const API_KEY = "c0b825e65f1a450fb3abdb0dae99dba9";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
  window.location.reload();
}
async function fetchNews(query) {
  const response = await fetch(`${url}${query}&apiKey=${API_KEY}`);

  const data = await response.json();
  bindData(data.articles);
}

function bindData(articles) {
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);

    fillDataInCard(cardClone, article);

    cardsContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector(".news-title");
  const newsSource = cardClone.querySelector(".news-source");
  const newsDesc = cardClone.querySelector(".news-desc");

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;

  const date = new Date(article.pusblishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  newsSource.innerHTML = `${article.source.name} • ${date}`;

  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank_");
  });
}

let curSelecedNav = null;
function onNavItemClick(id) {
  searchText.value = "";
  fetchNews(id);
  const navItem = document.getElementById(id);
  curSelecedNav?.classList.remove("active");
  curSelecedNav = navItem;
  curSelecedNav.classList.add("active");
}

const searchButton = document.getElementById("search-btn");
const searchText = document.getElementById("input-search");

searchButton.addEventListener("click", () => {
  const query = searchText.value;
  if (!query) return;
  fetchNews(query);
  curSelecedNav?.classList.remove("active");
  curSelecedNav = null;
});
