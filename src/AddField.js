import React, { useState } from "react";
import "./style.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import API from "./api";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [formValues, setFormValues] = useState([
    { id: 0, questionTitle: "", type: "scq", option: [] },
  ]);

  const addFormFields = () => {
    setFormValues([
      ...formValues,
      { id: formValues.length, questionTitle: "", type: "scq", option: [] },
    ]);
  };

  const removeFormFields = (i) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const removeOptionFields = (id, i) => {
    var newFormValues = JSON.parse(JSON.stringify(formValues));
    var question = newFormValues.find((i) => i.id === id);
    question.option.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleData = (e, id) => {
    const value = e.target.value;
    var newFormValues = JSON.parse(JSON.stringify(formValues));
    var question = newFormValues.find((i) => i.id === id);
    question.questionTitle = value;
    setFormValues(newFormValues);
  };

  const handleOptionData = (e, qid, oid) => {
    const value = e.target.value;
    var newFormValues = JSON.parse(JSON.stringify(formValues));
    var question = newFormValues.find((i) => i.id === qid);
    var option = question.option.find((i) => i.id === oid);
    option.optionName = value;
    setFormValues(newFormValues);
  };

  const handleChange = (e, id) => {
    const value = e.target.value;
    var newFormValues = JSON.parse(JSON.stringify(formValues));
    var question = newFormValues.find((i) => i.id === id);
    question.type = value;
    setFormValues(newFormValues);
  };

  const handleOption = (id) => {
    var newFormValues = JSON.parse(JSON.stringify(formValues));
    var question = newFormValues.find((i) => i.id === id);
    // question.option =[...question.option,{id:question.option.length, optionName:""}] ;
    question.option.push({ id: question.option.length, optionName: "" });
    console.log("question",question);
    setFormValues(newFormValues);
  };

  const submit = () => {
    localStorage.setItem("dataSet", JSON.stringify(formValues));
    setFormValues([{ id: 0, questionTitle: "", type: "scq", option: [] }]);

    const payload = { survey: JSON.stringify(formValues) };
    API.post("/addsurvey", payload)
      .then((res) => {
        console.log("result", res.data.message);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/view");
  };

  return (
    <div>
      <div className="button-section">
        <button
          className="button add"
          type="button"
          onClick={() => addFormFields()}
        >
          Add
        </button>
        <button className="button_submit" onClick={() => submit()}>
          Submit
        </button>
        <button className="button_view" onClick={handleClick}>
          View
        </button>
      </div>
      {formValues.map((item, index) => (
        <div className="box" key={index}>
          <div className="form-inline">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Question Title"
              value={item.questionTitle}
              onChange={(e) => handleData(e, item.id)}
            />

            <div
              className="button_remove"
              onClick={() => removeFormFields(item.id)}
            >
              &times;
            </div>
          </div>
          <div className="select_option_main">
            <div className="select_label">Select Question</div>
            <div>
              <Select
                classes={{ select: "select" }}
                type="select"
                name="name"
                value={item.type}
                onChange={(e) => handleChange(e, item.id)}
              >
                <MenuItem value={"scq"}>scq</MenuItem>
                <MenuItem value={"mcq"}>mcq</MenuItem>
                <MenuItem value={"open"}>open</MenuItem>
                <MenuItem value={"dropdown"}>dropdown</MenuItem>
              </Select>
              {item.type !== "open" ? (
                <button
                  onClick={() => handleOption(item.id)}
                  className="add_option"
                >
                  Add Option
                </button>
              ) : null}
            </div>
          </div>
          {item.option.map((option) => {
            return (
              <div className="add_option_main" key={option.id}>
                <input
                  className="input_option"
                  type="text"
                  name="name"
                  placeholder="Option Name"
                  value={option.optionName}
                  onChange={(e) => handleOptionData(e, item.id, option.id)}
                />

                <div
                  className="button_remove_option"
                  onClick={() => removeOptionFields(item.id)}
                >
                  &times;
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default App;
