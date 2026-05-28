import "./News.css";
import { newsTranslations } from "./newsTranslations.js";

function News({ lang = "cs" }) {
  return (
    <>
      <div className="newsSection">
        <h1 id="title-news">{newsTranslations.headings[lang]}</h1>

        <div className="newsContainer">
          {newsTranslations.newsData.map((news) => (
            <div className="news" key={news.id}>
              <div className="images-news">
                {news.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={news.title[lang]}
                    className="img"
                  />
                ))}
              </div>
              <div className="info-news">
                <h2 className="news-title">{news.title[lang]}</h2>
                <p className="news-content">{news.content[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
