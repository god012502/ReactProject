// React 라이브러리에서 필요한 기능을 가져옵니다.
// React: UI를 만들기 위한 라이브러리
// ReactDOM: 실제 웹페이지에 React 컴포넌트를 연결해주는 역할
import React from 'react';
import ReactDOM from 'react-dom/client';

// 우리가 만든 메인 컴포넌트(App)를 불러옵니다.
// 이 App.jsx 안에 화면에 보여줄 여러 컴포넌트가 들어있어요.
import App from './App';

// 페이지 이동(라우팅)을 할 수 있게 도와주는 BrowserRouter를 가져옵니다.
// 예: /login, /signup 같은 URL에 따라 다른 컴포넌트를 보여줄 수 있게 해줌
import { BrowserRouter } from 'react-router-dom';

// HTML에 있는 'root'라는 id를 가진 요소를 찾아서, 여기에 React 앱을 붙일 준비를 합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// 실제 화면에 React 앱을 그리는 부분입니다.
root.render(
  <React.StrictMode>
    {/* 라우팅 기능을 앱 전체에 적용합니다.
        이 안에서 <Route path="/login" element={<Login />} /> 같은 라우팅 설정이 가능합니다 */}
    <BrowserRouter>
      {/* 우리가 만든 App 컴포넌트를 렌더링합니다.
          App.jsx 안에는 페이지 전환, 로그인 여부, 컴포넌트 렌더링 로직이 들어있어요 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
