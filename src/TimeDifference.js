import React, { useState } from "react";

const TimeDifference = (props) => {
  const [time, setTimer] = useState("");
  // Probably not the best way to refresh the component. It works for now.
  setInterval(() => setTimer(time + 1), 1000);

  const startDate = props.startDate;
  const today = new Date();

  let diff = Math.floor(today.getTime() - startDate.getTime());
  let secs = Math.floor(diff / 1000);
  let mins = Math.floor(secs / 60);
  let hours = Math.floor(mins / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 31);
  let years = Math.floor(months / 12);

  months = Math.floor(months % 12);
  days = Math.floor(days % 31);
  hours = Math.floor(hours % 24);
  mins = Math.floor(mins % 60);
  secs = Math.floor(secs % 60);

  return (
    <div className="timer">
      {days >= 0 && (
        <>
          <h3>{days} Days</h3>
          {(months > 0 || years > 0) && <h3>{months} Months</h3>}
          {years > 0 && <h3>{years} Years</h3>}
        </>
      )}
      <h3>{hours} Hours</h3>
      <h3>{mins} Mins</h3>
      <h3>{secs} Secs</h3>
    </div>
  );
};

export default TimeDifference;
