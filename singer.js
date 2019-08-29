function clickBtn(){
    let btn = document.getElementsByClassName('buybtn')[0]    
    if(btn.innerHTML == '立即预订' || btn.innerHTML == '立即购买'){
        btn.click()
    }else{
        console.log('未出票==')
        location.reload()
    }
}

let timer = setInterval(() => {    
    if(document.getElementsByClassName('buybtn')[0]){
        console.log('开始模拟点击==')
        clickBtn()
        window.clearInterval(timer)
    }
}, 1);