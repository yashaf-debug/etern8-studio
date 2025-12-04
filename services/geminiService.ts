import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Инициализация клиента Gemini
// API ключ должен быть доступен через process.env.API_KEY
// Примечание: В реальном приложении никогда не вызывайте API напрямую с клиента, если ключ не защищен.
// В данной среде (WebContainer/Preview) process.env.API_KEY инжектируется безопасно.

export const generateText = async (prompt: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found in environment variables");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Используем модель gemini-2.5-flash для быстрых текстовых задач
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Нет ответа от модели.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
