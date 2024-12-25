import { Col, Row } from "antd";
import React from "react";
import CVStatistic from "./CVStatistic/CVStatistic";
import JobStatistic from "./JobStatistic/JonStatistic";
import InfoCompany from "./InfoCompany/InfoCompany";
function Dashboard() {
  return (
    <>
      <h2>Tổng quan</h2>
      <Row gutter={[20, 20]}>
        <Col span={8}>
          <JobStatistic />
        </Col>
        <Col span={8}>
          <CVStatistic />
        </Col>
        <Col span={8}>
          <InfoCompany />
        </Col>
      </Row>
    </>
  );
}
export default Dashboard;
