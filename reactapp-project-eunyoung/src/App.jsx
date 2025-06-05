import { useState } from "react";

// 각 기능별 컴포넌트 import
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/Logout";

function App() {
  // 현재 보여줄 화면 상태: signup, login, edit, logout 중 하나
  const [currentView, setCurrentView] = useState("login");

  // 화면 전환 함수 - 버튼 클릭 시 실행
  const changeView = (viewName) => {
    setCurrentView(viewName); // viewName: 'signup', 'login', 'edit', 'logout'
  };

  // 화면 상태에 따라 알맞은 컴포넌트를 렌더링
  const renderView = () => {
    switch (currentView) {
      case "Signup":
        return <Signup />;
      case "login":
        return <Login />;
      case "Profile":
        return <Profile />;
      case "logout":
        return <Logout />;
      default:
        return <Login />;
    }
  };

  return (
    <div>
      {/* 상단 네비게이션 버튼 - 화면 전환 */}
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => changeView("signup")}>회원가입</button>
        <button onClick={() => changeView("login")}>로그인</button>
        <button onClick={() => changeView("profile")}>정보수정</button>
        <button onClick={() => changeView("logout")}>로그아웃</button>
      </nav>

      {/* 실제로 화면에 보일 컴포넌트 렌더링 */}
      {renderView()}
    </div>
  );
}

export default App;