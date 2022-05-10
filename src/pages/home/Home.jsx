import Chart from "../../components/chart/Chart";
import FeaturedInfos from "../../components/featuredInfos/FeaturedInfos";
import Widgetlarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import { userData } from "../../dummyDatas";
import "./home.css";

export default function Home() {
  return (
    <div className="page homepage">
      <FeaturedInfos />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <Widgetlarge />
      </div>
    </div>
  );
}
