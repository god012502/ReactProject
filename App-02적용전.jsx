import './App.css';
import {useState} from 'react';
//App 컴포넌트가 전달해준 프롭스를 하위 컴포넌트로 전달
const Page = ({isDark, setIsDark}) => {
    return(
        <div className="page">
            {/*스테이트 변수 값만 전달*/}
            <Header isDark={isDark}></Header>
            {/*스테이트 변수 값만 전달*/}
            <Content isDark={isDark}></Content>
            <Footer isDark={isDark} setIsDark={setIsDark}></Footer>
        </div>
    );
}

const Header = ({isDark}) => {
    //isDark에 따라 배경색과 글자색을 변경하도록 스타일 설정정
    return(
        <Header className="header"
            style={{
                backgroundColor : isDark ? 'black' : 'lightgray',
                color : isDark ? 'white' : 'black'
            }}
            >
                <h1>Welcome 헝딜동..!!</h1>
            </Header>
    );
}

const Content = ({isDark}) => {
    
    return(
        <div className="content"
          style={{
                backgroundColor : isDark ? 'black' : 'lightgray',
                color : isDark ? 'white' : 'black'
            }}
        >
            <p>Welcome 헝딜동..!!</p>  
        </div>
    );
}

const Footer = ({isDark, setIsDark}) => {
    //다크모드를 토글 시켜주는 함수 정의
    const toggleTheme=()=> {
    //스테이트를 변경하는 세터 함수를 사용
        setIsDark(!isDark);
    }
    return(
        //isDark 값에 따라 배경색 변경
        <div className="footer"
        style={{
            backgroundColor : isDark ? 'black' : 'lightgray'
        }} 
        >
            <input type="button"  value="Dark Mode" className="button"
                onClick={toggleTheme}></input>
        </div>
    );
}
function App() {
    const [isDark, setIsDark] = useState(false);
    return (
        <div className="App">
            <page isDark={isDark} setIsDark={setIsDark}></page>
        </div>
  );
}

export default App;

