import React from "react";
import { IonIcon } from "@ionic/react";
import { useHistory } from "react-router";
import { checkmark } from "ionicons/icons";

import "./Section.css";

type Props = {
  title?: string;
  subtitle?: string;
  icon?: any;
  color: string;
  options: Array<{
    title: string;
    link: string;
  }>;
};

const Section: React.FC<Props> = ({
  title,
  subtitle,
  icon,
  options,
  color,
}) => {
  const { push } = useHistory();
  return (
    <div className="section_dm">
      <div>
        <div className="icon_container">
          <IonIcon size="large" style={{ color }} icon={icon} />
        </div>
        <div
          style={{ backgroundColor: color }}
          className="container_title_section"
        >
          <span className="title_section">{title}</span>
          <span className="subtitle_section">{subtitle}</span>
        </div>
      </div>
      <div className="line_vertical_SM">
        <div className="container_checkmark" style={{ backgroundColor: color }}>
          <IonIcon icon={checkmark} />
        </div>
      </div>
      <div>
        {options.map((opt, index) => (
          <button key={index} onClick={() => push("/gestion" + opt.link)}>
            {opt.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Section;
