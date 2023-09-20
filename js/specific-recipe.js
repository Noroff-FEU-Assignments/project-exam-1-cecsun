import { fetchPostByID, fetchMediaByID } from "./api.js";

async function populateSpecificRecipe() {
    const id = getIdParam();
    const post = await fetchPostByID(id);
    console.log(post);
    const media = await fetchMediaByID(post.featured_media);

    let productMain = document.querySelector(".product-main")
    let title = productMain.querySelector(".title");
    title.innerHTML = post.title.rendered;
    let img = productMain.querySelector(".product-image");
    img.src = media.source_url;
    let p = productMain.querySelector(".product-description");

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content.rendered;
    const paragraphs = tempDiv.querySelectorAll('p');
    p.innerHTML = paragraphs[1].textContent;

    let ingredientsHtml = productMain.querySelector(".ingredients-list");
    const ingredientsList = tempDiv.querySelector("ul");
    for (const ingredient of ingredientsList.children) {
        let ingredientHtml = document.createElement("li");
        ingredientHtml.innerHTML = ingredient.textContent;
        ingredientsHtml.appendChild(ingredientHtml);
    }

    let instructionsHtml = productMain.querySelector(".instructions");
    const instructionsList = tempDiv.querySelector("ol");
    for (const instruction of instructionsList.children) {
        let instructionHtml = document.createElement("li");
        instructionHtml.innerHTML = instruction.textContent;
        instructionsHtml.appendChild(instructionHtml);
    }

}

function getIdParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    return id;
}

populateSpecificRecipe();