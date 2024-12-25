import { useEffect, useState } from "react";
import { getCookie } from "../../../../helpers/cookies";
import { getCompanyDetail } from "../../../../services/companyService";
import { Card } from "antd";
function InfoCompany() {
  const idCompany = getCookie("id");
  const [info, setInfo] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getCompanyDetail(idCompany);
      if (response) {
        setInfo(response);
      }
    };
    fetchApi();
  }, []);
  console.log(info);
  return (
    <>
      {info && (
        <Card title="Thông tin công ty" style={{ width: "100%" }}>
          <p>Tên công ty: {info.company.companyName}</p>
          <p>Email: {info.company.email}</p>
          <p>Số điện thoại: {info.company.phone}</p>
          <p>Số nhân viên: {info.company.quantityPeople}</p>
        </Card>
      )}
    </>
  );
}
export default InfoCompany;
