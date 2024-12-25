import { Tooltip } from "antd";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { DeleteJob } from "../../../services/jobService";

function DeleteJobComponent(props) {
  const { record, onReload } = props;
  const handleDelete = async () => {
    const response = await DeleteJob(record.id);
    if (response) {
      onReload();
    }
  };
  return (
    <>
      <Tooltip title="Xóa">
        <Popconfirm title="Bạn có chắc muốn xóa ?" onConfirm={handleDelete}>
          <Button danger ghost icon={<DeleteOutlined />}></Button>
        </Popconfirm>
      </Tooltip>
    </>
  );
}
export default DeleteJobComponent;
