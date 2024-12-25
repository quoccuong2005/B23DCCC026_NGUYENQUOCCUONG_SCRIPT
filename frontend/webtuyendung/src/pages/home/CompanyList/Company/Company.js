import { useEffect, useState } from "react";
import { getAllCompany } from "../../../../services/companyService";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "antd";
import { Navigate } from "react-router";
function Company() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      const respon = await getAllCompany();
      if (respon) {
        setData(respon);
      }
    };
    fetchApi();
  }, []);
  console.log(data);
  return (
    <>
      <Button style={{ margin: "5px" }} onClick={() => navigate(-1)}>
        Quay lại
      </Button>
      <div className="company-list">
        <h2>Danh sách công ty</h2>
        <Row gutter={[20, 20]}>
          {data.map((item) => (
            <Col span={6} key={item.id}>
              <Link to={`/company/${item.id}`}>
                <Card className="company-card" hoverable>
                  <div>
                    <strong>Công ty : </strong>
                    {item.companyName}
                  </div>
                  <div>
                    <strong> Số nhân sự : </strong>
                    {item.quantityPeople}
                  </div>
                  <div>
                    <strong>Địa chỉ : </strong>
                    {item.address}
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
export default Company;
