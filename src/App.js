//JSX 必须有且只有一个父元素
//或者通过幽灵节点 < > </>

const activeFlag = true

//模板逻辑,尽量不放复杂的逻辑
function App() {
  return (
    < >
      <div>app1</div>
      <div>app2</div>
    </>
  )
}

//最后需要 export 一下！
export default App;


