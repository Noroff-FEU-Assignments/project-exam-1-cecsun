let modal = document.getElementById("myModal");

let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

modal.onclick = function() {
  modal.style.display = "none";
}