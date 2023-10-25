export default function Skill({ skill }) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li className="skill" style={{ backgroundColor: `#${randomColor}` }}>
      {skill}
    </li>
  );
}
