export default function Skill(props) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li className="skill" style={{ backgroundColor: `#${randomColor}` }}>
      {props.skill}
    </li>
  );
}
