function People(name,age){
    this.name = name 
    this.age = age
}

People.prototype.say = function(str){
    console.log("i can say something!")
}

People.prototype.walk = function (){
    console.log("i can walk")
}




async function test(){
    console.log("start")
    const val = "小明"
    const age = await new Promise ((resolve,reject)=>{
        setTimeout(() => {
            const age = 20
            resolve(age)
        }, 3000);
    })
    console.log(val+age)
    return 0
}


// test().then((val)=>{
//     console.log(val)
// })


const axios =require('axios')

const instance = axios.create({
    timeout:3000
})

instance.interceptors.request.use((config)=>{
    console.log("开始发送请求")
    return config
})

instance.interceptors.response.use((response)=>{
    console.log(response.status)
    return response
})

// instance.get("http://www.baidu.com").then((res)=>{
//     console.log(res.status)
// })

// function content(obj){
//     function F(){}
//     F.prototype = obj
//     return new F()
// }

// function Person(name){
//     this.name = name
// }

// Person.prototype.subject = "math"

// const xioahong = new Person("小红")

// xioahong.school = "csuft"

// for(let key in xioahong){
//     console.log(key)
// }
// Object.keys(xioahong).forEach((item)=>{
//     console.log(item)
// })

// const ls = new Map()

// ls.set(xioahong,[1,2,4,5])


// for ( let [item, index] of Object.entries(xioahong)){
//     console.log(item,index)
// }


/*
利用递归 实现  斐波那契数列
*/ 
function feibo(n){
    if (n == 1 || n==2){
        return 1
    }else{
        return feibo(n-1)+feibo(n-2)
    }

}


/*
利用动态规划实行斐波那契
*/ 

function feibonaci(n){
    if(n<= 1){
        return n
    }
    let current = 1,result = 0,pre = 0
    for(let i=1;i<n;i++){
        result = pre+current
        pre = current
        current = result
    }
    console.log(result)
}

feibonaci(45)