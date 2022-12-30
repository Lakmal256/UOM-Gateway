import "./style.css";
import API from "./api";
import React, { useState, useEffect } from "react";

const View = () => {
  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    getSurveyData();
  }, []);

  const getSurveyData = () => {
    API.get("/getsurvey?id=4")
      .then((res) => {
        setFormValues(JSON.parse(res.data.survey.survey));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      {formValues.map((question) => {
        if (question.type === "open") {
          return (
            <div className="view_box">
              <input type="text" />
            </div>
          );
        } else if (question.type === "scq") {
          return (
            <div className="view_box">
              <input type="radio" />
            </div>
          );
        } else if (question.type === "mcq") {
          return (
            <div className="view_box">
              <input type="checkbox" />
            </div>
          );
        } else if (question.type === "dropdown") {
          return (
            <div className="view_box">
              <select />
            </div>
          );
        }
      })}
    </div>
  );
};

export default View;
