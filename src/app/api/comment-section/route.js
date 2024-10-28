import connection from "@/app/lib/db";
import { NextResponse } from "next/server"; // Use NextResponse

// Receiving all the comment data from the DB
export async function GET() {
  try {
    const db = await connection();
    const [data] = await db.execute("SELECT * from users_list");
    return NextResponse.json(data);

  } catch (error) {
    console.log(error, "Error while fetching all users from DB");
    return NextResponse.json({ error: "Failed to fetch users" });
  }
}

// Inserting new comment to the DB
export async function POST(req) {
  try {
    const db = await connection();
    const body = await req.json();
    const { name, comment, time } = body;

    const query =
      "INSERT INTO users_list ( username, comment, timestamp) VALUES(?,?,NOW())";
    const value = [name, comment];

    const [result] = await db.execute(query, value);
    return NextResponse.json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
  }
}
