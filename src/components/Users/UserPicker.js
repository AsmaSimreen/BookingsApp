import { users } from "../../static.json";
import Spinner from "../UI/Spinner";

export default function UserPicker() {
  const [user, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://localhost:3001/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);
  if (users === null) {
    return <Spinner />;
  }
  return (
    <select>
      {users.map((u) => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}
