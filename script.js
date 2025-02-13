function goToServices() {
    window.location.href = "services.html";
}
// Функция для открытия/закрытия вкладки регистрации
function toggleRegistration() {
    const sidebar = document.querySelector(".registration-sidebar");
    sidebar.classList.toggle("open");
}

// Обработка отправки формы регистрации
document.querySelector(".registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Регистрация успешно завершена!");
    toggleRegistration(); // Закрываем вкладку после регистрации
});