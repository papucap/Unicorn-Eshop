import "./News.css";

const NEWS_DATA = [
  {
    id: 1,
    title: { cs: "NOVÝ DROP MIND 001", en: "NEW DROP MIND 001" },
    content: {
      cs: "Nová generace kultovních tenisek s vylepšeným tlumením a maximálním pohodlím pro každodenní nošení.",
      en: "A new generation of iconic sneakers with improved cushioning and maximum comfort for everyday wear.",
    },
    images: ["./src/assets/NewsContent/nike-mind.png"],
  },
  {
    id: 2,
    title: { cs: "WORLD CUP JERSEYS", en: "WORLD CUP JERSEYS" },
    content: {
      cs: "Oficiální dresy pro nadcházející světový šampionát. Podpoř svůj tým v tom nejlepším materiálu na trhu.",
      en: "Official jerseys for the upcoming world championship. Support your team in the best material on the market.",
    },
    images: ["./src/assets/NewsContent/jerseys-world-cup.png"],
  },
];

function News({ lang = "cs" }) {
  const headings = {
    cs: "TOHLE NESMÍŠ MINOUT!",
    en: "DON'T MISS THIS!",
  };

  return (
    <>
      <div className="newsSection">
        <h1 id="title-news">{headings[lang]}</h1>

        <div className="newsContainer">
          {NEWS_DATA.map((news) => (
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
