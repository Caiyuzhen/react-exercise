import "./App.css"
import React, { useState } from 'react' 

//🌟🌟🌟创建一个【列表组件】，支持删除
//思路，先完成基础的渲染，再抽离成组件
//用父传子，把数据传给子；再用子传父，删除父那边的数据

//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



//🍎子组件：渲染 List 列表
function ListItem ({ item, deleteItem }){ //解构 item, deleteItem
  return (
    //4.把渲染模板抽离成组件【挪进来】，再【接收父组件的数据】并进行【解构数据】
    <>
      <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>{item.info}</p>
      <button
        onClick={() => deleteItem(item.id) } //🔥把要删除的那条列表的 id  回传给父函数！
      >删除</button>
      <br />
      <br />
      <hr />
    </>
  )
}






//🍎父组件：提供数据
class Data extends React.Component {
  state = {
    list:[
      { id:1, name: '🍔汉堡包', price:18.9, info:'来自奥地利的牛肉堡'},
      { id:2, name: '🍗烤鸡腿', price:6.6, info:'来新奥尔良的鸡腿堡'},
      { id:3, name: '🍥鸡肉卷', price:12.2, info:'来自纽约的鸡肉卷'},
    ]
  }

  //一个删除父组件数据的函数
  deleteItem = (id) =>{
    this.setState({ //用 filter 方法屏蔽掉符合这个 id 的数据
      list: this.state.list.filter(item => item.id !== id)
    })
  }



  render() {
    return (
      // 👇👇👇需要渲染的列表模板(用 map 方法来遍历)
      <div>
        {this.state.list.map(item =>(
          //3.最后把下面这部分抽离成组件，然后放到上边的 function 中去， 再把【List】的【数据】遍历成 【item】，传给子组件
          <ListItem 
            key={item.id} //把 id 传给子组件
            item={item} //把列表传给子组件
            deleteItem={this.deleteItem} //把删除方法传给子组件
          />

//————————————————————————————————————————————————————

          //2.然后替换模板列表里边的数据👇
            // <>
            //   <h3>{item.name}</h3>
              //   <p>{item.price}</p>
              //   <p>{item.info}</p>
            //   <button>删除</button>
            //   <br />
            //   <br />
            //   <hr />
            // </>

//————————————————————————————————————————————————————

            //1.先写一个模板列表👇
            // <>
            //   <h3>标题</h3>
              //   <p>价格</p>
              //   <p>说明</p>
            //   <button>删除</button>
            //   <br />
            //   <br />
            //   <hr />
            // </>
          ))}
      </div>
    )
  }

};

// //——————————————————————


// //最后需要 export 一下！
export default Data


