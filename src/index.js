//React： 框架的核心包
//ReactDom：专门做渲染相关的包
import React from 'react';
import ReactDOM from 'react-dom/client';

//应用的全局样式文件
import './index.css';

//引入【🔥🔥不同地方的 js 模块】的【根组件】，一切组件的开始, 从这里开始渲染
import App from './App';


//渲染根组件 APP 到 id 为 root 的 DOM 节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />


);

// reportWebVitals();
