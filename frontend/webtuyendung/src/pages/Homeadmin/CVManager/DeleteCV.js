import { deleteCV } from "../../../services/cvService";
import { Tooltip } from "antd";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
function DeleteCV(props) {
  const { record, onReload } = props;
  const handleDelete = async () => {
    const response = await deleteCV(record.id);
    if (response) {
      onReload();
    }
  };
  return (
    <>
      {" "}
      <Tooltip title="Xóa">
        <Popconfirm title="Bạn có chắc muốn xóa ?" onConfirm={handleDelete}>
          <Button danger ghost icon={<DeleteOutlined />}></Button>
        </Popconfirm>
      </Tooltip>
    </>
  );
}
export default DeleteCV;
