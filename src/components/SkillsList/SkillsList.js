import Skill from "../SkillsList/Skill";
export default function SkillsList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((item) => (
        <Skill skill={item.skill} key={item.skill} level={item.level} />
      ))}
    </ul>
  );
}
