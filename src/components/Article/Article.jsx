// Importuje CSS soubor obsahující styly pro článek
import './Article.css';

// Vytvoří funkci Article vracející HTML bloku článku
function Article() {
  return (
    <div className="article">
      <h1 className="article__text">Headline</h1>
      <p className="article__paragraph">Some text</p>
      <p className="article__paragraph">Some text</p>
      <p className="article__paragraph">Some text</p>
      <p className="article__paragraph">Some text</p>
      <p className="article__paragraph">Some text</p>
    </div>
  );
}

// Přidává defaultní export komponenty Article pro použití v dalších souborech
export default Article;
