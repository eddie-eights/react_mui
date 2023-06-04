import React, { useEffect, useState } from "react";

import "./SearchInput.css";

type TodoItem = {
  item: string;
  isDone: boolean;
};

const SearchInput = () => {
  const [inputItem, setInputItem] = useState("");
  const [todos, setTodo] = useState([{ item: "あああ", isDone: false }]);
  const [seachValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState<TodoItem[]>([]);

  const addItem = () => {
    if (!inputItem) return;
    const newTodo = {
      item: inputItem,
      isDone: false,
    };
    setTodo([...todos, newTodo]);
    setInputItem("");
  };

  const deleteItem = (idx: number) => {
    const newList = todos.filter((_, index) => idx !== index);
    setTodo(newList);
  };

  const handleChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = todos.filter((todo, index) => {
      if (idx === index) {
        todo.isDone = e.target.checked;
        return todo;
      } else {
        return todo;
      }
    });

    setTodo(newList);
  };

  useEffect(() => {
    const newFilteredList = todos.filter((todo) => todo.item.indexOf(seachValue) !== -1);
    setFilteredList(newFilteredList as never);
  }, [seachValue]);

  return (
    <>
      <span>検索ボタン</span>
      <div>
        <input type="text" value={seachValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <span>リストに追加する</span>
      <div>
        <input type="text" value={inputItem} onChange={(e) => setInputItem(e.target.value)} />
        <button onClick={addItem}>追加</button>
      </div>

      <ul>
        {seachValue
          ? filteredList.map((todo, index) => (
              <li>
                <input type="checkbox" checked={todo.isDone as never} onChange={(e) => handleChange(index, e)} />
                <span className={todo.isDone ? "done" : ""}>{todo.item}</span>
                <button onClick={() => deleteItem(index)}>削除</button>
              </li>
            ))
          : todos.map((todo, index) => (
              <li>
                <input type="checkbox" checked={todo.isDone} onChange={(e) => handleChange(index, e)} />
                <span className={todo.isDone ? "done" : ""}>{todo.item}</span>
                <button onClick={() => deleteItem(index)}>削除</button>
              </li>
            ))}
      </ul>
    </>
  );
};

export default SearchInput;
