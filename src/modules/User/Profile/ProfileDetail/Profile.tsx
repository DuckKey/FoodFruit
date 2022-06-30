import { useSelector } from "react-redux";
import ProfileTabs from "../ProfileTabs/ProfileTabs";
import "./Profile.scss";
import userLogo from "../../../../assets/user.png";

const Profile = () => {
  const user: any = useSelector((state: any) => state.auth.login.currentUser);
  console.log(user);
  window.scrollTo(0, 0);
  return (
    <div className="container mt-lg-5 mt-3">
      <div className="row align-items-start">
        <div className="col-lg-4 p-0 shadow ">
          <div className="author-card pb-0 pb-md-3">
            <div className="author-card-cover" />
            <div className="author-card-profile row">
              <div className="author-card-avatar col-md-5">
                <img src={userLogo} alt="userprofileimage" />
              </div>
              <div className="author-card-details col-md-7">
                <h5 className="author-card-name mb-2">
                  <strong>{user.user.usename}</strong>
                </h5>
                <span className="author-card-position">Joined Dec 12 2021</span>
              </div>
            </div>
          </div>
          <div className="wizard pt-3 ">
            <div className="d-flex align-items-start">
              <div
                className="nav align-items-start flex-column col-12 nav-pills me-3 "
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Profile Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* panels */}
        <div
          className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
          id="v-pills-tabContent"
        >
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          />
          <ProfileTabs />
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
