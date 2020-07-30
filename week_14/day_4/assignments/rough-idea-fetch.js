async function fetchContent(){
    let prom =[]

    prom[0] = getFeed().then(updateDom)
    prom[1] = getCategory().then(updateDom)
    prom[2] = getTrending().then(updateDom)

    await Promise.all(prom)

    console.log('all are done')
}



async function getFeed(){

    //fetch
    // and manipulate the dom
}