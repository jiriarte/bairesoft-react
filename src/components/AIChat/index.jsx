import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader } from 'lucide-react';
import { sendMessageToClaude } from '../../services/claude';

const ChatContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatButton = styled(motion.button)`
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #1d4ed8;
  }
`;

const ChatWindow = styled(motion.div)`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  background: #2563eb;
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 12px;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  
  ${props => props.$isUser ? `
    background: #2563eb;
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  ` : `
    background: #f3f4f6;
    color: #1f2937;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  `}
`;

const InputContainer = styled.form`
  padding: 16px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 1px #2563eb;
  }
`;

const SendButton = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    background: #1d4ed8;
  }

  &:disabled {
    background: #93c5fd;
    cursor: not-allowed;
  }
`;

const initialMessages = [
  {
    text: "¡Hola! Soy el asistente virtual de Bairesoft. ¿En qué puedo ayudarte?",
    isUser: false
  }
];

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Agregar el mensaje del usuario al historial de la conversación
      const newHistory = [...conversationHistory, { role: "user", content: input }];
      setConversationHistory(newHistory);

      // Obtener respuesta de Claude
      const response = await sendMessageToClaude(input, conversationHistory);
      
      const botResponse = {
        text: response,
        isUser: false
      };
      
      // Agregar la respuesta al historial
      setConversationHistory(prev => [...prev, { role: "assistant", content: response }]);
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error al procesar el mensaje:', error);
      const errorMessage = {
        text: "Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, intenta nuevamente más tarde o contacta directamente con nuestro equipo.",
        isUser: false
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContainer>
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ChatHeader>
              <h3>Asistente Virtual</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </ChatHeader>
            <ChatMessages>
              {messages.map((message, index) => (
                <Message key={index} $isUser={message.isUser}>
                  {message.text}
                </Message>
              ))}
              <div ref={messagesEndRef} />
            </ChatMessages>
            <InputContainer onSubmit={handleSubmit}>
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                disabled={isLoading}
              />
              <SendButton type="submit" disabled={!input.trim() || isLoading}>
                {isLoading ? <Loader size={20} /> : <Send size={20} />}
              </SendButton>
            </InputContainer>
          </ChatWindow>
        )}
      </AnimatePresence>
      <ChatButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </ChatButton>
    </ChatContainer>
  );
};

export default AIChat;
