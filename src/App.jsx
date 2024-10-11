import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Hiển thị nội dung của các trang con */}
      <Outlet />
    </>
  );
}

export default App;
