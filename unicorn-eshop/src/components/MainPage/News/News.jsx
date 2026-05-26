import "./News.css";

const NEWS_DATA = [
  {
    id: 1,
    title: "NOVÝ DROP MIND 001",
    content:
      "Nová generace kultovních tenisek s vylepšeným tlumením a maximálním pohodlím pro každodenní nošení.",
    images: ["./src/assets/NewsContent/nike-mind.png"],
  },
  {
    id: 2,
    title: "WORLD CUP JERSEYS",
    content:
      "Oficiální dresy pro nadcházející světový šampionát. Podpoř svůj tým v tom nejlepším materiálu na trhu.",
    images: ["./src/assets/NewsContent/jerseys-world-cup.png"],
  },
];

function News() {
  return (
    <>
      <div className="newsSection">
        <h1 id="nadpis">TOHLE NESMÍŠ MINOUT!</h1>

        <div className="newsContainer">
          {NEWS_DATA.map((news) => (
            <div className="news" key={news.id}>
              <div className="images">
                {news.images.map((img, i) => (
                  <img key={i} src={img} alt={news.title} className="img" />
                ))}
              </div>
              <div className="info">
                <h2 className="news-title">{news.title}</h2>
                <p className="news-content">{news.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
