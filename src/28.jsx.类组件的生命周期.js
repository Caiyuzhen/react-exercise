import "./App.css"
import React from 'react' 
//引入 ReactDOM， 目的是为了使用 ReactDOM 的方法



//🚀 组件的生命周期(🌟只有类组件才有生命周期,在实例化的时候才会出现生命周期)

    //🍎 WHAT?
      //【🌟 挂载阶段】
          //钩子函数顺序: 
            //1.construction       （初始化数据,只执行一次，可以用来创建 Ref、使用 bind 结局 this 指向问题等） => 
            //2.render             （渲染 UI, 每次组件执行都会触发, 注意不能在里边调用 setState() ！） => 
            //3.componentDidMount   (组件挂载完毕后才会执行，可以用来发送网络请求，或者操作 DOM)

      //【🌟 更新阶段】
          //钩子函数顺序: 
            //1.render              (渲染 UI,与挂载阶段是同一个 render)
            //2.componentDidUpdate （DOM 操作，可以获取到更新后的 DOM 内容，注意不能在里边调用 setState() ！）



      //【🌟 卸载(销毁)阶段】
          //钩子函数顺序: 
            //1.componentWillUnmount （组件卸载前执行, 一般都是用来清理定时器）




    //🍎 注意
      //construction、render 阶段不能发送 ajax 请求或者修改 DOM，否则会引发重复渲染；Commit 阶段才可以！


//——————————————————————————————————————————————————————————————————


//🍎 类组件生命周期
class App extends React.Component {

    state = {
      count: 0,
      flag: true //true,显示 Test 组件， false 不显示 Test 组件
    }


    clickCountAdd = () =>{
      this.setState({
        count: this.state.count +1,
        flag: !this.state.flag //取反，类似开关
      })
    }


    constructor() { //1.【挂载阶段】先执行
      super();
      console.log('挂载阶段-1:constructor');
    }


    componentDidMount() { //3.【挂载阶段】最后执行
      console.log('挂载阶段-3:componentDidMount'); 
      //在这个阶段发送 ajax 请求 ...
    }


    componentDidUpdate () { //4.【更新阶段】
      console.log('更新阶段-4:componentDidUpdate'); 

      const div = document.querySelector('.div');
      console.log(div); 
      div.innerHTML = '我是更新后的内容';
    }



    render() { //2.【挂载阶段】再执行
      console.log('更新/挂载阶段-2:render')
      return (
        <div>
          <div className="div">我是默认的内容</div>
          增加
          <button onClick={this.clickCountAdd}>
            {this.state.count}
          </button>

          {/* //6.用一个动作来判断什么时候执行【卸载(销毁)阶段】,如果这个函数不执行，就到卸载阶段 */}
          {this.state.flag ? <Test /> : null} 
        </div>
      )
    }
}


//————————————————————————————————————————————————————


class Test extends React.Component {

  //🌟 如果要用到的数据是组件的状态，要影响视图，才定义到 state 内
  //🌟 如果要用到的数据跟视图不相关，则不用定义到 state 内，直接定义在组件内就行了
  timer = null
  
  componentDidMount() { //7.配合着中，在组件【挂载阶段】开启定时器,然后在【卸载(销毁)阶段】进行清除
    this.timer = setInterval(() =>{
      console.log("开启定时器");
    },1000)
  }


  componentWillUnmount () {//5.【卸载(销毁)阶段】,一般都是用来清理定时器
    console.log('销毁阶段-5:componentWillUnmount');//卸载的时候才会执行

    clearInterval(this.timer); //【🌟一般在这个阶段清理定时器】在 APP 内点击后，触发开启清理定时器的函数
  }


  render() {
    return (
      <div>需要销毁的函数</div>
    );
  }
}



// //最后需要 export 一下！
export default App


