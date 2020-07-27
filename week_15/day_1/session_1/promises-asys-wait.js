function sleep(time){
    return new Promise((resolve,reject)=>{
        if(!time || typeof time!=='number'){
            reject('time in invalid')

        }
        setTimeout(()=> resolve(),time)
    })
}

async function test(){
    await sleep(1000)
    console.log('after 1 sec')
    await sleep(2000)
    console.log('after 2 sec')
}
test()

// after waiting for 1 sec it will give the output of first console
// then after 2 sec it will give the secound output