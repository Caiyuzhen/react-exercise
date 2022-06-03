import "./App.css"
import React from 'react' 

//🚀组件的 Children 属性(高阶组件)
    //🔥What?
      //当组件标签【内部写了东西后】，就会【自动生成】一个 children 属性
    
    //🔥What it's 可以是什么？
      //普通文本
      //普通标签元素
      //JSX 模板
      //函数

    //🔥How？如何使用？
      //在子组件内【 解构赋值 children 】



//————————————————————————————————————————————————————————————————————————



//🍎子组件：渲染列表结构
function ListItem( {children} ){

  // children()   //执行 children 的函数

  return (
    <>
    <h3>小标题</h3>    
    <p>
      啦啦啦,
      {/* 执行 children 内的一些元素，比如 div */}
      {/* {children} */} 
    </p>
    {/* <div>{children}</div>  */}

    {/* 如果 children 是一组元素的话，可以通过遍历来取得里边的元素 */}
    {children.map(child => child)}
    </>
  )
}



//🍎父组件：提供数据
class Data extends React.Component {

  render() {
    return (

      <div>
            <ListItem>

              {/* 这是 children 属性,普通文本 */}


              <div>这是 children 属性，普通标签元素1</div>
              <div>这是 children 属性，普通标签元素2</div>


              {/* { ()=>console.log(这是 children 属性, 一个函数) } */}


              {/* {
                <div>
                  <p>{'这是 children 属性, 一个 JSX 内容(也可以写表达式或内容）'}</p>
                </div>
              } */}


            </ListItem>
      </div>
    )
  }

};

// //——————————————————————


// //最后需要 export 一下！
export default Data


