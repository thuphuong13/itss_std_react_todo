/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( {handleFilter} ) {
  return (
   <div className="panel-tabs">
      <a onClick = {() => handleFilter('all')}>全て</a>
      <a onClick = {() => handleFilter('doing')}>未完了</a>
      <a onClick = {() => handleFilter('done')}>完了済み</a>
    </div>
  );
}

export default Filter