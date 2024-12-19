const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3001/api/claude'
  : 'https://api.bairesoft.com/api/claude';

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
    console.log('API Key:', ANTHROPIC_API_KEY ? 'Presente' : 'No encontrada');
    
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

    const requestBody = {
      model: 'claude-3-opus-20240229',
      max_tokens: 1000,
      messages: messages
    };

    console.log('Request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`Error en la API: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
    
    if (!data.content || !data.content[0] || !data.content[0].text) {
      console.error('Respuesta inesperada:', data);
      throw new Error('Formato de respuesta inválido');
    }

    return data.content[0].text;
  } catch (error) {
    console.error('Error detallado al comunicarse con Claude:', {
      message: error.message,
      stack: error.stack
    });
    throw error;
  }
};
