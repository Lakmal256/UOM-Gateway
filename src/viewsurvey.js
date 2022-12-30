import "./style.css";
import API from "./api";
import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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
              <div>{question.questionTitle}</div>
              <input type="text" />
            </div>
          );
        } else if (question.type === "scq") {
          return (
            <div key={question.id} className="view_box">
              <div>{question.questionTitle}</div>
              {question.option.map((option) => {
                return (
                  <div key={option.id}>
                    <div>{option.optionName}</div>
                    <input type="radio" name={option.optionName} />
                  </div>
                );
              })}
            </div>
          );
        } else if (question.type === "mcq") {
          return (
            <div key={question.id} className="view_box">
              <div>{question.questionTitle}</div>
              {question.option.map((option) => {
                return (
                  <div key={option.id}>
                    <div>{option.optionName}</div>
                    <input type="checkbox" name={option.optionName} />
                  </div>
                );
              })}
            </div>
          );
        } else if (question.type === "dropdown") {
          return (
            <div key={question.id} className="view_box">
              <div>{question.questionTitle}</div>
              <Select
                classes={{ select: "select" }}
                type="select"
                // name={option.optionName}
              >
                {question.option.map((option) => {
                  return (
                    <div key={option.id}>
                      <MenuItem value={option.optionName}>
                        {option.optionName}
                      </MenuItem>
                    </div>
                  );
                })}
              </Select>
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
