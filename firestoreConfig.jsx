//파이어 베이스 서비스에 연결하기 위한 임포트
import { initializeApp } from "firebase/app";
//파이어스토어 데이터베이스 사용을 위한 임포트
import { getFirestore } from "firebase/Firestore";

//파이어베이스 콘솔에서 받급받은 API정보(SDK정보)
const firebaseConfig = {
  apiKey: "AIzaSyAxAqRwZvV2pE4lKclu0Rexv55zB8dvhOE",
  authDomain: "myreact-2a3e2.firebaseapp.com",
  projectId: "myreact-2a3e2",
  storageBucket: "myreact-2a3e2.firebasestorage.app",
  messagingSenderId: "878803113660",
  appId: "1:878803113660:web:0ffacf1076af70067622b9",
  measurementId: "G-3XM80937B5"
};

//firebase에 연결 후 앱 초기화
const app = initializeApp(firebaseConfig);
//firestore 사용을 위한 객체 생성
const Firestore = getFirestore(app);
//익스포트 (내보내기기)
export {firestore};
