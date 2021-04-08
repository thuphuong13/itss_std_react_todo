/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( {handleFilter, filter} ) {
  return (
   <div className="panel-tabs">
      <a 
      style = {{color: `${filter == 'all'? 'black' : ''}`}}
      onClick = {() => handleFilter('all') }>全て</a>
      <a 
       style = {{color: `${filter == 'doing'? 'black' : ''}`}}
      onClick = {() => handleFilter('doing')}>未完了</a>
      <a 
       style = {{color: `${filter == 'done'? 'black' : ''}`}}
      onClick = {() => handleFilter('done')}>完了済み</a>
    </div>
  );
}

export default Filter