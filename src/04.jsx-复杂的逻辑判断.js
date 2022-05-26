//有三个状态 type 1 2 3
//type 1 -> h1
//type 3 -> h2
//type 3 -> h3



//模板逻辑尽量精简，尽量保持精简,把判断收敛为一个函数
const getHTag = (type) => {
  if(type === 1){
    return <h1>我是 H1 标签</h1>
  }
  if(type === 2){
    return <h2>我是 H2 标签</h2>
  }
  if(type === 3){
    return <h3>我是 H3 标签</h3>
  }
}

//模板逻辑,尽量不放复杂的逻辑
function App() {
  return (
    <div className="App">
      {/* 调用上面的分支函数 */}
      { getHTag(1) }
      { getHTag(2) }
      { getHTag(3) }
    </div>
  )
}

//最后需要 export 一下！
export default App;


