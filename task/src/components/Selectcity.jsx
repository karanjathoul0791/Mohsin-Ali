import React, { useEffect, useState } from "react";

const cityData = [
  { name: "Banglore" },
  { name: "Mumbai" },
  { name: "Chennai" },
];

function Selectcity() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    setCity(cityData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempCity = city.map((cities) => {
        return { ...cities, isChecked: checked };
      });
      setCity(tempCity);
    } else {
      let tempCity = city.map((cities) =>
        cities.name === name ? { ...cities, isChecked: checked } : cities
      );
      setCity(tempCity);
    }
  };

  return (
    <div className="" style={{ width: "500px" }}>
      <form className="">
        <h3>Select City</h3>
        <div className="" style={{ margin: "auto" }}>
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!city.some((cities) => cities?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="">All Select</label>
        </div>
        {city.map((cities, index) => (
          <div className="" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={cities.name}
              checked={cities?.isChecked || false}
              onChange={handleChange}
            />
            <label className="">{cities.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Selectcity;
