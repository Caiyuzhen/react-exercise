import "./App.css"
import React from 'react' 

//🚀

//🍎子组件：渲染列表结构
function ListItem( {children} ){


  return (
    <>

    </>
  )
}



//🍎父组件：提供数据
class Data extends React.Component {

  render() {
    return (

      <div>
        <ListItem />
      </div>
    )
  }

};

// //——————————————————————


// //最后需要 export 一下！
export default Data


