import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { getAlljob } from "../../../../services/jobService";
import SearchList from "./SearchList";
import { NavLink } from "react-router";
function Search() {
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [data, setData] = useState([]);
  const citySearch = searchParams.get("city");
  const tagsSearch = searchParams.get("tags");
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAlljob();
      if (response) {
        const newData = response.filter((item) => {
          const city = citySearch ? item.city?.includes(citySearch) : true;
          const tags = tagsSearch ? item.tags?.includes(tagsSearch) : true;
          const status = item.status;
          return city && tags && status;
        });
        console.log(newData);

        setData(newData.reverse());
      }
    };
    fetchApi();
  }, [citySearch, tagsSearch]);
  const keyword = searchParams.get("keyword");
  console.log(keyword);

  return (
    <>
      <div className="company-list">
        <div style={{ paddingLeft: 10 }}>
          <span>
            <NavLink className="home" to="/">
              Trang chủ
            </NavLink>{" "}
            {">"} Tìm kiếm{" "}
          </span>
        </div>
        <div>
          <strong style={{ paddingLeft: 10 }}>Kết quả tìm kiếm theo :</strong>
          {citySearch && <span className="city"> {citySearch}</span>}
          {tagsSearch && <span className="tags"> {tagsSearch}</span>}
          {keyword && <span className="tags"> {keyword}</span>}
          {data && <SearchList data={data} />}
        </div>
      </div>
    </>
  );
}

export default Search;
