//스테이트 사용을 위한 훅 임포트
import {useState} from 'react';
//페이지가 없을 때 임시로 사용하기 위한 컴포넌트트
function ReadyComp(props){
    return(
      <div>
        <a href="/" >Home 바로가기기</a>
      </div>
    );
  }

//매개변수 props를 통해 전달된 값(타이틀)을 출력
//헤더 컴포넌트는 모든 페이지에서 공통으로 사용된다.
function Header(props){
  console.log('props',props.title);
  return(
    <header>
      <h2>{props.title}</h2>  
    </header>

  )
}
  //목록에서 사용할 네비게이션
  function NavList(props){
    return(
      //엘리먼트 사이를 띄어쓰기 할 때는 &nbsp;를 사용하면 된다.
      <nav>
        <a href="/" onClick={function(event){
          event.preventDefault();
          props.onChangeMode();
        }}>글쓰기</a>
      </nav>
    )
  }

  
  function NavView(props){
    return(
      <nav>
        <a href="/" onClick={function(event){
          event.preventDefault();
          props.onChangeMode();
        }}>목록</a>&nbsp;

        <a href="/" onClick={function(event){
          event.preventDefault();
          props.onChangeMode();
        }}>수정</a>&nbsp;

        <a href="/" onClick={function(event){
          event.preventDefault();
          props.onChangeMode();
        }}>삭제</a>&nbsp;
      </nav>
    )
  }

  function NevWrite(props){
    return(
      <nav>
        <a href="/" onClick={function(event){
          event.preventDefault();
          props.onChangeMode();
        }}>목록</a>
      </nav>
    )
  }

  
  //목록
  function ArticleList(props){
    const lists = [];
    for(let i=0; i<props.boardData.length; i++){
      let row = props.boardData[i];
      lists.push(
        <tr key={row.no}>
          <td class name = "cen">{row.no}</td>
          <td><a hrdf={'./read/'+row.no} onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode(row.no);
          }}>{row.title}</a></td>
            <td class name = "cen">{row.writer}</td>
            <td class name = "cen">{row.date}</td>
        </tr>
      );
    }
    return(
      <article>
        <table id="boardTable">
          <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {lists}
          </tbody>
        </table>
      </article>
    )
  }

  function ArticleView(props){
    return(
      <article>
        <table id="boardTable">
          <colgroup>
            <col width="20%" /><col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>작성자</th>
              <th>성유겸</th>
            </tr>
            <tr>
              <th>제목</th>
              <th>오늘은 React공부 하는 날</th>
            </tr>
            <tr>
              <th>날짜</th>
              <th>2023-05-05</th>
            </tr>
            <tr>
              <th>내용</th>
              <td>열심히 해봅시당<br />열공합시당</td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }

  function ArticleWrite(props){
    return(
      
    )
  }

  //열람


  //작성


  /*
      화면 전환을 위한 스테이트 생성
      변수명은 mode, 초기값은 list, 변경을 위한 함수는 setMode()로 정의한다.
  */

  //컴포넌트와 타이틀을 저장할 변수 생성

  //mode의 값에 따라 각 화면을 전환하기 위해 분기한다.

export default App;
