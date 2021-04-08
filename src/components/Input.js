import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {handleAdd} ) {
    const [inputText, setInputTex] = useState('');
    
    const handleChange = e => setInputTex(e.target.value);
    
    const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleAdd(inputText);
      setInputTex('');
    }
  };
  
  return (
    <div className="panel-block">
      <input 
        class="input" 
        type="text"
        placeholder = "Todoを入力してください"
       value={inputText}
        onChange = {handleChange}
        onKeyDown ={handleKeyDown } 
      />
    </div>
  );
}

export default Input;
