/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import Comment from "./component/Comment";
import CommentList from "./component/CommentList";
import back from "./harry3.gif";

function App() {
  return (
    <div className="App">
      <CommentList />
      {/* <div className="back"></div> */}
      {/* <div
        style={{ backgroundImage: "url(" + back + ")", height: "400px" }}
      ></div> */}
      {/* <div
        style={{
          backgroundImage: `url(${back})`,
          height: "300px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <img src={process.env.PUBLIC_URL + "harry2.gif"} />; */}
      <div
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQSkTEJxhMef8dPRfXIGvjwMgwfljaqO8PjIPLSTa_oBMqDssrI-E3yMpEWEUGBKtw_o&usqp=CAU)",
          height: "500px",
        }}
      ></div>
      <img src={back} alt="backgroungaImage"></img>
    </div>
  );
}

export default App;
