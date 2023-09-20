import {fetchAllPostsByPage, fetchMediaByID} from "./api.js"





async function populateRecipes() {
    let container1 = document.querySelector(".container1")

    let posts = await fetchAllPostsByPage(1);

    for (const post of posts)  {


        console.log(post)
        let media = await fetchMediaByID(post.featured_media);
        
        const image_url = media.source_url; 
        let img = document.createElement("img");
        img.src = image_url;
        img.alt = "food";

        let a = document.createElement("a");
        a.href = "specific-recipe.html?id="+post.id

        let divHeading = document.createElement("div");
        divHeading.innerHTML = post.title.rendered;
        divHeading.className = "container1-heading";

        let content = post.content.rendered;
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;
        const firstParagraph = tempDiv.querySelector("p").textContent;


        let p = document.createElement("p");
        p.innerHTML = firstParagraph;

        let divContainerRecipe = document.createElement("div");
        divContainerRecipe.className = "container1-recipe";

        a.appendChild(img);
        divContainerRecipe.appendChild(a);
        divContainerRecipe.appendChild(divHeading);
        divContainerRecipe.appendChild(p);

        container1.appendChild(divContainerRecipe);

    }




}

populateRecipes();