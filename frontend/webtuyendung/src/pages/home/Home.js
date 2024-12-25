import CompanyList from "./CompanyList/CompanyList";
import Searchform from "./Searchform/Searchform";
import SkillList from "./SkillList/SkillList";
import background from "../../img/R.jpg";
function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})`, paddingTop: "50px" }}
      >
        <Searchform />
        <SkillList />
      </div>

      <CompanyList />
    </>
  );
}
export default Home;
