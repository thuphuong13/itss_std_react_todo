import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {handleAdd} ) {
    const [inputText, setInputTex] = useState('');

  return (
    <div className="panel-block">
      <input 
        class="input" 
        type="text"
        placeholder = "Todoを入力してください"
        onKeyDown ={(e)=> e.key === "Enter" && handleAdd(inputText)} 
        onChange = {(e)=>setInputTex(e.target.value)}
      />
    </div>
  );
}

export default Input;
