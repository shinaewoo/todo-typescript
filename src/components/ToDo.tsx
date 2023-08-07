import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";

const ToDoWrap = styled.li`
  width: 100%;
  display: flex;
  padding: 4px 0;
  border-bottom: 1px solid #ff9501;
`;

const Buttons = styled.button`
  margin-left: 2px;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #ff9501;
  margin-right: 10px;
`;

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as IToDo["category"] };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <ToDoWrap>
      <TextWrap>
        <Dot />
        {text}
      </TextWrap>
      {category !== Categories.DOING && (
        <Buttons name={Categories.DOING} onClick={onClick}>
          Doing
        </Buttons>
      )}
      {category !== Categories.TO_DO && (
        <Buttons name={Categories.TO_DO} onClick={onClick}>
          To Do
        </Buttons>
      )}
      {category !== Categories.DONE && (
        <Buttons name={Categories.DONE} onClick={onClick}>
          Done
        </Buttons>
      )}
    </ToDoWrap>
  );
}
