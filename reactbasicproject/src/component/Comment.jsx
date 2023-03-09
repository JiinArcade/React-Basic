import React from "react";
// import './Comment.css';

const styles = {
  wrapper: {
    display: "flex",
    margin: "15px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "15px",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "8px",
  },

  nameText: {
    fontSize: "18px",
    fontWeight: "bold",
    marginLeft: 20,
  },

  commentText: {
    fontSize: "14px",
    marginLeft: 20,
  },

  btnText: {
    fontSize: 20,
    width: 50,
    height: 50,
    border: "none",
    borderRadius: "50%",
    position: "absolute",
    right: 50,
    marginTop: 25,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div>
        <img
          style={styles.image}
          src="https://image.ytn.co.kr/general/jpg/2018/0503/201805031735071324_t.jpg"
          alt="user-img"
        />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
      <button style={styles.btnText} onClick={props.onDelete}>
        X
      </button>
    </div>
  );
}

export default Comment;
