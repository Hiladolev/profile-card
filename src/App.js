import Avatar from "./components/Avatar";
import "./styles.css";
import Intro from "./components/Intro";
import SkillList from "./components/SkillsList/SkillsList";

export default function App() {
  // const skills = [
  //   "HTML+CSS💪",
  //   "Javascript💪",
  //   "Git and Github👍",
  //   "React💪",
  //   "NodeJs👶",
  //   "Express👶",
  //   "MySQL💪",
  // ];
  const skills = [
    { skill: "HTML+CSS", level: "advanced" },
    { skill: "Javascript", level: "advanced" },
    { skill: "Git and Github", level: "intermediate" },
    { skill: "React", level: "advanced" },
    { skill: "NodeJs", level: "intermediate" },
    { skill: "Express", level: "intermediate" },
    { skill: "MySQL", level: "advanced" },
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
