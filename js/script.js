let heading=document.querySelector(".heading")

let count=-1

function counterJs(){
    count++
    heading.innerHTML=`${count}%`
    if(count== 1){
        heading.style.color="orange"
    }else if(count== 2){
        heading.style.color="green"
    }else if(count== 3){
        heading.style.color="purple"
    }else if(count== 4){
        heading.style.color="tomato"
    }else if(count==5){
        heading.style.color="maroon"
        clearInterval(stop)
    }
}

let stop=setInterval(()=>{
    counterJs()
},heading.dataset.speed)    
    



let counter=document.querySelectorAll(".counter")
let arr=Array.from(counter)

arr.map(item=>{
    let count=-1

    function counterJs(){
        count++
        item.innerHTML=count
        if(count==item.dataset.number){
            clearInterval(stop)
        }
    }

    let stop=setInterval(()=>{
        counterJs()
    },item.dataset.speed)
})



let name=document.querySelector(".name")
let count2=0

function typeJs(){
    name.innerHTML+= name.dataset.text.charAt(count2)
    count2++
    if(count2==name.dataset.text.length+1){
        name.innerHTML=""
        count2=0
    }
}

setInterval(() => {
    typeJs()
}, 1000);



