import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // Aqui você pode adicionar lógica adicional, como redirecionamento para diferentes rotas
  };

  return (
    <nav className="navbar">
      <ul>
        <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
          Home
        </li>
        <li className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>
          Mapa
        </li>
        <li className={activeItem === 'Services' ? 'active' : ''} onClick={() => handleItemClick('Services')}>
          Dicas e receitas
        </li>
        <li className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>
          Contato
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
