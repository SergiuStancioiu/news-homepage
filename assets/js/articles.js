async function getData() {
  const url = 'public/data.json';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const newsData = result.news;
    const articlesData = result.articles;

    for (const news of newsData) {
      newsCard(news);
    }

    for (const article of articlesData) {
      articleCard(article);
      console.log('article', article);
    }
  } catch (error) {
    console.error(error.message);
  }
}

getData();

function newsCard(news) {
  const sidebarContainer = document.querySelector('.sidebar-container');
  const sidebarTemplate = document.querySelector('.sidebar-template');

  const clone = sidebarTemplate.content.cloneNode(true);

  clone.querySelector('.news-title').innerText = news.title;
  clone.querySelector('.news-text').innerText = news.text;

  sidebarContainer.appendChild(clone);
}

function articleCard(article) {
  const articlesListContainer = document.querySelector(
    '.articles-list-container',
  );
  const articleTemplate = document.querySelector('.article-template');

  const clone = articleTemplate.content.cloneNode(true);

  clone.querySelector('.article-title').innerText = article.title;
  clone.querySelector('.article-text').innerText = article.text;
  clone.querySelector('.article-image').src =
    `assets/images/${article.image}.jpg`;

  articlesListContainer.appendChild(clone);
}
