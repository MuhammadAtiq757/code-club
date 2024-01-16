import Bank from "../Bank/Bank";
import FilghtSchedule from "../FilghtSchedule/FilghtSchedule";
import FlightFunction from "../FlightFunction/FlightFunction";

const Home = () => {
    return (
        <div>
  <FilghtSchedule></FilghtSchedule>
        <FlightFunction></FlightFunction> 
         <Bank></Bank>
          
        </div>
    );
};

export default Home;