function getSelectOptions() {
  const fetchSelectUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(fetchSelectUrl)
    .then((response) => response.json())
    .then((data) => addKeysToSelect(data.message))
    .catch((error) => {
      console.log(error);
    });

  function addKeysToSelect(data) {
    const arrLength = Object.keys(data).length;
    const selectElement = document.getElementById("breed");

    if (!data) {
      alert("Data has no items");
    } else {
      for (let i = 0; i < arrLength; i++) {
        const option = document.createElement("option");
        option.value = Object.keys(data)[i];
        option.textContent = Object.keys(data)[i];
        selectElement.appendChild(option);
      }
    }
  }
}

function getPhoto() {
  const selectElement = document.getElementById("breed");
  const selectValue = selectElement.value;

  const fethcPhotoUrl = `https://dog.ceo/api/breed/${selectValue}/images/random`;

  fetch(fethcPhotoUrl)
    .then((responce) => responce.json())
    .then((data) => addPhotoToDOM(data.message))
    .catch((error) => {
      console.log(error);
    });

  function addPhotoToDOM(data) {
    const containerElement = document.getElementById("imageContainer");

    containerElement.innerHTML = "";

    if (!data) {
      alert("Data has no images");
    } else {
      const img = document.createElement("img");
      img.src = data;
      img.alt = "Image";

      containerElement.appendChild(img);
    }
  }
}
