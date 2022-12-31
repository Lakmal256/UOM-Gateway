import API from "../api";
import "../Styles/viewSurveyStyle.css";
import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const View = () => {
  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    getSurveyData();
  }, []);

  const getSurveyData = () => {
    API.get("/getsurveybyid?id=4")
      .then((res) => {
        setFormValues(JSON.parse(res.data.survey.survey));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const navigate = useNavigate();

  const submitdata = () => {
    // localStorage.setItem("dataSet", JSON.stringify(formValues));
    // setFormValues([{ id: 0, questionTitle: "", type: "", option: [] }]);

    const payload = { answer: JSON.stringify(formValues) };
    API.post("/addanswer", payload)
      .then((res) => {
        console.log("result", res.data.message);
        navigate("/success");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleOpenData = (e, id) => {
    const value = e.target.value;
    var newFormValues = JSON.parse(JSON.stringify(formValues));
    var question = newFormValues.find((i) => i.id === id);
    question.answer = value;
    setFormValues(newFormValues);
  };

  const handleMcqData = (e, qid, oid) => {
    const value = e.target.checked;
    var newFormValues = JSON.parse(JSON.stringify(formValues));
    var question = newFormValues.find((i) => i.id === qid);
    var option = question.option.find((i) => i.id === oid);
    option.selected = value;
    setFormValues(newFormValues);
  };

  const handleScqData = (e, qid, oid) => {
    const value = e.target.checked;
    var newFormValues = JSON.parse(JSON.stringify(formValues));
    var question = newFormValues.find((i) => i.id === qid);
    var option = question.option.find((i) => i.id === oid);
    option.selected = value;
    question.option.forEach((element) => {
      if (element.id !== oid) element.selected = false;
    });
    setFormValues(newFormValues);
  };

  return (
    <div className="main_div">
      {formValues.map((question) => {
        if (question.type === "open") {
          return (
            <div key={question.id} className="view_box">
              <div className="question_title">
                <div className="question_id">{question.id + 1}.</div>
                <div>{question.questionTitle}</div>
              </div>
              <input
                className="input"
                type="text"
                value={question.answer}
                onChange={(e) => handleOpenData(e, question.id)}
              />
            </div>
          );
        } else if (question.type === "scq") {
          return (
            <div key={question.id} className="view_box">
              <div className="question_title">
                <div className="question_id">{question.id + 1}.</div>
                <div>{question.questionTitle}</div>
              </div>
              {question.option.map((option) => {
                return (
                  <div className="class_option" key={option.id}>
                    <div className="type_name">
                      <input
                        className="option_type"
                        type="radio"
                        name={question.questionTitle}
                        value={option.selected}
                        onChange={(e) =>
                          handleScqData(e, question.id, option.id)
                        }
                      />
                      <div>{option.optionName}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else if (question.type === "mcq") {
          return (
            <div key={question.id} className="view_box">
              <div className="question_title">
                <div className="question_id">{question.id + 1}.</div>
                <div>{question.questionTitle}</div>
              </div>
              {question.option.map((option, item) => {
                return (
                  <div className="class_option" key={option.id}>
                    <div className="type_name">
                      <input
                        className="option_type"
                        type="checkbox"
                        name={option.optionName}
                        value={option.selected}
                        onChange={(e) =>
                          handleMcqData(e, question.id, option.id)
                        }
                      />
                      <div>{option.optionName}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else if (question.type === "dropdown") {
          return (
            <div key={question.id} className="view_box">
              <div className="question_title">
                <div className="question_id">{question.id + 1}.</div>
                <div>{question.questionTitle}</div>
              </div>
              <div className="outlined">
                <Select
                  classes={{ select: "select" }}
                  type="select"
                  value={question.answer}
                  onChange={(e) => handleOpenData(e, question.id)}
                >
                  {question.option.map((option) => {
                    return (
                      <MenuItem key={option.id} value={option.optionName}>
                        {option.optionName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <button className="button_view" onClick={() => submitdata()}>
        Submit
      </button>
    </div>
  );
};

export default View;
