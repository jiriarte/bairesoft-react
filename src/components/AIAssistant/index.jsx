import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Loader, Bot, User } from 'lucide-react';
import { sendMessageToAnthropic } from '../../services/anthropic';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`;

const ChatButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.lg};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ChatWindow = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  height: 600px;
  background: white;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100vw;
    height: 100vh;
    bottom: 0;
    right: 0;
    border-radius: 0;
    position: fixed;
  }
`;

const ChatHeader = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BotAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const HeaderTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: 0.25rem;
`;

const HeaderStatus = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  opacity: 0.8;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: ${props => props.theme.radii.md};
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MessageWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  ${props => props.isUser && 'flex-direction: row-reverse;'}
`;

const MessageAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${props => props.isUser ? props.theme.colors.primary : props.theme.colors.backgroundLight};
  color: ${props => props.isUser ? 'white' : props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Message = styled.div`
  max-width: 70%;
  padding: 1rem;
  border-radius: ${props => props.theme.radii.lg};
  background: ${props => props.isUser ? props.theme.colors.primary : props.theme.colors.backgroundLight};
  color: ${props => props.isUser ? 'white' : props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.5;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    ${props => props.isUser ? 'right: -8px;' : 'left: -8px;'}
    top: 12px;
    border-style: solid;
    border-width: 8px;
    border-color: transparent;
    ${props => props.isUser 
      ? `border-left-color: ${props.theme.colors.primary};`
      : `border-right-color: ${props.theme.colors.backgroundLight};`}
  }
`;

const Timestamp = styled.div`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textLight};
  margin-top: 0.5rem;
  text-align: ${props => props.isUser ? 'right' : 'left'};
`;

const ChatInput = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.lg};
  resize: none;
  font-size: ${props => props.theme.fontSizes.md};
  font-family: inherit;
  min-height: 60px;
  max-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.radii.md};
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};
  padding: 0.5rem 0;

  svg {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const suggestedQuestions = [
  "¿Qué servicios ofrecen?",
  "¿Cómo puedo solicitar un presupuesto?",
  "¿Cuál es su proceso de trabajo?",
  "¿Tienen experiencia en mi sector?"
];

const SuggestedQuestions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const SuggestedQuestion = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.radii.full};
  border: 1px solid ${props => props.theme.colors.border};
  background: white;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual de Bairesoft. ¿En qué puedo ayudarte?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSubmit = async (message) => {
    if (!message.trim()) return;

    try {
      setIsTyping(true);
      setError(null);

      console.log('Sending message:', message);
      
      const response = await sendMessageToAnthropic(message, messages);
      
      console.log('Response received:', response);

      if (!response || !response.text) {
        throw new Error('Respuesta inválida del servidor');
      }

      setMessages(prev => [
        ...prev,
        { id: messages.length + 1, text: message, sender: 'user', timestamp: new Date() },
        { id: messages.length + 2, text: response.text, sender: 'bot', timestamp: response.timestamp }
      ]);

    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setError(error.message || 'Ha ocurrido un error al enviar el mensaje');
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(newMessage);
    }
  };

  const formatTimestamp = (date) => {
    return new Intl.DateTimeFormat('es', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <ChatContainer>
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ChatHeader>
              <BotAvatar>
                <Bot size={24} />
              </BotAvatar>
              <HeaderInfo>
                <HeaderTitle>Asistente Virtual</HeaderTitle>
                <HeaderStatus>
                  {isTyping ? 'Escribiendo...' : 'En línea'}
                </HeaderStatus>
              </HeaderInfo>
              <CloseButton onClick={() => setIsOpen(false)}>
                <X size={20} />
              </CloseButton>
            </ChatHeader>

            <ChatMessages>
              {messages.map((message) => (
                <MessageWrapper key={message.id} isUser={message.sender === 'user'}>
                  <MessageAvatar isUser={message.sender === 'user'}>
                    {message.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
                  </MessageAvatar>
                  <div>
                    <Message isUser={message.sender === 'user'}>
                      {message.text}
                    </Message>
                    <Timestamp isUser={message.sender === 'user'}>
                      {formatTimestamp(message.timestamp)}
                    </Timestamp>
                  </div>
                </MessageWrapper>
              ))}
              {isTyping && (
                <TypingIndicator>
                  <Loader size={16} />
                  El asistente está escribiendo...
                </TypingIndicator>
              )}
              {error && (
                <div style={{ color: 'red', padding: '1rem' }}>
                  {error}
                </div>
              )}
              <div ref={messagesEndRef} />
            </ChatMessages>

            <ChatInput>
              {messages.length === 1 && (
                <SuggestedQuestions>
                  {suggestedQuestions.map((question, index) => (
                    <SuggestedQuestion
                      key={index}
                      onClick={() => setNewMessage(question)}
                    >
                      {question}
                    </SuggestedQuestion>
                  ))}
                </SuggestedQuestions>
              )}
              <InputWrapper>
                <TextArea
                  placeholder="Escribe tu mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  rows={1}
                />
                <SendButton onClick={() => handleSubmit(newMessage)} disabled={!newMessage.trim() || isTyping}>
                  <Send size={20} />
                </SendButton>
              </InputWrapper>
            </ChatInput>
          </ChatWindow>
        )}
      </AnimatePresence>
      
      <ChatButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={24} />
      </ChatButton>
    </ChatContainer>
  );
};

export default AIAssistant;
