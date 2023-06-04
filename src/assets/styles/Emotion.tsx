import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import styeld from "@emotion/styled";

const Hello = styeld.h2`
  color : ${(props) => (props.blue ? "blue" : "red")}
`;

/* @jsxImportSource @emotion/react */
const Emotion = () => {
  const largeFont = css`
    font-size: 54px;
  `;
  const fontRed = css`
    color: purple;
    text-decoration: underline;
    ${largeFont}
  `;
  return (
    <div>
      <h2
        css={css`
          color: green;
        `}
      >
        Emotionコンポーネント
      </h2>

      <h2 css={fontRed}>Emotionの継承</h2>

      <Hello blue>EmotionをStyledComponentっぽく書く</Hello>
    </div>
  );
};

export default Emotion;
