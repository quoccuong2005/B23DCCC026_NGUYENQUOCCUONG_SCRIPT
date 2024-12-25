import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { changeStatusCV } from "../../../services/cvService";
import { getDetailCV } from "../../../services/cvService";
import { getDetailjob } from "../../../services/jobService";
import { Card, Col, Row, Tag } from "antd";
const { Meta } = Card;
function CVDetail() {
  const params = useParams();
  const [cv, setCV] = useState();
  const [job, setJob] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailCV(params.id);
      if (response) {
        const responseJob = await getDetailjob(response.idJob);
        if (responseJob) {
          setCV(response);
          setJob(responseJob);
        }
      }
      changeStatusCV(params.id, { statusRead: true });
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

  console.log(cv);
  console.log(job);
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Row gutter={16}>
          <Col span={24}>
            {cv && (
              <Card title="Thông tin ứng viên" bordered={false}>
                <Meta
                  title={`Ứng viên: ${cv.name}`}
                  description={`Ngày gửi: ${formatDate(cv.createAt)}`}
                />
                <p>
                  <strong>Email:</strong> {cv.email}
                </p>
                <p>
                  <strong>Điện thoại:</strong> {cv.phone}
                </p>
                <p>
                  <strong>Địa chỉ:</strong> {cv.city}
                </p>
                <p>
                  <strong>Giới thiệu bản thân:</strong> {cv.description}
                </p>
                <p>
                  <strong>Link project:</strong>
                  <a
                    href={cv.linkProject}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cv.linkProject}
                  </a>
                </p>
              </Card>
            )}
          </Col>

          <Col span={24}>
            {job && (
              <Card title="Thông tin công việc" bordered={false}>
                <Meta
                  title={job.title}
                  description={`Mức lương: ${job.salary}`}
                />
                <p>
                  <strong>Mô tả công việc:</strong> {job.description}
                </p>

                <h4>Tags:</h4>
                <div>
                  {job.tags.map((tag, index) => (
                    <Tag color="blue" key={index}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}
export default CVDetail;
