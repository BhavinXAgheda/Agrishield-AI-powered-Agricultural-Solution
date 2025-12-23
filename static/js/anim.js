document.addEventListener('DOMContentLoaded', () => {
    // Slider Elements
    const slider = document.querySelector('.slider .list');
    const items = document.querySelectorAll('.slider .list .item');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const dots = document.querySelectorAll('.slider .dots li');
    const popupMenu = document.getElementById('popupMenu');
    const buttonPopup = document.getElementById('buttonPopup');
    const uploadImage = document.getElementById('uploadImage');
    const cameraImage = document.getElementById('cameraImage');

    if (!slider || !items.length || !next || !prev || !dots.length) return;

    let lengthItems = items.length - 1;
    let active = 0;

    function reloadSlider() {
        slider.style.transform = `translateX(-${items[active].offsetLeft}px)`;

        const lastActiveDot = document.querySelector('.slider .dots li.active');
        if (lastActiveDot) lastActiveDot.classList.remove('active');
        if (dots[active]) dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => { next.click(); }, 3000);
    }

    let refreshInterval = setInterval(() => { next.click(); }, 3000);

    next.onclick = () => {
        active = (active + 1 <= lengthItems) ? active + 1 : 0;
        reloadSlider();
    };

    prev.onclick = () => {
        active = (active - 1 >= 0) ? active - 1 : lengthItems;
        reloadSlider();
    };

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        });
    });

    window.onresize = reloadSlider;

    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        document.querySelector('.slider').style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });

    // Popup Menu Handling
    function showPopup(popupId) {
        document.querySelectorAll('.popup').forEach(popup => {
            if (popup.id === popupId) {
                popup.classList.add('show');
                document.body.classList.add('no-animations'); // Disable animations
            } else {
                popup.classList.remove('show');
            }
        });
    }

    function hidePopups() {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.classList.remove('show');
        });
        document.body.classList.remove('no-animations'); // Re-enable animations
    }

    uploadImage.addEventListener('click', (event) => {
        event.stopPropagation();
        showPopup('popupMenu');
    });

    cameraImage.addEventListener('click', (event) => {
        event.stopPropagation();
        showPopup('buttonPopup');
    });

    window.addEventListener('click', (event) => {
        if (!popupMenu.contains(event.target) && !buttonPopup.contains(event.target) && event.target !== uploadImage && event.target !== cameraImage) {
            hidePopups();
        }
    });

    document.querySelectorAll('.popup .close').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            closeButton.closest('.popup').classList.remove('show');
            document.body.classList.remove('no-animations'); // Re-enable animations
        });
    });

    // Initialize the icon carousel
    const iconContainer = document.querySelector('.icon-container');
    const icons = iconContainer?.querySelectorAll('.icon');
    if (icons?.length) {
        let currentIconIndex = 0;

        function showNextIcon() {
            icons[currentIconIndex].classList.add('opacity-100');
            setTimeout(() => {
                icons[currentIconIndex].classList.remove('opacity-100');
                currentIconIndex = (currentIconIndex + 1) % icons.length;
                showNextIcon();
            }, 2000); // Adjust delay between icon displays
        }

        showNextIcon();
    }
});
