const showJoke = async (nodeId) => {
    let setupResponse = ''
    let punchlineResponse = ''
    // микротаска
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        const {setup, punchline} = await response.json()

        setupResponse = setup
        punchlineResponse = punchline
    } catch (error) {
        console.error(error)
        setupResponse = 'шутки не будет';
    }

    // рендер задача
    const div = document.getElementById(nodeId)
    if (div) div.innerText = `${setupResponse} ${punchlineResponse}`
}


const queueMaker = () => {
    // задача 1
    setTimeout(async () => {
        await showJoke('joke1')
    }, 0)

    // задача 2
    setTimeout( () => {
        // микротаска 2.1
        const promise1 = new Promise((resolve, reject) => {
            resolve('промис 1')
        })

        // микротаска 2.2
        const promise2 = new Promise((resolve, reject) => {
            resolve('промис 2')
        })

        promise1.then((res) => {console.log(res)})
        promise2.then((res) => {console.log(res)})

    }, 1)

    // задача 3
    setTimeout(async () =>{
        await showJoke('joke2')
    }, 2)
}

queueMaker()