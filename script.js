"use strict";

let allData = [];
let favorites = JSON.parse(localStorage.getItem('sonay_favs')) || [];

const homeView = document.getElementById('home-view');
const detailView = document.getElementById('detail-view');
const mediaGrid = document.getElementById('media-grid');
const detailContent = document.getElementById('detail-content');

// Veri Çekme
async function loadData() {
    try {
        const res = await fetch('data.json');
        allData = await res.json();
        renderMedia(allData);
    } catch (err) {
        mediaGrid.innerHTML = "<h2>Veriler yüklenemedi. Lütfen Live Server kullanın.</h2>";
    }
}

// Kartları Basma
function renderMedia(data) {
    mediaGrid.innerHTML = '';
    data.forEach(item => {
        const isFav = favorites.includes(item.id);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFav(${item.id})">
                <i class="fa${isFav ? 's' : 'r'} fa-heart"></i>
            </button>
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>${item.year} | ⭐ ${item.rating}</p>
            </div>
        `;
        card.onclick = () => showDetail(item.id);
        mediaGrid.appendChild(card);
    });
}
