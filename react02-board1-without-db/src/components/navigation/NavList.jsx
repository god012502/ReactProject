import React from "react";

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
  export default NavList;