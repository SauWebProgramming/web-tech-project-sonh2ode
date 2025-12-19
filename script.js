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

// Detay Sayfası Gösterimi
function showDetail(id) {
    const item = allData.find(m => m.id === id);
    if (!item) return;

    homeView.classList.add('hidden');
    detailView.classList.remove('hidden');

    const similarItems = allData.filter(m => item.similar.includes(m.id));

detailContent.innerHTML = `
    <div class="detail-container">
        <div class="detail-poster-wrapper">
            <img src="${item.image}" class="detail-img">
        </div>
        
        <div class="detail-info">
            <h2>${item.title}</h2>
                <div style="margin-bottom:20px">
                    <span class="badge">${item.type}</span>
                    <span class="badge">${item.genre}</span>
                    <span><i class="fas fa-calendar"></i> ${item.year}</span>
                    <span style="margin-left:15px; color:#f1c40f"><i class="fas fa-star"></i> ${item.rating}</span>
                </div>
                <p style="font-size:1.1rem; color:#ccc; margin-bottom:25px">${item.description}</p>
                <p><strong>Oyuncular:</strong> ${item.cast.join(', ')}</p>
                
                <h3 class="section-title">Yorumlar</h3>
                <div class="comment-list">
                    ${item.comments.length > 0 ? item.comments.map(c => `
                        <div class="comment-card">
                            <strong>@${c.user} <span>(⭐ ${c.score})</span></strong>
                            <p>${c.text}</p>
                        </div>
                    `).join('') : '<p>Henüz yorum yapılmamış.</p>'}
                </div>

                <h3 class="section-title">Benzer İçerikler</h3>
                <div class="similar-grid">
                    ${similarItems.map(s => `
                        <div class="similar-item" onclick="showDetail(${s.id})">
                            <img src="${s.image}">
                            <h4>${s.title}</h4>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0,0);
}
// Favori İşlemi
window.toggleFav = function(id) {
    const index = favorites.indexOf(id);
    if (index === -1) favorites.push(id);
    else favorites.splice(index, 1);
    
    localStorage.setItem('sonay_favs', JSON.stringify(favorites));
    
    // UI Tazeleme
    const activeBtn = document.querySelector('.nav-btn.active').id;
    if(activeBtn === 'show-favs-btn') showFavs();
    else filterData();
};

function showFavs() {
    const favData = allData.filter(m => favorites.includes(m.id));
    renderMedia(favData);
}
