import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import connection from "@/app/lib/db"; 


// Returning sessionID to the client
export async function POST(req) {
  const body = await req.json();
  const { user } = body;

  try {
    const db = await connection(); 
    const sessionID = uuidv4(); 

    return NextResponse.json({ sessionID }); 
  } catch (error) {
    console.error(error, "Error connecting to the database"); 
    return NextResponse.json({ error: "Login Failed" }, { status: 500 }); 
  }
}
