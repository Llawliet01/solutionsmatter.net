export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Contact API received:', data);
    return new Response(JSON.stringify({ message: 'Fake contact received', received: data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
