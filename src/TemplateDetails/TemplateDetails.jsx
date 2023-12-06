import './styles/TemplateDetailsMobile.css'
import './styles/TemplateDetailsWeb.css'

const TemplateDetails = ({ title, content, onClose }) => {
    return (
      <div className="news-details" onClick={onClose}>
        <div className="news-details-card" onClick={onclose}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
};
  
export default TemplateDetails;
  