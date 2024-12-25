import { useEffect, useState } from "react";
import { getCompanyDetail } from "../../../../services/companyService";
import { useParams } from "react-router";
import { getListjob } from "../../../../services/jobService";
import { Col, Row, Card, Tag, Typography, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
function CompanyDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const [infoCompany, setInfoCompany] = useState();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const respon = await getCompanyDetail(params.id);

      setInfoCompany(respon);
    };
    fetchApi();
  }, []);
  console.log(infoCompany);
  useEffect(() => {
    const fetchApi = async () => {
      const respon = await getListjob(params.id);
      const filteredJobs = respon.filter(
        (job) => job.idCompany == params.id && job.status
      );
      setJobs(filteredJobs);
    };
    fetchApi();
  }, []);
  console.log(jobs);
  return (
    <>
      <Button style={{ margin: "5px" }} onClick={() => navigate(-1)}>
        Quay lại
      </Button>
      {infoCompany && (
        <>
          <div className="company-list">
            <h2>Thông tin công ty</h2>
            <div style={{ marginLeft: 20 }}>
              <div style={{ marginBottom: 10 }}>
                <strong>Tên công ty:</strong> {infoCompany.company.companyName}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Địa chỉ:</strong> {infoCompany.company.address}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Số nhân sự:</strong>{" "}
                {infoCompany.company.quantityPeople}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Thời gian làm việc :</strong>{" "}
                {infoCompany.company.workingTime}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Link website :</strong>{" "}
                <a href="#">{infoCompany.company.website}</a>
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Mô tả ngắn:</strong>
              </div>
              <div style={{ marginBottom: 10 }}>
                {" "}
                {infoCompany.company.description}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Mô tả chi tiết:</strong>
              </div>
              <div style={{ marginBottom: 10 }}>
                {infoCompany.company.detail}
              </div>
            </div>
          </div>
          <div className="company-list" style={{ marginTop: 20, padding: 20 }}>
            <strong>Danh sách các công việc :</strong>
            <div>
              <Row gutter={[16, 16]}>
                {jobs.length > 0 ? (
                  <>
                    {jobs.map((job) => (
                      <Col span={8} key={job.id}>
                        <NavLink
                          state={{ company: infoCompany }}
                          to={`/job/${job.id}`}
                        >
                          <Card
                            style={{ marginTop: 10 }}
                            className="company-card"
                            hoverable
                          >
                            <Title level={4}>{job.name}</Title>

                            <Text type="secondary">
                              Mức lương: {job.salary}
                            </Text>
                            <div style={{ marginTop: 10 }}>
                              <strong>Tags: </strong>
                              {job.tags.map((tag, index) => (
                                <Tag color="blue" key={index}>
                                  {tag}
                                </Tag>
                              ))}
                            </div>
                            <div style={{ marginTop: 10 }}>
                              <strong>Thành phố: </strong>
                              {job.city.join(", ")}
                            </div>
                            <div style={{ marginTop: 10 }}>
                              <strong>Mô tả: </strong>
                              {job.description}
                            </div>
                          </Card>
                        </NavLink>
                      </Col>
                    ))}{" "}
                  </>
                ) : (
                  <div>Không có công việc nào</div>
                )}
              </Row>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default CompanyDetail;
