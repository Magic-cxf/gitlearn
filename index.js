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


const xiaoming = new People("小明",20)

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

instance.get("http://www.baidu.com").then((res)=>{
    console.log(res.status)
})