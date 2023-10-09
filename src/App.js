import Avatar from "./components/Avatar";
import "./styles.css";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
      </div>
    </div>
  );
}
