const memeGeneratebtn=document.querySelector(".meme-generator .meme-generator-btn")
const memetype=document.querySelector(".meme-generator .meme-type")
const memeImage=document.querySelector(".meme-generator img")
const memeTitle=document.querySelector(".meme-generator .meme-title")
const memeAuthor=document.querySelector(".meme-generator .meme-author")
let category=""

const updateDetails=(url,title,author)=>{
    if(url)
    {
        memeImage.setAttribute("src",url);
        memeAuthor.innerHTML=`Author - ${author}`
    }
    else
    {
        
        memeImage.setAttribute("src","trydifferent.png");
        memeAuthor.innerHTML=''
    }
}
const generatememe=()=>{
    fetch(`https://meme-api.com/gimme/${category}memes`)
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    })
    .catch(error => console.error("Error fetching meme:", error));;
}
memeGeneratebtn.addEventListener("click",generatememe)

