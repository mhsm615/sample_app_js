import React from "react";

function FruitList() {
  const fruits = ["🍎 りんご", "🍌 バナナ", "🍊 みかん", "🍇 ぶどう"];

  return (
    <div>
      <h2>好きなフルーツ</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
