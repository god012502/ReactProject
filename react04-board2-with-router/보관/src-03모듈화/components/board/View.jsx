import React from 'react';
import { Link, useParams } from 'react-router-dom';


function View(props) {
  /*
    useParams 훅
      컴포넌트를 라우팅 처리할 때 중첩된 구조내에서 :no와 같이 사용된 파라미터의 값을 읽어올 수 있는 훅
      별도의 인수없이 선언한다.
  */
  var params = useParams();
  console.log("파라미터",params.no);
/*
  데이터 배열의 크기만큼 반복하여 조건에 맞는 객체를 찾은 후 반환한다.
  빈 객체를 초기값으로 사용했으므로, 배열의 크기인 N만큼 반복하게 된다.
  prev의 첫번 째 값은 빈 객체이다.
  curr의 첫 번째 값은 데이터 배열의 0번 요소
*/
  let vi= props.boardData.reduce((prev,curr)=>{
    if(curr.no===Number(params.no)){
      prev = curr;
    }
    return prev;
}, {});

  return (<>
    <header>
      <h2>게시판-읽기</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>&nbsp; 
      <Link to="/edit">수정</Link>&nbsp; 
      <Link to="/delete">삭제</Link>
    </nav>
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="20%" /><col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <th>작성자</th>
            <td>성유겸</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>오늘은 React공부하는날</td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>2023-05-05</td>
          </tr>
          <tr>
            <th>내용</th>
            <td>열심히 해봅시당<br/>열공 합시당</td>
          </tr>
        </tbody>
      </table> 
    </article>
  </>);
}

export default View;