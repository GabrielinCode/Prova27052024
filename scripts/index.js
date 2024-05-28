(function(){
    const API_URL = "https://emojihub.yurace.pro/api/all/category/animals-and-nature";
    const cardsDiv = document.querySelector('.emoji-cards')   ;
    let allEmojis = [];

    getAllDucks();    

    async function getAllDucks(){
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            allEmojis = data;
            console.log(allEmojis)

            if(allEmojis){
                renderizeAllEmojis();
                return
            }
            
            console.log("No Emojis!")
        } catch(error) {
            console.error(error);
        }
    }

    function renderizeAllEmojis(){
        allEmojis.map(element => {
            cardsDiv.insertAdjacentHTML("afterbegin", `<p class="emoji id="${element.unicode}">${element.htmlCode} <span>${element.name}<span></p>`)
        })
    }

})()