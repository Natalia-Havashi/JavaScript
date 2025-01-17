const elements = {
  imageForm: document.querySelector(".imageForm"),
  imageUrlInput: document.querySelector(".imageUrl"),
  imageDescriptionInput: document.querySelector(".imageDescription"),
  galerry: document.querySelector(".galerry"),
  lightbox: document.querySelector(".lightbox"),
  lightboxImage: document.querySelector(".lightboxImage"),
  btnClose: document.querySelector(".close"),
  prevImageBtn: document.querySelector(".prevImage"),
  nextImageBtn: document.querySelector(".nextImage"),
};

const images = [
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
];

elements.imageForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const imageUrl = elements.imageUrlInput.value;
  const imageDescription = elements.imageDescriptionInput.value;

  if (imageUrl && imageDescription) {
    const image = {
      url: imageUrl,
      description: imageDescription,
    };
    images.push(image);
    renderGalerry();
  }

  elements.imageUrlInput.value = "";
  elements.imageDescriptionInput.value = "";
}

function renderGalerry() {
  console.log(images);
  const listImage = images
    .map(
      ({ url, description }, i) =>
        `<li class="galerryList" data-index="${i}">
        <img src="${url}" alt="${description}">
        <p>${description}</p>
        <button class='btnDelete'>Видалити зображення</button>
      </li>`
    )
    .join("");
  elements.galerry.innerHTML = listImage;
}

elements.galerry.addEventListener("click", handleClick);
function handleClick(e) {
  if (e.target.classList.contains("btnDelete")) {
    const listItem = e.target.closest("li");
    const index = listItem.dataset.index;

    removeImages(index);
  }
}

function removeImages(index) {
  images.splice(index, 1);
  renderGalerry();
}

elements.galerry.addEventListener("click", openImg);

function openImg(e) {
  if (e.target.tagName === "IMG") {
    const listItem = e.target.closest("li");
    const index = listItem.dataset.index;

    openLightbox(index);
  }
}

function openLightbox(index) {
  const { url } = images[index];

  elements.lightboxImage.src = url;
  elements.lightbox.style.display = "flex";

  elements.lightbox.dataset.currentIndex = index;
}

elements.btnClose.addEventListener("click", closeLightbox);

function closeLightbox() {
  elements.lightbox.style.display = "none";
}

elements.prevImageBtn.addEventListener("click", () => {
  const currentIndex = Number(elements.lightbox.dataset.currentIndex);
  const newIndex = (currentIndex - 1 + images.length) % images.length;

  openLightbox(newIndex);
});

renderGalerry();
