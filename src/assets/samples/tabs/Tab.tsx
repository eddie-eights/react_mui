import React, { useState } from "react";

import "./Tab.css";

export const Tab = () => {
  return (
    <div>
      <TabMenu />
    </div>
  );
};

export const TabMenu = () => {
  const [activeId, setActiveId] = useState(1);

  const activate = (id: number) => {
    setActiveId(id);
  };

  const items = [
    { id: 1, title: "サイトの情報" },
    { id: 2, title: "商品情報" },
    { id: 3, title: "お問い合わせ" },
  ];
  return (
    <>
      <section className="tab">
        <ul className="tab__label">
          {items.map((item) => (
            <li key={item.id}>
              <a className={activeId === item.id ? "active" : ""} href="#" onClick={() => activate(item.id)}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {activeId === 1 && <div className="tab__content">サイトの情報のページです</div>}
        {activeId === 2 && <div className="tab__content">商品情報のページです</div>}
        {activeId === 3 && <div className="tab__content">お問い合わせのページです</div>}
      </section>
    </>
  );
};
