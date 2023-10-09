import Skill from "../SkillsList/Skill";
export default function SkillsList(props) {
  return (
    <ul className="skill-list">
      {props.skills.map((skill) => (
        <Skill skill={skill} key={skill} />
      ))}
    </ul>
  );
}
