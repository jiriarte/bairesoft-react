const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
const API_URL = 'https://api.anthropic.com/v1/messages';

const systemPrompt = `Eres un asistente virtual de Bairesoft, una empresa de desarrollo de software. 
Tu objetivo es ayudar a los visitantes del sitio web respondiendo preguntas sobre:
- Servicios de desarrollo de software a medida
- Desarrollo web y aplicaciones móviles
- Soluciones Low-Code
- IA y Machine Learning
- Consultoría IT

Mantén tus respuestas profesionales pero amigables, concisas y enfocadas en cómo Bairesoft puede ayudar al cliente.
Si no estás seguro de algo, sugiere contactar directamente con el equipo de Bairesoft.`;

export const sendMessageToClaude = async (userMessage, conversationHistory = []) => {
  try {
    // Preparar el historial de mensajes en el formato que Claude espera
    const messages = [
      {
        role: "assistant",
        content: systemPrompt
      },
      ...conversationHistory,
      {
        role: "user",
        content: userMessage
      }
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 1000,
        messages: messages
      })
    });

    if (!response.ok) {
      throw new Error('Error en la API: ' + response.status);
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Error al comunicarse con Claude:', error);
    throw error;
  }
};
