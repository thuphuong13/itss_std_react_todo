import React, { useState } from 'react';
import CustomFirebaseStore from '../hooks/CustomFirebaseStore';
/* カスタムフック */
import useStorage from '../hooks/storage';
/* ライブラリ */
import { getKey } from '../lib/util';
import Filter from './Filter';
import Input from './Input';
/*
【Todoのデータ構成】
・key：Todoを特定するID（String）
・text：Todoの内容（String）
・done：完了状態（Boolean true:完了済み,, false:未完了）
*/
/* コンポーネント */
import TodoItem from './TodoItem';

function Todo() {
  const [items, putItems, clearItems] = useStorage();
  const [value, addItems, updateItems] = CustomFirebaseStore();
  console.log(`value:`, value);

  const handleCheck = async (checked) => {
    await updateItems(checked);
  };

  const handleAdd = (text) => {
    addItems({ id: getKey(), text, done: false });
  };

  const [filter, setFilter] = useState('all');

  const renderItems = value?.filter((item) => {
    if (filter === 'all') return item;
    if (filter === 'doing') return !item.done;
    if (filter === 'done') return item.done;
  });
  // loc items
  const handleFilter = (text) => {
    setFilter(text);
  };

  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      <Input handleAdd={handleAdd} />
      <Filter filter={filter} handleFilter={handleFilter} />
      {renderItems?.map((item) => (
        <TodoItem key={item.id} item={item} onCheck={handleCheck} />
      ))}
      <div className="panel-block">{renderItems?.length} items</div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
</button>
      </div>
    </div>
  );
}

export default Todo;