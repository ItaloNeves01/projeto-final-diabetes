
import img1 from '../Image/img1.png';
import img2 from '../Image/img2.png';
import img3 from '../Image/img3.png';
import img4 from '../Image/img4.png';
import img5 from '../Image/img5.png';
import img6 from '../Image/img6.png';
import img7 from '../Image/img7.png';
import img8 from '../Image/img8.png';
import img9 from '../Image/img9.png';
import img10 from '../Image/img10.png';
import { useEffect, useState } from 'react';
import './styles/TemplateMobile.css'
import './styles/TemplateWeb.css'

const Template = ({ id, title, content, onClick }) => {
  const [contentLength, setContentLength] = useState(0);

  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  useEffect(() => {
    setContentLength(content.length);
  }, [content]);


  let imageSource;

  switch (id) {
    case 1:
      imageSource = img1;
      break;
    case 2:
      imageSource = img2;
      break;
    case 3:
      imageSource = img3;
      break;
    case 4:
      imageSource = img4;
      break;
    case 5:
      imageSource = img5;
      break;
    case 6:
      imageSource = img6;
      break;
    case 7:
      imageSource = img7;
      break;
    case 8:
      imageSource = img8;
      break;
    case 9:
      imageSource = img9;
      break;
    case 10:
      imageSource = img10;
      break;
    default:
      // Adicione um valor padrão ou lógica de fallback, se necessário
      break;
  }

  const firstThreeWords = content.split(' ').slice(0, 3).join(' ');

  return (

    <div className="horizontal-scroll-container">
      <div className="news-card" onClick={handleClick}>

        <p className="titulo-card">{title}</p>
        <img src={imageSource} alt={title} />
      </div>

    </div>

  );
};

export default Template;
