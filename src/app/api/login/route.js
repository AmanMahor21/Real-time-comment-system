import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import connection from "@/app/lib/db"; // Ensure this file returns a valid MySQL connection

export async function POST(req) {
  const body = await req.json();
  const { user } = body;

  try {
    const db = await connection(); // Get your database connection
    const sessionID = uuidv4(); // Generate a new session ID

    return NextResponse.json({ sessionID }); // Return the session ID in an object
  } catch (error) {
    console.error(error, "Error connecting to the database"); // Log error
    return NextResponse.json({ error: "Login Failed" }, { status: 500 }); // Return error response with status code
  }
}
