import React, { useState }　from "react";

function FruitList() {
  const [fruits, setFruits] = useState([
    "🍎 りんご",
    "🍌 バナナ",
    "🍊 みかん",
    "🍇 ぶどう"
  ]);
  const [keyword, setKeyword] = useState("");
  const [newFruit, setNewFruit] = useState("");

    // 絞り込み処理
    const filtered = fruits.filter((fruit) =>
      fruit.includes(keyword)
    );

 // 追加処理
 const handleAddFruit = () => {
   if (newFruit.trim() === "") return; // 空文字なら追加しない
   setFruits([...fruits, newFruit]);
   setNewFruit(""); // 入力欄をクリア
 };

  return (
    <div>
      <h2>好きなフルーツ</h2>
      {/* 入力フォーム */}
      <input
        type="text"
        placeholder="キーワードで絞り込み"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* 追加 */}
      <div style={{ marginTop: "1em" }}>
        <input
          type="text"
          placeholder="新しいフルーツを入力"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
        />
        <button onClick={handleAddFruit}>追加</button>
      </div>

      <ul>
        {filtered.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
