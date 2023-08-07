import React from "react";
import { Categories, IToDo, categoryState } from "../atoms";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CategorySelectBox = styled.select`
  width: 120px;
`;

export default function Category() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as IToDo["category"]);
  };
  return (
    <CategoryContainer>
      <CategorySelectBox value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </CategorySelectBox>
    </CategoryContainer>
  );
}
