import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllCompany } from "../../../../services/companyService";
import JobItem from "./JobItem";
import { Col } from "antd";

function SearchList(props) {
  const { data = [] } = props;
  const [dataFinal, setDataFinal] = useState([]);
  const [searchParams] = useSearchParams(); // Lấy keyword từ URL

  useEffect(() => {
    const fetchApi = async () => {
      const company = await getAllCompany();

      // Lấy keyword từ URL
      const keyword = searchParams.get("keyword");

      // Lọc công việc theo keyword
      const filteredData = keyword
        ? data.filter((item) =>
            item.tags.some((tag) =>
              tag.toLowerCase().includes(keyword.toLowerCase())
            )
          )
        : data;

      const newData = filteredData.map((item) => {
        const infoCompany = company.find(
          (itemCompany) => itemCompany.id == item.idCompany
        );
        return { infoCompany: infoCompany, ...item };
      });

      setDataFinal(newData);
    };
    fetchApi();
  }, [data, searchParams]);

  return (
    <>
      {dataFinal.length > 0 ? (
        <>
          <div className="job-item-container">
            {dataFinal.map((item) => (
              <Col span={8} key={item.id}>
                <JobItem key={item.id} item={item} />
              </Col>
            ))}
          </div>
        </>
      ) : (
        <div>Không tìm thấy công việc nào</div>
      )}
    </>
  );
}

export default SearchList;
