const residents = document.querySelector('button')

const buttonClick = () => {
    axios.get('https://swapi.dev/api/planets/2').then((res)=>{
        // let alderaan = document.querySelector('#alderaan')
        // console.log(res.data.residents[0])
        for (let i = 0; i < res.data.residents.length; i++) {
            axios.get(res.data.residents[i]).then((res) => {
                let newH = document.createElement('h2')
                newH.textContent = res.data.name
                document.querySelector('body').appendChild(newH)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

residents.addEventListener('click', buttonClick)