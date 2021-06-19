import { Doughnut } from "react-chartjs-2";

import './Doughnut.css';

type Props = {
  data: any;
  title: string;
  classStyle?: string;
  centerLegend?: string | number;
};

const DoughnutCustom: React.FC<Props> = ({ data, title, classStyle, centerLegend }) => {
  return (
    <div className={"doughnut_container " + classStyle} >
      <span className="title_doughnut" >{title}</span>
      <div className="doughnut_chart_container">
        <Doughnut
          data={data}
          type="doughnut"
          options={{ maintainAspectRatio: true, cutout: 35 }}
        />
        <div className="doughnut_chart_top">
          <span>{centerLegend}</span>
        </div>
      </div>
    </div>
  );
};

export default DoughnutCustom;
