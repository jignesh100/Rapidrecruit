import React from "react";
import InputField from "../Components/InputField";

const JobpostingData = ({ handleChange }) => {
  const now = new Date();
  //console.log(now);

  const twentyfourHourAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
  //console.log(twentyfourHourAgo);

  //convert date to string
  const twentyfourHourAgoDate = twentyfourHourAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
  //console.log(twentyfourHourAgoDate);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Data of posting</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All time
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyfourHourAgoDate}
          title="Last 24 Hours"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobpostingData;
