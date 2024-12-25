import React, { useEffect, useState } from "react";
import { getListCV } from "../../../../services/cvService";
import { getCookie } from "../../../../helpers/cookies";
import { Card } from "antd";
function CVStatistic() {
  const idCompany = getCookie("id");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListCV();
      console.log(response);
      if (response) {
        // Lọc CV theo idCompany trước
        const filteredCVs = response.filter((cv) => cv.idCompany == idCompany);
        console.log(filteredCVs);
        let obj = {
          total: 0,
          statusTrue: 0,
          statusFalse: 0,
        };
        obj.total = filteredCVs.length;
        filteredCVs.forEach((item) => {
          item.statusRead ? obj.statusTrue++ : obj.statusFalse++;
        });
        setData(obj);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      {data && (
        <Card title="CV" style={{ width: "100%" }}>
          <p>Tổng số CV: {data.total}</p>
          <p>CV đã xem: {data.statusTrue}</p>
          <p>CV chưa xem: {data.statusFalse}</p>
        </Card>
      )}
    </>
  );
}
export default CVStatistic;
