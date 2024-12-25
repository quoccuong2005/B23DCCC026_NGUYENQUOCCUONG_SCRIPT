import { getAllCompany } from "../../../services/companyService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "antd";
import "./CompanyList.css";
function CompanyList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const respon = await getAllCompany();
      if (respon) {
        setData(respon);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="company-list">
        <h2 className="company-title">Danh sách công ty</h2>
        <Row className="company-row" gutter={[20, 20]}>
          {data.slice(0, 8).map((item) => (
            <Col span={6} key={item.id}>
              <Link to={`/company/${item.id}`}>
                <Card className="company-card" hoverable>
                  <div>
                    <strong>Công ty : </strong>
                    {item.companyName}
                  </div>
                  <div>
                    <strong>Số nhân sự : </strong>
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
        <div className="btn-view-all">
          <Link to="/company">
            <Button type="primary">Xem thêm</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default CompanyList;
