import React from "react";
import * as S from "./styles";

export default function TodoListItem({ contents, checked }) {
  return (
    <S.List>
      <span>
        <span className="bullet">•</span>
        <span className="contents">{contents}</span>
      </span>
      <input type="checkbox" defaultChecked={checked}/>
    </S.List>
  );
}
