const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/chat';

const systemPrompt = `Eres un asistente virtual de Bairesoft Consultores Informáticos, una empresa de consultoría y desarrollo de software. 
Tu objetivo es ayudar a los visitantes del sitio web proporcionando información sobre nuestros servicios y respondiendo a sus preguntas.

Servicios principales:
- Desarrollo Web y Aplicaciones Web
- Aplicaciones Móviles
- Desarrollo Low-Code
- IA y Machine Learning
- Consultoría IT
- Desarrollo de Software a Medida

Características de la empresa:
- Ubicada en Almansa, Albacete, España
- Experiencia en transformación digital
- Enfoque en soluciones personalizadas
- Metodologías ágiles
- Compromiso con la calidad y la innovación

Por favor, sé amable, profesional y conciso en tus respuestas. Si no estás seguro de algo, indícalo y sugiere contactar directamente con el equipo.`;

export async function sendMessageToAnthropic(userMessage, conversationHistory = []) {
  try {
    console.log('Sending message to API:', {
      url: API_URL,
      messageLength: userMessage.length,
      historyLength: conversationHistory.length
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory,
      { role: "user", content: userMessage }
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: messages
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al comunicarse con el asistente');
    }

    const data = await response.json();
    console.log('Response received:', data);

    return {
      text: data.response,
      timestamp: new Date()
    };
  } catch (error) {
    console.error('Error in sendMessageToAnthropic:', error);
    if (error.name === 'AbortError') {
      throw new Error('La solicitud ha tardado demasiado. Por favor, inténtalo de nuevo.');
    }
    throw error;
  }
}
