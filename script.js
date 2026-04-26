function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('columnsSelect');
    
    // ВАЖНО: замени '.products-grid' на класс твоего контейнера, где лежат карточки
    const grid = document.querySelector('.products-grid'); 

    if (select && grid) {
        select.addEventListener('change', function() {
            const columns = this.value;
            // Устанавливаем количество колонок динамически
            grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        });
    }
});
