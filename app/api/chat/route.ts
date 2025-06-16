import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;


export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages,
  });

  return result.toDataStreamResponse();
}

// export async function POST(req: Request) {
  
//   const { messages } = await req.json();

//   try {
//     const result = streamText({
//         model: openai('gpt-4o'),
//         messages,
//         });
        
//     //return result.toDataStreamResponse();
//     const resp = await result.text;
//     console.log(resp);
//     return Response.json({ result: resp });
//   } catch (error) {
//     console.error('Error in chat API:', error);
//     return new Response('Internal Server Error', { status: 500 });
//   }
// }

// https://jsonplaceholder.typicode.com/users
// export async function GET() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();
//   console.log(data);
//   return Response.json({ data });
// }