import { useEffect, useState } from "react";
import { getCookie } from "../../../helpers/cookies";
import DeleteCV from "./DeleteCV";
import { getListCV } from "../../../services/cvService";
import CVJobname from "./CVJobname";
import { Tag, Tooltip, Button, Table } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import { getListjob } from "../../../services/jobService";
function CVList(props) {
  const idCompany = getCookie("id");
  const { className = "" } = props;
  const [listCV, setlistCV] = useState([]);

  const fetchApi = async () => {
    const response = await getListCV(idCompany);

    if (response) {
      const filteredCVs = response.filter((cv) => cv.idCompany == idCompany);
      setlistCV(filteredCVs);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  const handleReload = () => {
    fetchApi();
  };
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
  const columns = [
    {
      title: "Tên job",
      dataIndex: "idJob",
      key: "idJob",
      render: (_, record) => {
        return <CVJobname idJob={record.idJob} />; // Truyền idJob vào CVJobname
      },
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ngày gửi",

      key: "time",
      render: (_, record) => <>{formatDate(record.createAt)}</>,
    },

    {
      title: "Trạng thái",
      dataIndex: "statusRead",
      key: "statusRead",
      render: (_, record) => (
        <>
          {record.statusRead ? (
            <Tag color="green">Đã đọc</Tag>
          ) : (
            <Tag color="red">Chưa đọc</Tag>
          )}
        </>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <>
          <Link to={`/admin/detail-cv/${record.id}`}>
            <Tooltip title="Xem chi tiết">
              <Button type="primary" icon={<EyeOutlined />} />
            </Tooltip>
          </Link>
          <DeleteCV record={record} onReload={handleReload} />
        </>
      ),
    },
  ];
  return (
    <>
      <div className={className}>
        <Table dataSource={listCV} columns={columns} rowKey="id"></Table>
      </div>
    </>
  );
}
export default CVList;
