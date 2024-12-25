import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Form, Typography, Tag, Col, Row, Card } from "antd";
import { getDetailjob } from "../../../services/jobService";

const { Title, Text } = Typography;

function JobDetailAdmin() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailjob(params.id);
      if (response) {
        setData(response);
      }
    };
    fetchApi();
  }, []);
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
      {/* {data && (
        <Col>
          <Form
            title={<Title level={3}>{data.name}</Title>}
            bordered={true}
            style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}
          >
            <div style={{ marginBottom: 16 }}>
              <Text strong>Trạng thái: </Text>
              <Tag color={data.status === 1 ? "green" : "red"}>
                {data.status === 1 ? "Đang mở" : "Chưa mở"}
              </Tag>
            </div>
            <div>
              <Text strong>Tags: </Text>
              {data.tags.map((tag, index) => (
                <Tag color="blue" key={index}>
                  {tag}
                </Tag>
              ))}
            </div>
            <div style={{ marginBottom: 16 }}>
              <Text strong>Mức lương: </Text>
              <Text>{data.salary} $</Text>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Text strong>Ngày tạo: </Text>
              <Text>{formatDate(data.createAt)}</Text>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Text strong>Thành phố: </Text>
              {data.city.map((city, index) => (
                <Tag color="orange" key={index}>
                  {city}
                </Tag>
              ))}
            </div>
            <div style={{ marginBottom: 16 }}>
              <Text strong>Mô tả: </Text>
              <Text>{data.description}</Text>
            </div>
          </Form>
        </Col>
      )} */}
      <Row gutter={16}>
        <Col span={24}>
          {data && (
            <Card>
              <Title level={3}>{data.name}</Title>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Trạng thái: </Text>
                <Tag color={data.status === 1 ? "green" : "red"}>
                  {data.status === 1 ? "Đang mở" : "Chưa mở"}
                </Tag>
              </div>
              <div>
                <Text strong>Tags: </Text>
                {data.tags.map((tag, index) => (
                  <Tag color="blue" key={index}>
                    {tag}
                  </Tag>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Mức lương: </Text>
                <Text>{data.salary} $</Text>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Ngày tạo: </Text>
                <Text>{formatDate(data.createAt)}</Text>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Thành phố: </Text>
                {data.city.map((city, index) => (
                  <Tag color="orange" key={index}>
                    {city}
                  </Tag>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Mô tả: </Text>
                <Text>{data.description}</Text>
              </div>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
}

export default JobDetailAdmin;
