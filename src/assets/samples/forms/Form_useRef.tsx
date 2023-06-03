
// useRef -> レンダリングせずに値を保持できる、ファイル使用時に使う

import React, { useRef } from "react";

export const UnControlledForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current) {
      console.log(nameRef.current.value);
    }
    if (fileRef.current?.files) {
      console.log(fileRef.current.files[0] ?? "ファイルなし");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* お名前 */}
        <div>
          <label htmlFor="name">お名前：</label>
          <input type="text" name="name" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="file">ファイルをアップロード：</label>
          <div>
            <input type="file" name="file" id="file" ref={fileRef} />
          </div>
        </div>
        <div>
          <button>送信</button>
        </div>
      </form>
    </>
  );
};
