"use client";

import { useState } from "react";

function HomePage() {
  const [title, setTitle] = useState<string>("");
  const [content, setCotent] = useState<string>("");

  //useQuery -> 데이터 가져올 때

  //useMutation -> 데이터 추가 수정 삭제 할 때

  return (
    <div>
      <form>
        <div>
          <label>제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>내용</label>
          <input type="text" value={content} onChange={(e) => setCotent(e.target.value)} />
        </div>
        <button type="submit">제출</button>
      </form>
      <ul>
        <li>투두 리스트 보여지는 곳</li>
      </ul>
    </div>
  );
}

export default HomePage;
