import React from "react";
import { IonIcon } from "@ionic/react";

import './Section.css';

type Props = {
  title?: string;
  subtitle?: string;
  icon?: any;
  options: Array<{
      title: string,
      link: string,
    }>
};

const Section: React.FC<Props> = ({title, subtitle, icon, options }) => {
  return <div className="section_dm" >
    <div>
      <div className="icon_container" >
        <IonIcon size="large" color="#ffb4a7" icon={icon} />
      </div>
      <div className="container_title_section" >
        <span className="title_section" >{title}</span>
        <span className="subtitle_section" >{subtitle}</span>
      </div>
    </div>
    <div>
      {options.map((opt) => (<button>{opt.title}</button>))}
    </div>
  </div>;
};

export default Section;
