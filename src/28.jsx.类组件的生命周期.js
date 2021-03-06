import "./App.css"
import React from 'react' 




//ð ç»ä»¶ççå½å¨æ(ðåªæç±»ç»ä»¶ææçå½å¨æ,å¨å®ä¾åçæ¶åæä¼åºç°çå½å¨æ)

    //ð WHAT?
      //ãð æè½½é¶æ®µã
          //é©å­å½æ°é¡ºåº: 
            //1.construction       ï¼åå§åæ°æ®,åªæ§è¡ä¸æ¬¡ï¼å¯ä»¥ç¨æ¥åå»º Refãä½¿ç¨ bind ç»å± this æåé®é¢ç­ï¼ => 
            //2.render             ï¼æ¸²æ UI, æ¯æ¬¡ç»ä»¶æ§è¡é½ä¼è§¦å, æ³¨æä¸è½å¨éè¾¹è°ç¨ setState() ï¼ï¼ => 
            //3.componentDidMount   (ç»ä»¶æè½½å®æ¯åæä¼æ§è¡ï¼å¯ä»¥ç¨æ¥åéç½ç»è¯·æ±ï¼æèæä½ DOM)

      //ãð æ´æ°é¶æ®µã
          //é©å­å½æ°é¡ºåº: 
            //1.render              (æ¸²æ UI,ä¸æè½½é¶æ®µæ¯åä¸ä¸ª render)
            //2.componentDidUpdate ï¼DOM æä½ï¼å¯ä»¥è·åå°æ´æ°åç DOM åå®¹ï¼æ³¨æä¸è½å¨éè¾¹è°ç¨ setState() ï¼ï¼



      //ãð å¸è½½(éæ¯)é¶æ®µã
          //é©å­å½æ°é¡ºåº: 
            //1.componentWillUnmount ï¼ç»ä»¶å¸è½½åæ§è¡, ä¸è¬é½æ¯ç¨æ¥æ¸çå®æ¶å¨ï¼




    //ð æ³¨æ
      //constructionãrender é¶æ®µä¸è½åé ajax è¯·æ±æèä¿®æ¹ DOMï¼å¦åä¼å¼åéå¤æ¸²æï¼Commit é¶æ®µæå¯ä»¥ï¼


//ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ


//ð ç±»ç»ä»¶çå½å¨æ
class App extends React.Component {

    state = {
      count: 0,
      flag: true //true,æ¾ç¤º Test ç»ä»¶ï¼ false ä¸æ¾ç¤º Test ç»ä»¶
    }


    clickCountAdd = () =>{
      this.setState({
        count: this.state.count +1,
        flag: !this.state.flag //ååï¼ç±»ä¼¼å¼å³
      })
    }


    constructor() { //1.ãæè½½é¶æ®µãåæ§è¡
      super();
      console.log('æè½½é¶æ®µ-1:constructor');
    }


    componentDidMount() { //3.ãæè½½é¶æ®µãæåæ§è¡
      console.log('æè½½é¶æ®µ-3:componentDidMount'); 
      //å¨è¿ä¸ªé¶æ®µåé ajax è¯·æ± ...
    }


    componentDidUpdate () { //4.ãæ´æ°é¶æ®µã
      console.log('æ´æ°é¶æ®µ-4:componentDidUpdate'); 

      const div = document.querySelector('.div');
      console.log(div); 
      div.innerHTML = 'ææ¯æ´æ°åçåå®¹';
    }



    render() { //2.ãæè½½é¶æ®µãåæ§è¡
      console.log('æ´æ°/æè½½é¶æ®µ-2:render')
      return (
        <div>
          <div className="div">ææ¯é»è®¤çåå®¹</div>
          å¢å 
          <button onClick={this.clickCountAdd}>
            {this.state.count}
          </button>

          {/* //6.ç¨ä¸ä¸ªå¨ä½æ¥å¤æ­ä»ä¹æ¶åæ§è¡ãå¸è½½(éæ¯)é¶æ®µã,å¦æè¿ä¸ªå½æ°ä¸æ§è¡ï¼å°±å°å¸è½½é¶æ®µ */}
          {this.state.flag ? <Test /> : null} 
        </div>
      )
    }
}


//ââââââââââââââââââââââââââââââââââââââââââââââââââââ


class Test extends React.Component {

  //ð å¦æè¦ç¨å°çæ°æ®æ¯ç»ä»¶çç¶æï¼è¦å½±åè§å¾ï¼æå®ä¹å° state å
  //ð å¦æè¦ç¨å°çæ°æ®è·è§å¾ä¸ç¸å³ï¼åä¸ç¨å®ä¹å° state åï¼ç´æ¥å®ä¹å¨ç»ä»¶åå°±è¡äº
  timer = null
  
  componentDidMount() { //7.éåçä¸­ï¼å¨ç»ä»¶ãæè½½é¶æ®µãå¼å¯å®æ¶å¨,ç¶åå¨ãå¸è½½(éæ¯)é¶æ®µãè¿è¡æ¸é¤
    this.timer = setInterval(() =>{
      console.log("å¼å¯å®æ¶å¨");
    },1000)
  }


  componentWillUnmount () {//5.ãå¸è½½(éæ¯)é¶æ®µã,ä¸è¬é½æ¯ç¨æ¥æ¸çå®æ¶å¨
    console.log('éæ¯é¶æ®µ-5:componentWillUnmount');//å¸è½½çæ¶åæä¼æ§è¡

    clearInterval(this.timer); //ãðä¸è¬å¨è¿ä¸ªé¶æ®µæ¸çå®æ¶å¨ãå¨ APP åç¹å»åï¼è§¦åå¼å¯æ¸çå®æ¶å¨çå½æ°
  }


  render() {
    return (
      <div>éè¦éæ¯çå½æ°</div>
    );
  }
}



// //æåéè¦ export ä¸ä¸ï¼
export default App


