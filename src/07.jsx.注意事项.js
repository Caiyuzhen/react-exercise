//🌟 JSX 语法注意事项
//1.JSX 必须有且只有一个父元素，如果不想让第一个节点成为父节点的话，可以添加个幽灵节点 < > </>
//2.采用驼峰命名， calss -> className, for -> htmlFor
//3.JSX 支持换多行，大模板的话，最好用（）小括号包裹一下，防止 bug
//4.‘语句’不能写在花括号中，比如 if 、switch-case 、变量声明语句

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


