import React from "react";
import {Link} from 'react-router-dom';

function List(props){
    return(<>
    <header>
        <h2>게시판-목록</h2>
    </header>
    <nav>
        <Link to ="/write">글쓰기</Link>
    </nav>
    </>)
}