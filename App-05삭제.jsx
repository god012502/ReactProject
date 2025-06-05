import { useState, useEffect } from 'react';
import { firestore } from './firestoreConfig';
import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';

function App(){
    

    const [showData, setShowData] = useState([]);
    //기존의 도큐먼트를 불어와서 select태그에 설정
    useEffect(() => {
        const getCollection = async () => {
            let trArray = [];
            //members 컬렉션을 먼저 읽어온다.
            const querySnapshot = await getDocs(collection(firestore, "members"));
            //갯수만큼 반복해서 option 태그를 생성한다.
            querySnapshot.forEach((doc)=> {
            let memberInfo = doc.data();
            trArray.push(
            //value는 회원 아이디, text는 이름 설정
            <option key={doc.id} value={doc.id}>{memberInfo.name}</option>
            );
        });
        return trArray;
    }
     getCollection().then((result) => {
            console.log('result',result);
            //컬렉션 명으로 하위 도큐먼트를 읽어온다.
            setShowData(result);
        });
    },[]);
    
    //input 태그에 설정된 값을 수정할 수 있게 한 모먼트트
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    return(
        <div className="App">
            <h2>Firebase-Firestore 연동 App</h2>
            <h3>개별 조회 및 삭제하기</h3>
            <form onSubmit={async(event) => {
                event.preventDefault();
                let id = e.target.id.value;
                console.log("삭제",id);
                if(id===''){alert('사용자를 먼저 선택해주세요'); return;}
                /*
                    선택한 아이디로 도큐먼트의 참조를 얻은 후에 deleteDoc 함수를 
    
                */
                await delete(doc(firestore, "members", event.target.id.value));

                setId('');
                setPass('');
                setName('');
            }}>
                <div className="input-group" id="myForm"></div>
                    <select className="form-control" id=""></select>
                    {/*select 선택한 항목의 데이터를 불러와서 input에 설정*/}
            </form>

        </div>
            

                
        )}
    