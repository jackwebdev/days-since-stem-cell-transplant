import React from "react";

const Milestones = (props) => {
  const startDate = props.startDate;
  const milestones = props.milestones;

  // Work out the future date e.g add days to todays date
  const addDays = (days) => {
    let date = new Date(startDate);
    date.setDate(date.getDate() + days);
    return date;
  };

  // Work out days left from future date
  const daysLeft = (futureDate) => {
    let today = new Date();
    let date = new Date(startDate);
    const oneDay = 24 * 60 * 60 * 1000;
    const diff = Math.round((futureDate - today) / oneDay);
    
    return diff;
  };

  return (
    <div className="milestones">
      {milestones.map((days, index) => {
        let message;
        // Greater than 1 year
        if (days / 364 > 1) {
          message = `${Math.round(days / 365)} Years`;
        // If week is greater than 1 and 52 weeks.
        } else if (days / 7 > 1 && days / 6 < 52) {
          message = `${Math.round(days / 7)} Weeks`;
          // It's short enough to show days!
        } else {
          message = `${days} Days`;
        }
        const futureDate = addDays(days);
        const daysToGo = daysLeft(futureDate);
        const daysToGoMessage = daysToGo < 0 ? `✅`  : `${daysToGo.toLocaleString('en-GB')} Days Left`;
        return <h4 key={index}>{message} - {daysToGoMessage} </h4>
      })}
    </div>
  );
};

export default Milestones;
