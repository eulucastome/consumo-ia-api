import 'dotenv/config'; 
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function run() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Você eh muito util para todas as pessoas",
      },
      {
        role: "user",
        content: "Quando o Titanic afundou?",
      }
    ]
  });

  console.log(completion.choices[0].message.content);
}

run();