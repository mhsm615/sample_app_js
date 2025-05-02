import React, { useState, useEffect } from "react";

function FruitList() {
  // 1. 初期値を localStorage から読み込む
  const [fruits, setFruits] = useState(() => {
    const saved = localStorage.getItem("fruits");
    return saved ? JSON.parse(saved) : [];
  });
  const [keyword, setKeyword] = useState("");
  const [newFruit, setNewFruit] = useState("");

  /// 2. fruitsが変わるたびに保存する
  useEffect(() => {
    localStorage.setItem("fruits", JSON.stringify(fruits));
  }, [fruits]);

  // 絞り込み処理
  const filtered = fruits.filter((fruit) => fruit.includes(keyword));

  // 追加処理
  const handleAddFruit = () => {
    if (newFruit.trim() === "") return; // 空文字なら追加しない
    // 文末に追加
    // スプレッド構文 (...) 配列の中身を「展開」して、末尾に newFruit をくっつけた新しい配列を作る
    setFruits([...fruits, newFruit]);
    setNewFruit(""); // 入力欄をクリア
  };

  // 削除処理
  const handleDelete = (targetIndex) => {
    setFruits(fruits.filter((_, index) => index !== targetIndex));
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
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "0.5em" }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
