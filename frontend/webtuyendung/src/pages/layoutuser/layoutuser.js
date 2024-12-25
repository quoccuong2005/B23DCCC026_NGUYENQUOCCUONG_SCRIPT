import { getCookie } from "../../helpers/cookies";
import "./layoutuser.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "antd";
import logo from "../../img/qr.jpg";
function Layoutuser() {
  const token = getCookie("token");
  const isLogin = useSelector((state) => state.loginReducer);
  console.log(isLogin);
  return (
    <>
      <header>
        <div className="header">
          <div className="header__logo">
            <NavLink className="header__logo--link" to="/">
              {/* <img
                src={logo}
                alt="logo"
                style={{ width: "20%", height: "20%" }}
              /> */}
              <strong className="header__logo--item">IT Jobs</strong>
            </NavLink>
          </div>
          <div className="header__menu">
            <ul className="header__menu--user">
              {token ? (
                <>
                  <li className="header__menu--admin">
                    <NavLink to="/admin">
                      <Button> Quản lý</Button>
                    </NavLink>
                  </li>
                  <li className="header__menu--logout">
                    <NavLink to="/logout">
                      <Button type="primary">Đăng xuất</Button>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="header__menu--login">
                    <NavLink to="login">
                      <Button>Đăng nhập</Button>
                    </NavLink>
                  </li>
                  <li className="header__menu--register">
                    <NavLink to="register">
                      <Button>Đăng ký</Button>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer class="footer">
        <div class="footer__company">Công ty Cổ phần ITJobs Việt Nam</div>

        <div class="footer__info">
          <div class="footer__details">
            <p>
              <i class="fas fa-briefcase"></i> Giấy phép đăng ký kinh doanh số:
              <strong>0107307178</strong>
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> Trụ sở HN: Tòa FS -
              GoldSeason số 47 Nguyễn Tuân, P.Thanh Xuân Trung, Hà Nội
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> Chi nhánh HCM: Tòa nhà Dali,
              24C Phan Đăng Lưu, P.6, Bình Thạnh, TP HCM
            </p>
          </div>

          <div class="footer__qr">
            <img src={logo} alt="QR Code" />
            <a href="https://topcv.com.vn">ITJobs.com.vn</a>
          </div>
        </div>

        <div class="footer__hrtech">
          <div class="footer__service footer__service--green">
            Nền tảng tuyển dụng ITJobs.vn
          </div>
        </div>

        <div class="footer__copyright">
          © 2024 ITJobs Vietnam JSC. All rights reserved.
        </div>
      </footer>
    </>
  );
}
export default Layoutuser;
