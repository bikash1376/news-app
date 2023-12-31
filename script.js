function generateImages() {
  generateNews();
}

function generateNews() {
  const apiKey = "";

  fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((response) => {
      displayNews(response.articles);
    })
    .catch((err) => console.error(err));
}

function displayNews(articles) {
  const newsContainer = document.getElementById("newsContainer");

  newsContainer.innerHTML = "";

  articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    articleDiv.innerHTML = `
    
      <div class= "container">
      
        ${
          article.urlToImage
            ? `<img src="${article.urlToImage}" alt="${article.title}" class="title-image">`
            : ""
        }
        <div class= "news-desc">
        <h2 class="title-text">${article.title}</h2>
        <div class= "description">
        <p class= "description">${article.description}</p>
        <a href="${article.url}" target="_blank" class="readmore">Read more</a>
        </div>
        </div>
        </div>
      `;
    newsContainer.appendChild(articleDiv);
  });
}
window.onload(generateNews());
