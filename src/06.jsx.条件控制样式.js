//动态的控制样式（控制 active 类名)

// 导入样式表（注意： improt 要放在最上面）
import './app.css';



//定义样式对象
const style = {
  color: '#4682B4',
  fontSize: '1rem',
  fontWeight: 'bold'
}


const activeFlag = true

//模板逻辑,尽量不放复杂的逻辑
function App() {
  return (
    <div className="App">

      <br />

        <span className={
          // 🍎 动态判断要出现哪个类名！！
          activeFlag ? 'active' : 'unActive'
        }>我是一个类名样式 SPAN 标签</span>

    </div>
  )
}

//最后需要 export 一下！
export default App;


