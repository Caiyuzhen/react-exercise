// import logo from './logo.svg';
// import './App.css';



//ð æä»ä¹åºç¡çè¡¨è¾¾å¼ï¼
//åºç¡è¡¨è¾¾å¼ä¸ï¼å¸¸è§çåé
const name = 'é¥­å¢'


//åºç¡è¡¨è¾¾å¼äºï¼å¸¸è§æ¹æ³
const getAge = () =>{
  return 18 + 'å²'
}

//åºç¡è¡¨è¾¾å¼ä¸ï¼ç¨äºä¸åè¿ç®ç¬¦
const flag = true



//ð å¦ä½æ¸²æåè¡¨ï¼
//ç¨ map æ¹æ³æ¥éå,song å¯ä»¥èªå®ä¹
//éååè¡¨æ¶éè¦ä¸ä¸ªç±»åä¸º number/string çä¸å¯éå¤ç keyï¼å¯ä»¥æå diff æ§è½
//{songs.map(song=><li key={song.id}>{song.name}</li>)} 
//ðð éåè°å°±ç»è°ç»å®ä¸ä¸ª keyï¼ï¼

const songs = [
  { id: 1, name: 'æ­æ²A'},
  { id: 2, name: 'æ­æ²B'},
  { id: 3, name: 'æ­æ²C'},
]




function App() {
  return (
    <div className="App">

      {/* ä¸é¢é½æ¯å¨æ¸²æåéæèå½æ°çè¿åå¼ */}
      { name }
      { getAge() }
      { flag ? 'çæ£':'å¾è' }
      
      <ul>
        {/* ðæ¿å°æ­æ²åè¡¨, map(x=>x.y) ç¨ map æ¹æ³æ¥éå, éååè¡¨æ¶éè¦ä¸ä¸ªç±»åä¸º number/string çä¸å¯éå¤ç key, song å¯ä»¥èªå®ä¹ï¼=> ç®­å¤´åé¢ä¸ºè¦æ¸²æåºæ¥çèç¹*/}
        {songs.map(song=><li key={song.id}>{song.name}</li>)} 
      </ul>

      

      

    </div>
  );
}

export default App;
