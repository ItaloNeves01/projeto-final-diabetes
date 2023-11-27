import { useEffect, useState } from "react";
import Template from "../Template/Template.jsx";
import newsData from '../Data/News.json'
import './styles/HomeMobile.css'
import MapComponent from "../map/MapComponent.jsx";
import TemplateDetails from "../TemplateDetails/TemplateDetails.jsx";
import Chat from '../Chat/Chat.jsx'
import "./styles/HomeWeb.css"

const Home = () => {

  const [selectedNews, setSelectedNews] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleTemplateClick = (id) => {
    const selectedNewsItem = newsData.find((news) => news.id === id);
    setSelectedNews(selectedNewsItem);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedNews && !event.target.closest('.news-datails-card'))
        setSelectedNews(null)
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [selectedNews, setSelectedNews])

  const handleChatButttonClick = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <div className="body">
      <div className="container">
        <div className="head">
          <p>Controle e Informações sobre a Diabetes</p>
        </div>
        <div className="conteudos">
          <div className="containerRow">
            <div className="news">
              <p className="dicas">Dicas</p>
              {newsData.map((news) => (
                <Template
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  content={news.content}
                  onClick={() => handleTemplateClick(news.id)}
                />
              ))}
            </div>

            {selectedNews && (
              <div className="news-details-overlay">
                <TemplateDetails
                  title={selectedNews.title}
                  content={selectedNews.content}
                  onClose={() => setSelectedNews(null)}
                />
              </div>
            )}

            <div className="container_hospital">
              <p className="hospitais_proximos">Hospitais Proximos</p>
              <div className="hospitais_Map">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>

        <div className="chat">
          <button onClick={handleChatButttonClick}>chat</button>
          {isChatOpen && <Chat data={newsData} />}
        </div>

        <div className="sites">
          <p className="sites_uteis">Sites Úteis</p>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
