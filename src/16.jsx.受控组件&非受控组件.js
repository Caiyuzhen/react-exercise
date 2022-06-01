import "./App.css"
// import React from "react"//引入 react 包

//1.导入 createRef 函数,相当于把真实的 DOM 元素往里边放
import React,{ createRef } from "react"//引入 react 包




//🚀🚀🚀 React 处理表单的方式

//🌟方式一：受控组件
//❓What
  //Input 框状态（value 属性）被 react 组件状态控制 !

//❓HOW？
  //1.先在 state 中声明一个【React 组件自己的状态数据】
  //2.将状态数据设置【绑定】为 input 的 value
  //3.为 input 【添加 change 事件】,目的是为了拿到当前输入框的最新数据
  //4.通过事件对象的回调函数【获取到当前文本框的值】
  //5.调用 【setState 方法】，将【事件对象获取到的文本框的值】【交还给state 状态】成为最新的最新值





//🌟方式二：非受控组件
//❓What
  //通过【手动操作 DOM 】的方式拿到文本框的值

//❓HOW？
  //1.在最顶部导入 createRef 函数,相当于把真实的 DOM 元素往里边放
  //2.调用 createRef 函数，创建一个 ref 对象，存储到名为 `msgRef` 的实例属性中, 名字可以自定义
  //3.给 input 添加 【ref 属性】，值为【上一步⬆️】存储到 `msgRef` 的值
  //4.在按钮的事件处理程序中，通过 【 msgRef.current 】 即可【 拿到 input 对应的 DOM 元素 】，通过 【 this.msgRef.current.value 】 拿到的值就是【文本框的值】


//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



//🌟方式一：受控组件
class ChangeList extends React.Component {

  //1.先在 state 中声明一个【React 组件自己的状态数据】
  state = {
    message:'this is a message'
  }

  //不用看这里，我自己额外写的，聚焦的时候清空输入框
  inputFocusFn = (e) => {
    this.setState({
      //清空输入框的值
      message: ""
    })
  }


  //4.通过事件对象的回调函数【获取到当前文本框的值】
  inputChangeFn = (e) => {
    // console.log(e);//事件对象的 value 属性是 message，

    this.setState({
      // 5.调用 【setState 方法】，将【事件对象获取到的文本框的值】【交还给state 状态】成为最新的最新值
      message:e.target.value 
    })
  }


  render() {
    return (
      //2.将状态数据设置【绑定】为 input 的 value !
      //3.为 input 【添加 change 事件】,目的是为了拿到当前输入框的数据
      <input 
        type="text" 
        value={this.state.message}
        style={{color: '#3370FF',fontSize: '0.85rem',padding: '1rem',borderRadius: '1rem',width:'10rem',margin: '10rem'}}
        onFocus={this.inputFocusFn}
        onChange={this.inputChangeFn}
      />
   
    )
  }
}








//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————








//🌟方式二：非受控组件(不建议，因为会修改原生 DOM)
class ChangeList2 extends React.Component {

  //2.调用 createRef 函数，创建一个 ref 对象，存储到名为 `msgRef` 的实例属性中, 名字可以自定义
  msgRef = createRef()



  getValueFn = () => {
    //4.在按钮的事件处理程序中，通过 【 msgRef.current 】 即可【 拿到 input 对应的 DOM 元素 】，通过 【 msgRef.current.value 】 拿到的值就是【文本框的值】
      console.log(this.msgRef.current.value)

      console.log(this.msgRef.current)//打印出来就是原生 DOM

  }


  render() {
    return (
      <>
        <input
          type="text" 
          style={{color: '#3370FF',fontSize: '0.85rem',padding: '1rem',borderRadius: '1rem',width:'10rem',margin: '2rem'}}
          
          //3.给 input 添加 【ref 属性】，值为【上一步⬆️】存储到 this. 的 `msgRef` 内的值
          ref={this.msgRef}
        />
        <button 
            style={{
              background: '#3370FF',
              color: 'white',
              border:'none',
              width:'10rem',
              height:'3rem',
              borderRadius: '3rem',
            }}
            onClick={this.getValueFn}
        >点击获取输入框的值</button>
      </>
    )
  }
}




//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



//渲染类组件(根组件)
function App () {
  return (
      <div style={{
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <ChangeList/>
        <ChangeList2/>
      </div>
  )
}


//最后需要 export 一下！
export default App


