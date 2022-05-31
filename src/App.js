import "./App.css"
import React from "react"//引入 react 包


//⚡️⚡️⚡️ 组件通信(让组件内的数据 state 进行可以进行流转)
  //🍎父子关系
      //最重要的
          //HOW?
            // 1.父组件提供原始数据 【state】
            // 2.给子组件标签 `添加属性` 值为 【state】 中的数据 -> msg={this.state.message}
            // 3.子组件中通过 【props】 来接受父组件传过来的数据
                    //3-1.类组件使用 【this.props】 来获取 【props】对象
                    //3-2.函数s式组件直接【通过参数】来获取 【props】对象
          //WHAT?
            // 1.props 内的数据都是只读的，单向数据流，没法修改！🔥
            // 2.props 支持传递任意数据，可以传递【数字】、【字符串】、【对象】、【数组】、【函数】、【布尔值】、【JSX（类似模板、插槽）】


  //🍊兄弟关系
      //通过自定义事件模式产生技术方法 eventBus / 通过共同的父组件通信

  //🍉其他关系
      //mobx / redux / 基于 hook 的方案


//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


//🍎父子关系(在父组件的 render 内放子组件并进行绑定！)

//🍎类组件 Father
class Father extends React.Component {
  state = {
    message: '我是父组件的 state 数据',
    list:[1,2,3],
    userInfo:{
      name:'cp',
      age:18
    }
  }

  //定义父组件的函数
  getMsg = () => {
    console.log('我是父组件的函数')
  }

  render() {
    return(
      <div>
        {/* 🔥在子组件上【🌟绑定数据🌟】，属性名可以自定义，保持语意化 */}
          <SonA 
            msg={this.state.message}
            list={this.state.list}
            userInfo={this.state.userInfo}
            getMsg={this.getMsg}
            child={<span>我是一个模板</span>} //模板元素！！可以理解为父元素的一个插槽!
          />
          <br />
          <SonB 
            msg={this.state.message}
            list={this.state.list}
            userInfo={this.state.userInfo}
            getMsg={this.getMsg}
            child={<span>我是一个模板</span>} //模板元素！！可以理解为父元素的一个插槽!
          />
      </div>
    )
  }
};



//🍎函数式 Son
function SonA(props){ //props 是一个对象，存着父组件传过来的数据
  return (
    //👇 通过 【props】 来接受父组件传过来的数据，其中列表为【遍历 list】 这个数组然后【放到】<p></p> 内，最后价格【key】
    <div>
        我是 SonA 子组件, 
        { props.msg },
        { props.list.map(item=><p key={item}> {item} </p>) } , 
        { props.userInfo.name},
        <button onClick=
          { props.getMsg }
        >执行父组件中的函数</button>
        { props.child }
    </div>
  )
};



//🍎类组件 Son
class SonB extends React.Component{
  render(props){
    return (
      //👇 通过 【props】 来接受父组件传过来的数据
      <div>
        我是 SonB 类组件 
        { this.props.msg }, 
        { this.props.list.map(item=><p key={item}> {item} </p>) },
        { this.props.userInfo.name},
        <button onClick=
          { this.props.getMsg }
        >执行父组件中的函数</button>
      </div>
    )
  }
};





//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————





//最后需要 export 一下！
export default Father


