import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

//모듈화 처리한 컴포넌트 임포트 
import List from './components/board/List';
import Write from './components/board/Write';
import View from './components/board/View';
import NotFound from './components/common/NotFound';

function App() {
  const boardData = [
    {no:1, title:'오늘은 React공부하는날', writer:'낙짜쌤', date:'2023-01-01', contents:'React를 뽀개봅시당'},
    {no:2, title:'어제는 Javascript공부해씸', writer:'유겸이', date:'2023-03-03', contents:'Javascript는 할게 너무 많아요'},
    {no:3, title:'내일은 Project해야징', writer:'개똥이', date:'2023-05-05', contents:'Project는 뭘 만들어볼까?'},
  ];

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List boardData={boardData}></List>} />
        <Route path='/list' element={<List boardData={boardData}></List>} />
        <Route path='/view'>
          <Route path=':no' element={<View boardData={boardData} />} />
        </Route>
        <Route path='/write' element={<Write></Write>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;

