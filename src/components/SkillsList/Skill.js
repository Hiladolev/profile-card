export default function Skill({ skill, level }) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let emoji = "";
  switch (level) {
    case "advanced":
      emoji = "💪";
      break;
    case "intermediate":
      emoji = "👍";
      break;
    default:
      emoji = "👶";
  }
  return (
    <li className="skill" style={{ backgroundColor: `#${randomColor}` }}>
      {skill}
      {emoji}
    </li>
  );
}
