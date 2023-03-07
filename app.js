const animes = document.getElementById('animes')
const anime = document.getElementById('anime').content
const fragment = document.createDocumentFragment()
let news = []

document.addEventListener('DOMContentLoaded', () => {
    cargaAnime()
})

const cargaAnime = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f63c2fae4emshdf22c9a1c98066dp11628cjsnce1971710d0e',
            'X-RapidAPI-Host': 'anime-jokes.p.rapidapi.com'
        }
    };
    
    fetch('https://anime-jokes.p.rapidapi.com/animes/', options)
        .then(response => response.json())
        .then(response => {
            news = response
            console.log(response)
        })
        .catch(err => console.error(err));
}