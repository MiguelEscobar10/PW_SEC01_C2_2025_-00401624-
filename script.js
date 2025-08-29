document.addEventListener('DOMContentLoaded', function() {

    const toggleLayoutBtn = document.getElementById('toggle-layout-btn');
    const contentColumns = document.getElementById('content-columns');

    toggleLayoutBtn.addEventListener('click', function() {
        contentColumns.classList.toggle('rows');
    });

    const changeTitleBtn = document.getElementById('change-title-btn');
    const mainTitle = document.getElementById('main-title');

    changeTitleBtn.addEventListener('click', function() {
        mainTitle.textContent = "Cambio de titulo hecho";
    });

    const changeColorBtn = document.getElementById('change-color-btn');
    const descriptionTitle = document.getElementById('description-title');
    const descriptionText = document.getElementById('description-text');

    changeColorBtn.addEventListener('click', function() {
        descriptionTitle.style.color = '#0056b3';
        descriptionText.style.color = '#0056b3';
    });

    const addImageBtn = document.getElementById('add-image-btn');
    const bookDataSection = document.getElementById('book-data');
    let imageAdded = false;

    addImageBtn.addEventListener('click', function() {
        if (!imageAdded) {
            const newImage = document.createElement('img');
            newImage.id = 'book-image';
            newImage.src = 'SLujan.jpg'; 
            newImage.alt = 'Portada del libro';
            
            bookDataSection.appendChild(newImage);
            imageAdded = true;
        }
    });

});