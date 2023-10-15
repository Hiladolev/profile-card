import Avatar from "./components/Avatar";
import "./styles.css";
import Intro from "./components/Intro";
import SkillList from "./components/SkillsList/SkillsList";

export default function App() {
  const skills = [
    "HTML+CSS💪",
    "Javascript💪",
    "Git and Github👍",
    "React💪",
    "NodeJs👶",
    "Express👶",
    "MySQL💪",
  ];
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}
