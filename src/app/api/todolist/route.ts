import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = createClient();
    const { data } = await supabase.from("todolist").select("*");

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "데이터를 불러오는 데 실패했습니다." });
  }
}

export async function POST(request: NextRequest) {
  const newTodo = await request.json();
  try {
    const supabase = createClient();
    const { data } = await supabase.from("todolist").insert(newTodo);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "데이터를 작성하는 데 실패했습니다." });
  }
}
