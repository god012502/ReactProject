//파이어스토어 객체 임포트
import './App.css';
//새로운 도큐먼트(문서)를 입력하거나 읽을 때 사용하는 함수 임포트
import { firestore } from './firestoreConfig';
import {doc, setDoc, getDoc} from "firebase/Firestore"

function App()  {
    //파이어스토어 연결 확인
    console.log("firestore",firestore);
}

//도큐먼트 추가 함수
const addMessage = async () => {
    /*
        컬렉션 : 테이블과 유사함. Korea로 작성
        도큐먼트 : 레코드와 유사함. Seoul로 작성
        하위 데이터는 JS 객체 형식으로 작성하면 된다.
        테이블처럼 정형화된 것이 아니므로 원하는데로 객체에 정보를 추가할 수 있다.

        문서추가를 위해 setDoc(도큐먼트정보, 추가할데이터)와 같은 형식으로 실행
    */
    await setDoc(doc(firestore, "Korea", "Seoul"), {
        gu : "종로구",
        dong : "관철동",
        hotplace : "더조은IT",
        time : "10:21",
    });
    console.log("입력성공");
}

//도큐먼트 읽기
const getMessage = async () => {
    //입력된 컬렉션과 도큐먼트를 통해 문서의 참조를 읽어온다.
    const docRef = doc(firestore, "Korea", "Seoul");
    //참조를 통해 도큐먼트를 얻어온다
    const docSnap = await getDoc(docRef);
    
    if(docSnap.exists()){
        if(docSnap.exists()){
            console.log("Document data: ", docSnap.data());
        }
        else{
            console.log("No such document!");
        }
    }
    return(
        <div className="App">
            <h2></h2>
        </div>
    )
}