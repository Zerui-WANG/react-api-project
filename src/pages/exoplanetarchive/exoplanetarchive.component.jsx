import React from "react";
import { useState, useEffect } from "react";
import "./exoplanetarchive.css";
import Table from "../../components/exoplanetarchive/Table/Table";
import CheckBoxArray from "../../components/exoplanetarchive/Checkbox/CheckBoxArray";

const Exoplanetarchive = () => {
  const [checkedItems, setCheckedItems] = useState([{}]);
  const [finalUrl, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const [select, setSelect] = useState("");
  const [from, setfrom] = useState("");

  const fetchData = async () => {
    if (select !== "" && from !== "") {
      const response = await fetch(`${finalUrl}`);
      const jsonData = await response.json();

      const jsonValues = jsonData.reduce((result, element) => {
        result.push(Object.values(element));
        return result;
      }, []);

      setData(jsonValues);
      setColumns(Object.keys(jsonData[0]));
    }
  };

  const CORS = "https://secret-ocean-49799.herokuapp.com/";
  const baseUrl =
    "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+";
  const partFrom = "FROM+";
  const partLimit = "WHERE+rownum+between+1+and+300+";
  // const partAnd = "AND+";
  // const partOrder = "ORDER+BY+";
  const partFormatJson = "&format=json";

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.value]: event.target.checked,
    });

    let localSelect = select;
    let localFrom = from;

    if (event.target.checked === true) {
      if (localSelect !== "") localSelect += "," + event.target.value;
      else localSelect += event.target.value;
      if (!localFrom.includes(event.target.name)) {
        localFrom += "" + event.target.name;
      }
    } else {
      localSelect = localSelect.replace(event.target.value, "");

      if (localSelect.charAt(0) === ",") localSelect = localSelect.substring(1);
      if (
        !finalUrl.includes(
          event.target.name.substring(0, event.target.name.length - 1) + "."
        )
      ) {
        localFrom = localFrom.replace(event.target.name, "");
      }

      while (localSelect.includes(",,")) {
        localSelect = localSelect.replace(",,", ",");
      }

      localSelect = localSelect.replace(",+", "+");
      localSelect = localSelect.replace("++", "+");
    }

    if (localSelect === ",") {
      setSelect("");
    } else {
      setSelect(localSelect);
    }
    setfrom(localFrom);

    let localUrl =
      CORS +
      baseUrl +
      localSelect +
      partFrom +
      localFrom +
      partLimit +
      partFormatJson;
    localUrl = localUrl.replace("+&", "&");
    localUrl = localUrl.replace(",FROM", "FROM");

    if (localSelect !== "" || localFrom !== "") {
      setUrl(localUrl);
    }
  };

  const checkboxes = [
    {
      key: "ML.pl_name",
      name: "ML+",
      value: "ML.pl_name+",
    },
    {
      key: "ML.pl_masse",
      name: "ML+",
      value: "ML.pl_masse+",
    },
    {
      key: "ML.pl_orbsmax",
      name: "ML+",
      value: "ML.pl_orbsmax+",
    },
    {
      key: "ML.ml_xtimeein",
      name: "ML+",
      value: "ML.ml_xtimeein+",
    },
  ];

  useEffect(() => {
    fetchData();
  }, [checkedItems]);

  return (
    <>
      <br />
      <br />
      <CheckBoxArray
        name={checkboxes[0].name.substring(0, checkboxes[0].name.length - 1)}
        checkBoxes={checkboxes}
        checkedItems={checkedItems}
        onChange={handleChange}
      />
      <br />
      <Table key="Table" columns={columns} data={data} />
    </>
  );
};

export default Exoplanetarchive;
