import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { todoId: string } }) {
  const { todoId } = params;

  try {
    const supabase = createClient();
    const { data } = await supabase.from("todolist").delete().eq("id", todoId);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "데이터를 작성하는 데 실패했습니다." });
  }
}
