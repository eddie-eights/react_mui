import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
`;

const BaseTitle = styled.h1`
  color: blue;
`;

const Title = styled(BaseTitle)`
  background-color: pink;
`;

type SCProps = {
  isRed: boolean;
  children: React.ReactNode;
};

const StyledComponent = styled.div`
  width: 200;
  height: 100;
  background-color: ${({ isRed }: SCProps) => (isRed ? "red" : "green")};
`;

const StyledComponents = () => {
  const [isRed, setIsRed] = useState(false);

  return (
    <>
      <Wrapper>
        <Title>StyledConponents</Title>
      </Wrapper>

      <StyledComponent isRed={isRed}>
        <p>StyledComponensコンポーネントにPropsを渡しています。</p>
        <button onClick={() => setIsRed((prev) => !prev)}>色を変更する</button>
      </StyledComponent>
    </>
  );
};

export default StyledComponents;
