import { addUser, findUserByEmail } from "@/lib/users";

export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: "All fields required" }), {
      status: 400,
    });
  }

  if (findUserByEmail(email)) {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  }

  // Save to server-side array
  addUser({ id: Date.now(), name, email, password });

  return new Response(JSON.stringify({ message: "User registered" }), {
    status: 200,
  });
}
