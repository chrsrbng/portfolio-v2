import Image from "next/image";

export default function Skill({
  path,
  label,
  width = 25,
  height = 25,
}: {
  path: string;
  label: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="skill-container">
      <Image alt="React" width={width} height={height} src={path} />
      <span>{label}</span>
    </div>
  );
}
