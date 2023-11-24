import React, { useState } from 'react';
import './styles/ChatMobile.css';

const Chat = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleChatButtonToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleQuestionClick = (id) => {
    const selected = data.find((item) => item.id === id);
    setSelectedQuestion(selected);
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
    setIsOpen(false);
  };

  return (
    <div className={`chat-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="chat-modal">
          <div className="header">
            <h1>Chat Bot</h1>
            <button className="close-button" onClick={handleCloseModal}>
              Fechar
            </button>
          </div>
          <div className="questions">
            <h2>Perguntas:</h2>
            <ul>
              {data.map((item) => (
                <li key={item.id} onClick={() => handleQuestionClick(item.id)}>
                  {item.title}
                  {selectedQuestion && selectedQuestion.id === item.id && (
                    <div className="answer">
                      <p>{selectedQuestion.content}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
