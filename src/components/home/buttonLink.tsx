import "./buttonLink.css";

type buttonProps = {
  title: string;
  href?: string;
  color: "orange" | "blue" | "black";
  size: "small" | "large";
};

function ButtonLink({ title, href, color, size }: buttonProps) {
  return (
    <div className={`button-link ${color} ${size}`}>
      <a href={href}>{title}</a>
      <span></span>
    </div>
  );
}

export default ButtonLink;
