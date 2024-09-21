import './index.css';
import { useState, useEffect } from 'react';
import arrow from './assets/arrow-down.png';
import chat from './assets/chat.png';
import send from './assets/send.png';
import Texto from './components/mensaje';

function App() {
  const [mensajes, setMensajes] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const presentationButton = document.getElementById('pbutton');
    const chatBox = document.getElementById('chatbox');

    if (presentationButton && chatBox) {
      presentationButton.addEventListener('click', () => {
        chatBox.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  const enviarMensaje = () => {
    if (texto.trim()) {
      setMensajes([...mensajes, texto]);
      setTexto('');
    }
  };

  const limpiarMensajes = () => {
    setMensajes([]);
  };

  return (
    <main className="main-container">
      <div className="presentation">
        <h1>BIENVENIDO A CHAT-SPACE</h1>
        <div className="presentation-text">
          <img src={arrow} alt="" />
          <p>Comienza a chatear</p>
          <img src={arrow} alt="" />
        </div>
        <button id='pbutton'><img src={chat} alt="" /></button>
      </div>

      <div className="chat-container">
        <div className="chat-box" id='chatbox'>
          <div className="chat-box-top">
            <img src={chat} alt="" />
            <h1>Chat-Space</h1>
            <button id='limpiar' onClick={limpiarMensajes}>+</button>
          </div>
          {
            mensajes.map((mensaje, index) => (
              <Texto key={index} texto={mensaje} />
            ))
          }
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            placeholder='Escribe tu mensaje...' 
            id='texto' 
            value={texto} 
            onChange={(e) => setTexto(e.target.value)} 
          />
          <img 
            src={send} 
            id='enviar' 
            alt="" 
            onClick={enviarMensaje} 
          />
        </div>
      </div>
    </main>
  );
}

export default App;
