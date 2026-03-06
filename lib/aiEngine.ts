import OpenAI from 'openai';

export interface ValidationResult {
  market_demand: string;
  competition: string;
  monetization: string;
  difficulty: string;
  score: number;
  summary: string;
  strengths?: string[];
  weaknesses?: string[];
}

if (!process.env.OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY environment variable is not set.');
}

export async function validateIdea(idea: string): Promise<ValidationResult> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are a startup validation expert. Analyze startup ideas and return structured JSON with: market_demand (string), competition (string), monetization (string), difficulty (string), score (number 0-100), summary (string), strengths (array), weaknesses (array).',
      },
      {
        role: 'user',
        content: `Analyze this startup idea: ${idea}`,
      },
    ],
    temperature: 0.7,
    response_format: { type: 'json_object' },
  });

  const choice = completion.choices[0];
  if (!choice || !choice.message || !choice.message.content) {
    throw new Error('No response received from AI');
  }

  let result: ValidationResult;
  try {
    result = JSON.parse(choice.message.content) as ValidationResult;
  } catch {
    throw new Error('Invalid JSON response from AI');
  }

  if (typeof result.score !== 'number' || !result.summary) {
    throw new Error('Invalid response from AI: missing required fields');
  }

  // Clamp score to valid range 0-100
  result.score = Math.max(0, Math.min(100, result.score));

  return result;
}
