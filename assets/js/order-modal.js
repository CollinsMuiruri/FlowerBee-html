// Modal logic
document.querySelectorAll('.order-number').forEach(order => {
    order.addEventListener('click', () => {
        document.getElementById('order-modal').classList.add('active');
        document.getElementById('modal-overlay').classList.add('active');
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('order-modal').classList.remove('active');
    document.getElementById('modal-overlay').classList.remove('active');
});

document.getElementById('modal-overlay').addEventListener('click', () => {
    document.getElementById('order-modal').classList.remove('active');
    document.getElementById('modal-overlay').classList.remove('active');
});