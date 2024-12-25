import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCityList } from "../../../services/cityService";
import "./Searchform.css";
import { FaSearch } from "react-icons/fa";
import { EnvironmentOutlined } from "@ant-design/icons";
function Searchform() {
  const navigate = useNavigate();
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [tags, setTags] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const respon = await getCityList();
      console.log(respon);
      if (respon) {
        const objAll = {
          key: 0,
          value: "📍 Địa điểm",
        };
        setCity([objAll, ...respon]);
      }
    };
    fetchApi();
  }, []);

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (selectedCity) query.append("city", selectedCity);
    if (tags) query.append("tags", tags);
    navigate(`/search?${query.toString()}`); // Chuyển hướng với query params
  };

  return (
    <>
      <div class="search-container">
        <div className="search-tags">
          {/* <label htmlFor="tags-input"></label> */}
          <input
            id="tags-input"
            type="text"
            placeholder="Nhập kỹ năng muốn tìm kiếm"
            value={tags}
            onChange={(e) => setTags(e.target.value)} // Cập nhật giá trị tags
            required
          />
        </div>
        <div className="search-item">|</div>
        <div className="search-city">
          {/* <label htmlFor="city-select"></label> */}
          <select
            id="city-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {city.map((item) => (
              <option key={item.key} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="search-item">|</div>
        <button className="search-button" onClick={handleSearch}>
          <FaSearch />
          Tìm kiếm
        </button>
      </div>
    </>
  );
}
export default Searchform;
