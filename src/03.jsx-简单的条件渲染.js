//条件渲染 - 技术方法：
//方案一：三元表达式
//方案二：逻辑 &&(与) 运算 , 又成短路运算



//三元表达式的写法
const flag = true

function App() {
  return (
    <div className="App">
    
      { flag ? (
          <div><span> 渲染出一个 span 标签</span></div>
          ) : null}

      { true &&  //🔥 短路运算
        <span> 渲染出一个 span 标签</span>
      }
      
    </div>
  )
}

//最后需要 export 一下！
export default App;


