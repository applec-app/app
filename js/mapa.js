const mapWindow = document.getElementById('mapWindow');
let isDown = false;
let startX, startY, scrollLeft, scrollTop;

// Iniciar el mapa un poco movido para que no se vea una esquina
window.onload = () => {
    mapWindow.scrollLeft = 500;
    mapWindow.scrollTop = 500;
};

// --- SOPORTE RATÓN ---
mapWindow.addEventListener('mousedown', (e) => {
    isDown = true;
    mapWindow.style.cursor = 'grabbing';
    startX = e.pageX - mapWindow.offsetLeft;
    startY = e.pageY - mapWindow.offsetTop;
    scrollLeft = mapWindow.scrollLeft;
    scrollTop = mapWindow.scrollTop;
});

mapWindow.addEventListener('mouseleave', () => isDown = false);
mapWindow.addEventListener('mouseup', () => {
    isDown = false;
    mapWindow.style.cursor = 'grab';
});

mapWindow.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - mapWindow.offsetLeft;
    const y = e.pageY - mapWindow.offsetTop;
    const walkX = (x - startX); 
    const walkY = (y - startY);
    mapWindow.scrollLeft = scrollLeft - walkX;
    mapWindow.scrollTop = scrollTop - walkY;
});

// --- SOPORTE TÁCTIL (MÓVIL) ---
mapWindow.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - mapWindow.offsetLeft;
    startY = e.touches[0].pageY - mapWindow.offsetTop;
    scrollLeft = mapWindow.scrollLeft;
    scrollTop = mapWindow.scrollTop;
});

mapWindow.addEventListener('touchend', () => isDown = false);

mapWindow.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - mapWindow.offsetLeft;
    const y = e.touches[0].pageY - mapWindow.offsetTop;
    const walkX = (x - startX);
    const walkY = (y - startY);
    mapWindow.scrollLeft = scrollLeft - walkX;
    mapWindow.scrollTop = scrollTop - walkY;
});

// Click en marcador
document.querySelectorAll('.marker').forEach(m => {
    m.addEventListener('click', (e) => {
        m.classList.toggle('active');
        e.stopPropagation();
    });
});