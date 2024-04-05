'use strict'
 const key = 'j7L5lOytBRrueKvI8bLHy7MNpZ8U-z8Q2Ce4leihv84'
 let page = 1
let query = ""
const pagee = document.querySelector('.page')
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const imagecontainer = document.querySelector(".imagecontainer")
const imageUnsplash = async function(query){
try{
    const url = `https://api.unsplash.com/search/photos?page=${window.page}&query=${query}&client_id=${key}`; 
    const response = await fetch(url )

if(!response.ok){
    throw new Error('failed to fetch data')
}
const  data = await response.json()
const {results} = data
results.forEach(result => {
    const figure = document.createElement("div")
    figure.innerHTML = `<img src="${result.urls.small}" alt="" class="img">`
    imagecontainer.appendChild(figure)
});

}catch(err)
{
    console.log('something went wrong' ,err);
}
}

btn.addEventListener("click", function (){
const searchimg = input.value.trim()
if(searchimg !== "")
imageUnsplash(searchimg)
page = 1
input.value = ''
})
pagee.addEventListener("click", function () {
    page++; // Increment page number
    const searchimg = input.value.trim();
    if (searchimg !== "") {
        imagecontainer.innerHTML = ''; // Clear previous images
        imageUnsplash(searchimg); // Fetch images for the next page
    }
}); 
