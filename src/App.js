import React from "react";
import "./App.css";

import StartDateText from "./StartDateText"
import TimeDifference from "./TimeDifference";
import Milestones from "./Milestones";

function App() {
  // const [startDate, setStartDate] = useState(new Date("2021-02-19T02:12:00+00:00"));
  const startDate = new Date("2021-02-19T02:12:00+00:00");
  
  return (
    <div>
      <header className="App-header">
        <div>
          <h2>Stem Cell Day ✨</h2>
          <StartDateText startDate={startDate} />
          <h2 className="butterfly">🦋</h2>
          <TimeDifference startDate={startDate} />
          <h3>Milestones ⏳</h3>
          <Milestones startDate={startDate} milestones={[7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 100, 150, 200, 365, 730, 1095, 1460, 1825]}/>
        </div>
      </header>
    </div>
  );
}

export default App;
