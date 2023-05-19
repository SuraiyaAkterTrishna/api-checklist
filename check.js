const loadPhotos = async () => {
  const url = `https://jsonplaceholder.typicode.com/photos`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhotos(data.slice(0, 20));
};
const displayPhotos = (photos) => {
  const photoContainer = document.getElementById("photo-container");
  photos.forEach((photo) => {
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("col");
    photoDiv.innerHTML = `
        <div class="card h-100">
        <img onclick="loadDetails(${photo.id})" src="${photo.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
        </div>
      </div>
        `;
    photoContainer.appendChild(photoDiv);
  });
};
const loadDetails = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data);
};
const displayDetails = (photo) => {
    console.log(photo);
  const detailConatainer = document.getElementById("detail-container");
  detailConatainer.innerHTML = `
    <div class="card" style="width: 18rem;" >
    <img src="${photo.url}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${photo.title}</h5>
        <p class="card-text">Id: ${photo.id}</p>
        <img src="${photo.thumbnailUrl}" alt="...">
    </div>      
    </div>
    `;
};
loadPhotos();
