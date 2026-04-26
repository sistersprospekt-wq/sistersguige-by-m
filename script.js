
<script>
function updateGrid(count) {
    // Ищем ваш контейнер .grid-container
    const grid = document.querySelector('.grid-container');
    if (grid) {
        // Меняем количество колонок через CSS-переменную
        grid.style.setProperty('--cols', count);
    }
}

// Принудительно устанавливаем 4 колонки при старте
document.addEventListener('DOMContentLoaded', () => {
    updateGrid(4);
});
</script>
