// ==UserScript==
// @name         测试
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.damai.cn/item*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
   function clickBtn(){
    let btn = document.getElementsByClassName('buybtn')[0]
    console.log(btn.innerHTML)
    if(btn.innerHTML == '立即预订' || btn.innerHTML == '立即购买'){
        btn.click()
    }else{
        location.reload()
    }
}

let timer = setInterval(() => {
    console.log('未加载到btn')
    if(document.getElementsByClassName('buybtn')[0]){
        console.log('已加载出btn,开始判断点击')
        clickBtn()
        window.clearInterval(timer)
    }
}, 1);
})();