// ✅ 1. Highlight active nav link on scroll
const sections = document.querySelectorAll('.scroll-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 80;
        if (pageYOffset >= top) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ✅ 2. Set fade-in animation delay using data-delay
document.querySelectorAll('.fade-item').forEach(el => {
    const delay = el.getAttribute('data-delay') || '0s';
    el.style.setProperty('--delay', delay);
});

// ✅ 3. Fade-in on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.fade-item').forEach(el => observer.observe(el));


// ✅ Auto-rotating gallery (1 image every 3 seconds)
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-carousel img');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
        galleryImages.forEach(img => img.classList.remove('visible'));
        galleryImages[index].classList.add('visible');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    }

    // Auto-rotate every 3 seconds
    function startAutoRotate() {
        intervalId = setInterval(nextImage, 3000);
    }

    // Stop auto-rotate
    function stopAutoRotate() {
        clearInterval(intervalId);
    }

    // Initial display
    showImage(currentIndex);
    startAutoRotate();

    // Manual button controls
    nextBtn.addEventListener('click', () => {
        stopAutoRotate();
        nextImage();
        startAutoRotate();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoRotate();
        prevImage();
        startAutoRotate();
    });
});
