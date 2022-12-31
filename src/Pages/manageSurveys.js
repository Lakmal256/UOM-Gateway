import { useEffect, useState } from "react";
import BasicTable from "./table";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Manage = () => {
  const [surveys, setSurveys] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getSurveyData();
  }, []);

  const getSurveyData = () => {
    API.get("/getsurvey")
      .then((res) => {
        var data = res.data.survey.map((item) => {
          return { survey_id: item.survey_id, survey: JSON.parse(item.survey) };
        });
        setSurveys(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const navigateSurvey = (id) => {
    navigate(`/?id=${id}`);
  };

  return (
    <div>
      <BasicTable data={surveys} update={navigateSurvey} />
    </div>
  );
};

export default Manage;
