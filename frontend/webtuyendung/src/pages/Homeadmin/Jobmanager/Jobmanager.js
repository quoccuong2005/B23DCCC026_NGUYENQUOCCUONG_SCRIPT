import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import JobList from "./JobList";
function Jobmanager() {
  return (
    <>
      <h1>Danh sách công việc</h1>
      <NavLink to="/admin/createjob">
        <Button icon={<PlusOutlined />} style={{ marginBottom: 10 }}>
          Tạo việc mới
        </Button>
      </NavLink>
      <JobList />
    </>
  );
}
export default Jobmanager;
