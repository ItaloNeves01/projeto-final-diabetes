import './styles/TemplateDetailsMobile.css'

const TemplateDetails = ({ title, content, onClose }) => {
    return (
      <div className="news-details" onClick={onClose}>
        <div className="news-details-card" onClick={onclose}>
          <p>{title}</p>
          <p>{content}</p>
        </div>
      </div>
    );
};
  
export default TemplateDetails;
  