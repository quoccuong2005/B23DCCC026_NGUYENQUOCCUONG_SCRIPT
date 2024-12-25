import { getCookie } from "../../../helpers/cookies";
import { useEffect, useState } from "react";
import { getListjob } from "../../../services/jobService";
import Title from "antd/es/skeleton/Title";
import { Button, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import EditJob from "./EditJob";
import { Tooltip } from "antd";
import DeleteJobComponent from "./DeleteJob";
function JobList(props) {
  const idCompany = getCookie("id");
  const { className = "" } = props;
  const [jobs, setJobs] = useState([]);

  const fetchApi = async () => {
    const response = await getListjob(idCompany);
    if (response) {
      const filteredJobs = response.filter((job) => job.idCompany == idCompany);

      setJobs(filteredJobs);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };
  const columns = [
    {
      title: "Tên job",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (_, record) =>
        (record.tags || []).map((item, index) => (
          <Tag color="blue" key={index}>
            {item}
          </Tag>
        )),
    },
    {
      title: "Mức lương ($)",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <>
          {record.status ? (
            <Tag color="green">Đã mở</Tag>
          ) : (
            <Tag color="red">Chưa mở</Tag>
          )}
        </>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <>
          <Link to={`/admin/detail-job/${record.id}`}>
            <Tooltip title="Xem chi tiết">
              <Button type="primary" icon={<EyeOutlined />} />
            </Tooltip>
          </Link>
          <EditJob record={record} onReload={handleReload} />
          <DeleteJobComponent record={record} onReload={handleReload} />
        </>
      ),
    },
  ];

  return (
    <>
      <div>
        <Table dataSource={jobs} columns={columns} rowKeys="id" />
      </div>
    </>
  );
}
export default JobList;
