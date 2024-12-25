import { NavLink } from "react-router";
import { Col, Row, Card, Tag, Typography } from "antd";
import "./Search.css";
const { Title, Text } = Typography;
function JobItem(props) {
  const { item } = props;
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Không sử dụng định dạng 12 giờ
    });
  }
  return (
    <>
      <div className="job-item">
        <NavLink to={`/job/${item.id}`}>
          <Card className="company-card" hoverable>
            <div>
              <Title style={{ fontSize: 30 }}>{item.name}</Title>
            </div>
            <div>
              <strong>Ngôn ngữ : </strong>
              {item.tags.map((item, index) => (
                <Tag color="blue" key={index}>
                  {item}
                </Tag>
              ))}
            </div>
            <div>
              <strong>Thành phố : </strong>
              {item.city.map((item, index) => (
                <Tag color="orange" key={index}>
                  {item}
                </Tag>
              ))}
            </div>
            <div>
              <strong>Mức lương : </strong>
              <span>{item.salary}</span>
            </div>
            <div>
              <strong>Công ty : </strong>
              <span>{item.infoCompany.companyName}</span>
            </div>
            <div>
              <strong>Ngày tạo : </strong>
              <span>{formatDate(item.updateAt)}</span>
            </div>
          </Card>
        </NavLink>
      </div>
    </>
  );
}
export default JobItem;
