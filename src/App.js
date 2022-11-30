import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);      //value는 counter, setCounter는 함수
  const [keyword, setKeyword] = useState('');   //value는 keyword, setKeyword는 함수
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value); //2. onChange함수가 작동하면  event를 발생시킨 input에서 value를 받아서 'keyword' state에 넣어줌(setKeyword)
  
  ///rerender될때마다 계속 호출됨
  console.log("I run all the time.")
  ///첫 번째 render때만 호출되고 그 다음 reder때부터는 호출되지 않음
  useEffect(() => {
     console.log("I run only once.");
  }, []);
  ///keyword가 변화할 때만 코드를 실행하고 싶어 & 체크 조건 추가
  useEffect(() => {
    if (keyword ! == "" && keyword.length > 5) 
    console.log("I run when keyword changes.");
  }. [keyword]);  
  ///counter가 변화할 때만 코드를 실행하고 싶어 
  useEffect(() => {
    if (keyword ! == "" ) 
    console.log("I run when counter changes.");
  }. [keyword]);  
  ///keyword & counter가 변화할 때만 코드를 실행하고 싶어 
  useEffect(() => {
    if (keyword ! == "" ) 
    console.log("I run when keyword & counter changes.");
  }. [keyword, counter]);  
  
  return (
    <div>
      <input
        value={keyword} //3.그리고 그 keyword를 가져와서 input의  value로 사용하면 우리가 원할 떄 <input> 을 조작할 수 있음
        onChange={onChange} //1. input을 만들고 event listener 연결
        type='text'
        placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
