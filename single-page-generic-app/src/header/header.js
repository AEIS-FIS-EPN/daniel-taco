import React from 'react';
import ActionButton from '../components/action-button';
import { Link } from 'react-router-dom';

const Header = () => {
  // Supongamos que tienes un array de datos con la información de los botones
  const buttonsData = [
    { id: 1, buttonName: 'Inicio', redirectPath: '/' },
    { id: 2, buttonName: 'Perfil', redirectPath: '/profile' },
    { id: 3, buttonName: 'Configuración', redirectPath: '/settings' },
  ];

  return (
    <header>
      <img className="App-logo" alt="logo" />
      <nav>
        <ul>
          {buttonsData.map(button => (
            <li key={button.id}>
              <Link to={button.redirectPath}>
                <ActionButton buttonName={button.buttonName} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <img className="App-logo" alt="logo" />

      <img className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
