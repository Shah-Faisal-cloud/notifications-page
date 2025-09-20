const unreadNotifications = document.querySelectorAll(".notification.unread");
const notificationsCountDisplay = document.querySelector(".notifications_count");
const markAllReadBtn = document.querySelector(".notifications_mark-read-btn");

let unreadNotificationsCount = 3;

markAllReadBtn.addEventListener("click", updateApp);


function updateApp() {
    unreadNotificationsCount = 0;
    unreadNotifications.forEach(notification => {
        notification.classList.remove("unread");
        notification.querySelector(".notification_unread-dot").style.display = 'none';
    });
    notificationsCountDisplay.textContent = unreadNotificationsCount;
}
