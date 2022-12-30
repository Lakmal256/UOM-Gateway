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
            <div key={question.id} className="view_box">
              <input type="text" name={question.name} />
            </div>
          );
        } else if (question.type === "scq") {
          return (
            <div key={question.id} className="view_box">
              {question.option.map((option) => {
                return (
                  <div key={option.id}>
                    <input type="radio" name={option.name} />
                  </div>
                );
              })}
            </div>
          );
        } else if (question.type === "mcq") {
          return (
            <div key={question.id} className="view_box">
              {question.option.map((option) => {
                return (
                  <div key={option.id}>
                    <input type="checkbox" name={option.name} />
                  </div>
                );
              })}
            </div>
          );
        } else if (question.type === "dropdown") {
          return (
            <div key={question.id} className="view_box">
              {question.option.map((option) => {
                return (
                  <div key={option.id}>
                    <select name={option.name} />
                  </div>
                );
              })}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default View;
