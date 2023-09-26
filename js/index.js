import {fetchAllPostsByPage, fetchMediaByID} from "./api.js"


async function populateCarousel() {
    let carousel = document.querySelector(".carousel-track")
    let postsData = await fetchAllPostsByPage(1);
    let posts = postsData.data;
    let postIndex = 0;
    let imagesPerSlide = 3;

    for (let carouselSlide of carousel.children) {
        let numImages = 0;
        // Make sure we don't exceed number of posts, or numbers of images per slide. 
        while(postIndex < posts.length && numImages < imagesPerSlide) {
            let media = await fetchMediaByID(posts[postIndex].featured_media);

            const image_url = media.source_url; 

            let img = document.createElement("img");
            img.src = image_url;
            img.alt = "food";

            let a = document.createElement("a");
            a.href = "/html/specific-recipe.html?id="+posts[postIndex].id

            a.appendChild(img);
            carouselSlide.appendChild(a);
            numImages++;
            postIndex++;
        }
    }
}


populateCarousel();