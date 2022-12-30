import API from "../api";
import "../Styles/viewSurveyStyle.css";
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
              <div className="question_title">
                {question.id + 1}.
                {question.questionTitle}
              </div>
              <input type="text" />
            </div>
          );
        } else if (question.type === "scq") {
          return (
            <div key={question.id} className="view_box">
              <div className="question_title">
                {question.id + 1}.
                {question.questionTitle}
              </div>
              {question.option.map((option) => {
                return (
                  <div className="class_option" key={option.id}>
                    <input className="option_type" type="radio" name={question.questionTitle} />
                    <div>{option.optionName}</div>
                  </div>
                );
              })}
            </div>
          );
        } else if (question.type === "mcq") {
          return (
            <div key={question.id} className="view_box">
              <div className="question_title">
                {question.id + 1}.
                {question.questionTitle}
              </div>
              {question.option.map((option) => {
                return (
                  <div className="class_option" key={option.id}>
                    <input className="option_type" type="checkbox" name={option.optionName} />
                    <div>{option.optionName}</div>
                  </div>
                );
              })}
            </div>
          );
        } else if (question.type === "dropdown") {
          return (
            <div key={question.id} className="view_box">
              <div className="question_title">
                {question.id + 1}.
                {question.questionTitle}
              </div>
              <Select classes={{ select: "select" }} type="select">
                {question.option.map((option) => {
                  return (
                    <div className="class_option" key={option.id}>
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
