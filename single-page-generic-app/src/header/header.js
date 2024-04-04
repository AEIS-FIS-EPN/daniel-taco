import "../header/header.css"
import React from 'react';
import ActionButton from '../components/action-button';
import { Link } from 'react-router-dom';

const instagram = process.env.PUBLIC_URL + "/images/instagram.png";
const youtube = process.env.PUBLIC_URL + "/images/youtube.png";

const Header = () => {
  // Supongamos que tienes un array de datos con la información de los botones
  const buttonsData = [
    { id: 1, buttonName: 'Inicio', redirectPath: '/' },
    { id: 2, buttonName: 'Perfil', redirectPath: '/profile' },
    { id: 3, buttonName: 'Configuración', redirectPath: '/settings' },
  ];

  return (
    <header className="header">

      <div>
        <img className="App-logo" alt="logo" />
      </div>

      <div>
        <nav>
          <div className="buttons-container">
            {buttonsData.map(button => (
              <Link key={button.id} to={button.redirectPath}>
                <ActionButton buttonName={button.buttonName} />
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="container-header-images">
        <img src={instagram} className="header-images" alt="Instagram" />
        <img src={youtube} className="header-images-logo" alt="Youtube" />

      </div>

    </header>
  );
};

export default Header;
