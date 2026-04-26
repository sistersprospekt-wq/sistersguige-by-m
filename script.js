
function updateGrid(count) {
    // ЗАМЕНИТЕ '.your-container-class' на имя класса вашего блока с товарами
    const grid = document.querySelector('.your-container-class');
    if (grid) {
        grid.style.setProperty('--columns', count);
    }
}

// Устанавливаем значение при загрузке (чтобы совпадало с 'selected' в HTML)
document.addEventListener('DOMContentLoaded', () => {
    updateGrid(document.getElementById('columnsSelect').value);
});
