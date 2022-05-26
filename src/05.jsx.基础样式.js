//样式控制(把样式渲染到 DOM 上)
//方法一：行内样式
//方法二：类名样式的绑定


// 导入样式表（注意： improt 要放在最上面）
import './app.css';



//定义样式对象
const style = {
  color: '#4682B4',
  fontSize: '1rem',
  fontWeight: 'bold'
}



//模板逻辑,尽量不放复杂的逻辑
function App() {
  return (
    <div className="App">
      {/* 👇 方法一：注意，这里有两个花括号！外层是为了让里边被识别为对象 */}

        {/* 🌟 不带变量的写法 */}
        <span style={{color: '#3370FF',fontSize: '1.5rem'}}>这是一个带有样式的 Span 标签</span> 

        <br />

        {/* 🌟 带变量的写法（建议） */}
        <span style={style}>我是另一个带样式的 SPAN 标签</span> 


        <br />

      {/* 👇 方法, 注意，不能写为 class，要写为className */}
        <span className='active'>我是一个类名样式 SPAN 标签</span>

    </div>
  )
}

//最后需要 export 一下！
export default App;


