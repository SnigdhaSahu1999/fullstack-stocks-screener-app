import "./topBox.scss";
import { topGainers } from "../../data";

export interface ITopBox{
  title:string;
}

const TopBox = ({title}:ITopBox ) => {
  return (
    <div className="topBox">
      <h1>{title}</h1>
      <div className="list">
        {topGainers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
