// import logo from './logo.svg';
// import './App.css';



//🌟 有什么基础的表达式？
//基础表达式一：常规的变量
const name = '饭团'

//基础表达式二：常规方法
const getAge = () =>{
  return 18 + '岁'
}

//基础表达式三：用于三元运算符
const flag = true



//🌟 如何渲染列表？
//用 map 方法来遍历,song 可以自定义
//遍历列表时需要一个类型为 number/string 的不可重复的 key，可以提升 diff 性能
//{songs.map(song=><li key={song.id}>{song.name}</li>)} 

const songs = [
  { id: 1, name: '歌曲A'},
  { id: 2, name: '歌曲B'},
  { id: 3, name: '歌曲C'},
]




function App() {
  return (
    <div className="App">

      {/* 下面都是在渲染变量或者函数的返回值 */}
      { name }
      { getAge() }
      { flag ? '真棒':'很菜' }
      
      <ul>
        {/* 👇拿到歌曲列表, map(x=>x.y) 用 map 方法来遍历, 遍历列表时需要一个类型为 number/string 的不可重复的 key, song 可以自定义，=> 箭头后面为要渲染出来的节点*/}
        {songs.map(song=><li key={song.id}>{song.name}</li>)} 
      </ul>

      

      

    </div>
  );
}

export default App;
