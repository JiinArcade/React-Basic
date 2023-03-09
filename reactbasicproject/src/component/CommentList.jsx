import React from "react";
import Comment from "./Comment";
import { useState } from "react";

const comments = [
  {
    name: "도비는",
    comment: "Harrypotter",
  },
  {
    name: "이제",
    comment: "Harrypotter",
  },
  {
    name: "자유예요!",
    comment: "Harrypotter",
  },
];

function CommentList() {
  //setCommentList 스테이트 변경 함수
  const [CommentList, setCommentList] = useState(comments);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  // 제거하는 함수
  const deleteComment = (index) => {
    const newCommentList = [...CommentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList);
    console.log(index);
  };

  const addComment = () => {
    //   const add = { name: "도비는", content: "자유예여!!!!!!!!!!!!" };
    //   setCommentList([add, ...CommentList]);
    const add = { name: name, comment: content };
    setCommentList([add, ...CommentList]);
  };

  return (
    <div>
      {CommentList.map((comment, i) => {
        return (
          <Comment
            name={comment.name}
            comment={comment.comment}
            key={i}
            onDelete={() => deleteComment(i)}
          />
        );
      })}
      이름 :
      <input value={name} onChange={(e) => setName(e.target.value)} />
      댓글 :
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={addComment}>글추가</button>
    </div>
  );
}

export default CommentList;
