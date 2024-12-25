import React, { useState, useEffect } from "react";
import { getListTags } from "../../../services/tagsService";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import "./SkillList.css";
import { useNavigate } from "react-router-dom";
function SkillList() {
  const navigate = useNavigate();
  const [tagskill, setTagskill] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTags();
      if (response) {
        setTagskill(response);
      }
    };
    fetchApi();
  }, []);
  console.log(tagskill);
  const handleTagClick = (tag) => {
    navigate(`/search?keyword=${tag.value || ""}`);
  };
  return (
    <>
      <div className="skill-list">
        {tagskill.map((tag) => (
          <Tag
            className="skill-tag"
            color="blue"
            key={tag.key}
            onClick={() => handleTagClick(tag)}
          >
            {tag.value}
          </Tag>
        ))}
      </div>
      <hr className="divider" />
    </>
  );
}
export default SkillList;
