import { getListjob } from "../../../../services/jobService";
import { getCookie } from "../../../../helpers/cookies";
import { useEffect, useState } from "react";
import { Card } from "antd";
function JobStatistic() {
  const idCompany = getCookie("id");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListjob(idCompany);
      console.log(response);
      if (response) {
        const filteredJobs = response.filter(
          (job) => job.idCompany == idCompany
        );
        let obj = {
          total: 0,
          statusTrue: 0,
          statusFalse: 0,
        };
        obj.total = filteredJobs.length;
        filteredJobs.forEach((item) => {
          item.status ? obj.statusTrue++ : obj.statusFalse++;
        });
        setData(obj);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      {data && (
        <Card title="Công việc" style={{ width: "100%" }}>
          <p>Tổng số công việc: {data.total}</p>
          <p>Công việc đang bật: {data.statusTrue}</p>
          <p>Công việc đang tắt: {data.statusFalse}</p>
        </Card>
      )}
    </>
  );
}
export default JobStatistic;
