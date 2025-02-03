import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h2>대시보드</h2>
      <nav>
        <Link to="settings">설정</Link>&nbsp;
        <Link to="profile">프로필</Link>
      </nav>
      <Outlet /> {/* 서브 라우트가 여기에 렌더링됨 */}
    </div>
  );
}

function Home() {
  return <h2>홈 페이지</h2>;
}

function Settings() {
  return <h2>설정 페이지</h2>;
}

function Profile() {
  return <h2>프로필 페이지</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">홈</Link>
		&nbsp;
        <Link to="/dashboard">대시보드</Link>
		<br/>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
