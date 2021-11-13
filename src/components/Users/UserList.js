import { users } from "../../static.json";
import { useState } from "react";

export default function UserList() {
  const [userIndex, setIndex] = useState(0);
  
  return (
    <ul className="users items-list-nav">
      {users.map((u, i) => {
        <li key={u.id} className={i === userIndex ? "selected" : null}>
          <button className="btn" onClick={() => setIndex(i)}>
            {u.name}
          </button>
        </li>;
      })}
    </ul>
  );
}
