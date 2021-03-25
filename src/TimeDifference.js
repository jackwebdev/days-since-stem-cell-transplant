import React, { useState, useEffect } from "react";

const TimeDifference = (props) => {
  const [time, setTimer] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setTimer(time + 1), 1000);
    return () => clearTimeout(timer);
  });

  const startDate = props.startDate.getTime();
  const today = new Date();

  const oneDay = 24 * 60 * 60 * 1000; // 24 hours one day

  let diff = Math.floor(today.getTime() - startDate);
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

  let totalDaysElapsed = Math.round(
    Math.abs((today.getTime() - startDate) / oneDay)
  );

  return (
    <>
      <div className="totalDays">
        <h2>{totalDaysElapsed} Days</h2>
      </div>
      
      <div>
        <h3>Time Elapsed 🕐</h3>
        {days >= 0 && (
          <>
            {years > 0 && <h3>{years} Years</h3>}
            {(months > 0 || years > 0) && <h3>{months} Months</h3>}
            <h3>{days} Days</h3>
          </>
        )}
        <h3>{hours} Hours</h3>
        <h3>{mins} Mins</h3>
        <h3>{secs} Secs</h3>
      </div>
    </>
  );
};

export default TimeDifference;
