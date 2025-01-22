const Notify = true;

function createNotification(message) {
    if (!Notify) return;

    const savedMessage = localStorage.getItem('readMessage');
    if (savedMessage === message) return;

    localStorage.setItem('readMessage', message);

    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#222';
    notification.style.color = 'gold';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    notification.style.fontFamily = 'Arial, sans-serif';
    notification.style.fontSize = '16px';
    notification.style.zIndex = '1000';
    notification.style.display = 'flex';
    notification.style.justifyContent = 'space-between';
    notification.style.alignItems = 'center';

    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;
    notification.appendChild(messageSpan);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.color = 'gold';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.marginLeft = '10px';
    closeButton.style.fontSize = '16px';
    closeButton.style.fontWeight = 'bold';

    closeButton.addEventListener('click', () => {
        document.body.removeChild(notification);
    });

    notification.appendChild(closeButton);

window.onload = () => {
    createNotification('Welcome to V1.7!');
};
