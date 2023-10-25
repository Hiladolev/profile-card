export default function Skill({ skill, level }) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const skillLevel = level;

  return (
    <li className="skill" style={{ backgroundColor: `#${randomColor}` }}>
      {skill}
    </li>
  );
}
