import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

function FruitList() {
  const defaultFruits = [
    { name: "もも", category: "その他" },
    { name: "パイナップル", category: "南国系" },
    { name: "いちご", category: "ベリー系" },
  ];

  const [fruits, setFruits] = useState(() => {
    const saved = localStorage.getItem("fruits");
    return saved ? JSON.parse(saved) : defaultFruits;
  });

  const [keyword, setKeyword] = useState("");
  const [newFruit, setNewFruit] = useState("");
  const [newCategory, setNewCategory] = useState("その他");
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  useEffect(() => {
    localStorage.setItem("fruits", JSON.stringify(fruits));
  }, [fruits]);

  const filtered = fruits.filter(
    (fruit) =>
      (selectedCategory === "すべて" || fruit.category === selectedCategory) &&
      fruit.name.includes(keyword)
  );

  const handleAddFruit = () => {
    if (newFruit.trim() === "") return;

    setFruits([
      ...fruits,
      { name: newFruit.trim(), category: newCategory },
    ]);

    setNewFruit("");
    setNewCategory("その他");
  };

  const handleDelete = (targetIndex) => {
    setFruits(fruits.filter((_, index) => index !== targetIndex));
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* メインエリア */}
      <div style={{ padding: "1rem", flexGrow: 1 }}>
        <h2>好きなフルーツ</h2>

        <input
          type="text"
          placeholder="キーワードで絞り込み"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        {/* 追加 */}
        <div style={{ marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="新しいフルーツを入力"
            value={newFruit}
            onChange={(e) => setNewFruit(e.target.value)}
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          >
            <option value="南国系">南国系</option>
            <option value="ベリー系">ベリー系</option>
            <option value="その他">その他</option>
          </select>
          <button onClick={handleAddFruit} style={{ marginLeft: "0.5rem" }}>
            追加
          </button>
        </div>

        <ul style={{ marginTop: "1rem" }}>
          {filtered.map((fruit, index) => (
            <li key={index}>
              {fruit.name}（{fruit.category}）
              <button
                onClick={() => handleDelete(index)}
                style={{ marginLeft: "0.5rem" }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FruitList;