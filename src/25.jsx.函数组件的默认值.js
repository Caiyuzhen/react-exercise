import "./App.css"
import React from 'react' 


//ðãå½æ°ç»ä»¶ãè·ãç±»ç»ä»¶ãç Props é»è®¤å¼


//ð å½æ°ç»ä»¶çé»è®¤å¼
  //ð æ¹æ³ä¸ï¼ Test.defaultPropsï¼ä¼æ¹å° props (ä¸æ¨èè¿ä¹å)
  //ð æ¹æ³äºï¼{pageSize=10} //æ¨èåæ³,å½æ°åæ°é»è®¤å¼ï¼ä¸ä¼æ¹å° props

function Test ({pageSize=10}) {
  return (
    <div>
      è¿æ¯ä¸ä¸ªå½æ°ç»ä»¶
      {/* æ¹æ³äºð éè¦è°ç¨æçå¾å° */}
      {pageSize}
    </div>
  )
}


// //æ¹æ³ä¸ï¼è®¾ç½®é»è®¤å¼
// Test.defaultProps = {
//   pageSize: 10 //ð¥ð¥å¦æä¸ä¼  pageSize ï¼åé»è®¤å¼ä¸º 10
// }

class App extends React.Component {
  render () {
    return (
      <div>
        <Test 
            pageSize = {20}
        />
      </div>
    )
  }
}



// //æåéè¦ export ä¸ä¸ï¼
export default App


