import Header from "../Components/Header";
import ResponsiveDrawer from "../Components/Sidebar";
import Profile from "../Components/Profile";
const ProfilePage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ResponsiveDrawer/>
      </div>
      <Profile />
    </div>
  );
};

export default ProfilePage;
