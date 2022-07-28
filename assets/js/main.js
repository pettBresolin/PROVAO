let page = 1

async function getAllcharacters (){
    const url = await fetch(`https://api.disneyapi.dev/characters?page=${page}`);
    //console.log(url)
    const info = await url.json();
    //console.log(info)
    info.data.forEach(function(personagens){
        document.querySelector('#allCharacter').insertAdjacentHTML('beforeend',
        `
            <div class="card">
                <img class="image-personagem" src=${personagens.imageUrl}>
                <div>
                    <h2 class="name-personagem">${personagens.name}</h2>
                    <p class="short-personagem">${personagens.shortFilms}</p>
                    <p class="film-personagem">${personagens.films}</p>
                    <p class="tv-personagem">${personagens.tvShows}</p>
                </div>
            </div>
            `)
        })
    }
     
    getAllcharacters();

    function viewMore(){
        page++;
        getAllcharacters();
    }
    
    window.addEventListener("scroll", function (){
        const {scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if(scrollTop + clientHeight >= scrollHeight - 300){
            viewMore();
        }
    });

