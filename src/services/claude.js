const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3001/api/claude'
  : 'https://api.bairesoft.com/api/claude';

const systemPrompt = `Eres el asistente virtual oficial de Bairesoft, una empresa líder en desarrollo de software. 
Tu objetivo es ayudar a los visitantes del sitio web proporcionando información precisa y útil sobre nuestros servicios:

SERVICIOS PRINCIPALES:
1. Desarrollo de Software a Medida
   - Soluciones personalizadas para necesidades específicas
   - Integración con sistemas existentes
   - Escalabilidad y mantenimiento

2. Desarrollo Web y Aplicaciones Móviles
   - Aplicaciones web responsive
   - Apps nativas para iOS y Android
   - Progressive Web Apps (PWA)

3. Soluciones Low-Code
   - Desarrollo rápido de aplicaciones
   - Plataformas low-code empresariales
   - Automatización de procesos

4. IA y Machine Learning
   - Análisis predictivo
   - Procesamiento de lenguaje natural
   - Sistemas de recomendación
   - Automatización inteligente

5. Consultoría IT
   - Asesoramiento tecnológico
   - Transformación digital
   - Optimización de procesos

DIRECTRICES:
- Mantén un tono profesional pero amigable
- Proporciona respuestas concisas y relevantes
- Enfócate en cómo Bairesoft puede resolver los problemas del cliente
- Si una pregunta está fuera de tu conocimiento, sugiere contactar directamente con el equipo
- Para consultas específicas sobre precios o plazos, recomienda agendar una llamada de consultoría

CONTACTO:
- Para consultas detalladas: formulario de contacto en www.bairesoft.com/contact
- Para agendar una llamada: www.bairesoft.com/schedule
- Email: info@bairesoft.com

Recuerda: tu objetivo es ayudar a los visitantes a entender cómo Bairesoft puede ayudarles con sus necesidades de software y tecnología.`;

export const sendMessageToClaude = async (userMessage, conversationHistory = []) => {
  try {
    if (!ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY no está configurado');
      return {
        error: true,
        message: 'Lo siento, el servicio de chat no está disponible en este momento. Por favor, intenta más tarde.'
      };
    }

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: userMessage }
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': ANTHROPIC_API_KEY
      },
      body: JSON.stringify({
        messages,
        max_tokens: 1000,
        temperature: 0.7,
        model: 'claude-3-opus-20240229'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      error: false,
      message: data.content
    };

  } catch (error) {
    console.error('Error al enviar mensaje a Claude:', error);
    return {
      error: true,
      message: 'Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, intenta de nuevo.'
    };
  }
};
