import { Link } from "react-router-dom";
import "./linkModal.css";
type link = {
  title: string;
  url: string;
};

type linkModalProps = {
  links: link[];
};

function LinkModal({ links }: linkModalProps) {
  return (
    <div className="link-modal">
      <ul>
        {links.map((link, index) => (
          <Link to={link.url} key={index}>
            <li>{link.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default LinkModal;
