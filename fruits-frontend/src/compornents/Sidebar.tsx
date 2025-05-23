import React from "react";

type SidebarProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

function Sidebar({ selectedCategory, onCategoryChange }: SidebarProps) {
  const categories = ["赤", "黄色", "紫", "その他"];

  return (
    
    <div style={{ width: "150px", padding: "1rem", background: "#eee" }}>
      <h4>カテゴリ</h4>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onCategoryChange(cat)}
            style={{
              cursor: "pointer",
              fontWeight: selectedCategory === cat ? "bold" : "normal",
              margin: "0.5rem 0"
            }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;