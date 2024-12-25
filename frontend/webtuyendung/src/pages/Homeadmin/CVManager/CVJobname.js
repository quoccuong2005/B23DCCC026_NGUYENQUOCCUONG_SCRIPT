import { useState, useEffect } from "react";
import { getCookie } from "../../../helpers/cookies";
import { getListjob } from "../../../services/jobService";

function CVJobname({ idJob }) {
  const idCompany = getCookie("id");
  const [jobname, setJobname] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListjob(idCompany); // Lấy danh sách các job của công ty
      if (response) {
        const job = response.find((job) => job.id === idJob); // Tìm job theo idJob
        setJobname(job); // Lưu thông tin job vào state
      }
    };
    fetchApi();
  }, []); // Dùng idJob để phụ thuộc vào thay đổi
  console.log(jobname);
  return (
    <>{jobname ? <div>{jobname.name}</div> : "Đang tải..."}</> // Hiển thị tên job
  );
}

export default CVJobname;
