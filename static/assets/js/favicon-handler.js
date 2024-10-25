// favicon-handler.js
function initFavicon() {
    const savedFavicon = localStorage.getItem('selectedFavicon');
    if (savedFavicon) {
        changeFavicon(savedFavicon);
    }
}

function changeFavicon(iconUrl) {
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = iconUrl;
    localStorage.setItem('selectedFavicon', iconUrl);
}

document.addEventListener('DOMContentLoaded', initFavicon);
