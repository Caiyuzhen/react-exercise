import "./App.css"
import React from "react"//引入 react 包


//React 的状态不可变(🌟只能基于当前值去创建新的值，然后覆盖回去)
//👇错误的写法
// eslint-disable-next-line no-lone-blocks
{/* < >

state = {
  count : 0,
  list: [1,2,3],
  person: {
     name:'jack',
     age:18
  }
}

直接修改简单类型Number (❌错误)
this.state.count++
++this.state.count
this.state.count += 1
this.state.count = 1

this.setState({ count: this.state.count +1 })(✅正确)


直接修改数组 (❌错误)
this.state.list.push(123)
this.state.list.spice(1,1)

this.setState({ list: [...this.state.list],4 })(✅正确)


// 直接修改对象 (❌错误)
this.state.person.name = 'rose'

this.setState({
  person:{
    ...this.state.person (✅正确)
  }
})

< / > */}

class Test extends React.Component {
  state = {
    count : 4,
    list: [1,2,3],
    person: {
       name:'jack',
       age:18
    }
  }

  //🌟🌟修改数据
  clickChange = () => {
    //二、思路，写一个新的数组

    //计数器 +1
    this.setState({ 
      count: this.state.count + 1,
    })

    //给数组内[增加]数字
    this.setState({
        list: [...this.state.list,this.state.count] //后面的那个 this.state.count 为要增加的数字！
    })

    //给数组内[删除]数字
    this.setState({
        list: this.state.list.filter(item => item !== 2) //过滤出除了 2 之外的数字来组成新的数组
    })

    //修改 person 数据
    this.setState({
      person: { //注意！！
        ...this.state.person,
        name:'Jimmy'
      }
    })
  }


  render() {
      return(
        <>
          {/* 一、先遍历数组,然后渲染到列表中, 记得加 key ！🌟 循环谁就给谁加！！*/}
          <ul>
            {this.state.list.map((item) => <li  key= {item}> {item} </li> )}
          </ul>

        <div>
          {this.state.person.name}
        </div>

          <div>
            {this.state.count} <button onClick={this.clickChange}> 点击增加 + </button>
          </div>
        </>
      )
  }
}


//渲染类组件(根组件)
function App () {
  return (
      <div>
        <Test/>
      </div>

  )
}


//最后需要 export 一下！
export default App


