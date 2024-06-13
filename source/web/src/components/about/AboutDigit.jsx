import React from 'react';

const ProgressBar = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center mx-auto py-32">
      <div className="radial-progress bg-white text-blue-700 h-24 w-24 flex items-center justify-center rounded-full" style={{ '--value': value }} role="progressbar">
        {value}%
      </div>
      <p className="text-center text-gray-800 text-xl mt-2">{label}</p>
    </div>
  );
};

const ProgressBarsRow = () => {
  // Dummy data
  const progressData = [
    { value: 75, label: "NEW STUDENTS" },
    { value: 83, label: "NEW TEACHERS" },
    { value: 25, label: "CREATIVITY" },
    { value: 95, label: "PRESTIGE" }
  ];

  return (
    <div className="flex justify-center bg-white px-44">
      {progressData.map((item, index) => (
        <ProgressBar key={index} value={item.value} label={item.label} />
      ))}
    </div>
  );
};

export default ProgressBarsRow;
