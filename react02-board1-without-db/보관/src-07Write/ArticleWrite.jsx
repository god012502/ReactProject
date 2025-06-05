import React from "react";

function ArticleView(props){
    //선택한 객체를 콘솔에서 확인
    return(
        <article>
            <from onSubmit={(event)=>{
                //제출되는 것을 차단
                event.preventDefault();
                //이벤트 객체의 target속성으로 form하위 태그에 접근하여 value를 읽어온다.
                let title = event.target.title.value;
                let wirter = event.target.title.value;
                let contents = event.target.title.value;

                props.writerAction(title,writer,contents);
            }}>
            <table id="boardTable">
                <colgroup>
                    <col width="20%" /><col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>작성자</th>
                        <td>{props.selectRow.writer}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{props.selectRow.title}</td>
                    </tr>
                    <tr>
                        <th>날짜</th>
                        <td>{props.selectRow.date}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{props.selectRow.contents}</td>
                    </tr>
                </tbody>
            </table>
            </from>
        </article>
    );
}

export default ArticleView;