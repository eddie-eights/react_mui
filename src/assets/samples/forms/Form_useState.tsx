import React, { useState } from "react";

type SelectBoxProps = {
  age: string;
  handleChange: (event: React.ChangeEvent<any>) => void;
};

const SelectBox = ({ age, handleChange }: SelectBoxProps) => {
  const ages = [
    { id: 0, generation: "選択してください" },
    { id: 1, generation: "10代" },
    { id: 2, generation: "20代" },
    { id: 3, generation: "30代" },
    { id: 4, generation: "40代" },
    { id: 5, generation: "50代" },
    { id: 6, generation: "60代〜" },
  ];
  return (
    <>
      <label htmlFor="age">年齢：</label>
      <select name="age" id="age" value={age} onChange={handleChange}>
        {ages.map((item) => (
          <option key={item.id} value={item.generation} style={{ textAlign: "center" }}>
            {item.generation}
          </option>
        ))}
      </select>
    </>
  );
};


export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    qurious: [],
    contact: "",
    confirm: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name } = e.target;
    const value = name === "confirm" ? e.target.checked : e.target.value;

    if (name === "qurious") {
      let newQurious;
      if (form.qurious.includes(value as never)) {
        newQurious = form.qurious.filter((q) => q !== value);
      } else {
        newQurious = [...form.qurious, value];
      }
      setForm({ ...form, [name]: newQurious });
    } else {
      const newForm = { ...form, [name]: value };
      setForm(newForm);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* お名前 */}
        <div>
          <label htmlFor="name">お名前：</label>
          <input type="text" name="name" id="name" value={form.name} onChange={handleChange} />
        </div>
        {/* メール */}
        <div>
          <label htmlFor="email">メール：</label>
          <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
        </div>
        {/* 性別 */}
        <div>
          <label htmlFor="gender_male">男性：</label>
          <input type="radio" name="gender" id="gender_male" value="male" />
          <label htmlFor="gender_female">女性：</label>
          <input type="radio" name="gender" id="gender_female" value="female" />
        </div>
        {/* セレクトボックス */}
        <SelectBox age={form.age} handleChange={handleChange} />
        {/* チェックボックス(興味があるもの) */}
        <div>
          <span>興味があるものを選んでください（複数選択可）</span>
          <div>
            <label>
              <input type="checkbox" name="qurious" value="sports" onChange={handleChange} />
              スポーツ
            </label>
            <label>
              <input type="checkbox" name="qurious" value="news" onChange={handleChange} />
              ニュース
            </label>
            <label>
              <input type="checkbox" name="qurious" value="it" onChange={handleChange} />
              IT
            </label>
          </div>
        </div>
        {/* お問い合わせ */}
        <div>
          <label htmlFor="contact">お問い合わせ内容</label>
          <div>
            <textarea name="contact" id="contact" value={form.contact} onChange={handleChange} />
          </div>
        </div>
        {/* 注意事項 */}
        <div>
          <label htmlFor="confirm"></label>
          <input type="checkbox" name="confirm" onChange={handleChange} /> 注意事項に同意する
        </div>

        <div>
          <button>送信</button>
        </div>
      </form>
    </>
  );
};
