
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = function () {
    mobileMenu.classList.toggle("show");
};



// IMAGE MODAL
const images = document.querySelectorAll(".clickable");
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeImage = document.getElementById("closeImage");

images.forEach(img => {
    img.onclick = function () {
        imageModal.style.display = "block";
        modalImg.src = this.dataset.full;
    };
});

closeImage.onclick = function () {
    imageModal.style.display = "none";
};

imageModal.onclick = function (event) {
    if (event.target === imageModal) {
        imageModal.style.display = "none";
    }
};
``