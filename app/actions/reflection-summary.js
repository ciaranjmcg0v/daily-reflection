"use server";

import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export async function generateReflectionSummary(reflectionText) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a supportive and empathetic assistant. Analyze the user's reflection and provide a thoughtful, personalized response with encouragement or advice based on the reflection and any emotions that may be present.",
        },
        {
          role: "user",
          content: reflectionText,
        },
      ],
    });

    return { summary: completion.choices[0].message.content };
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Error generating summary");
  }
}
