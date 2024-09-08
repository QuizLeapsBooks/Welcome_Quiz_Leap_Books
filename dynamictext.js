document.addEventListener("DOMContentLoaded", function() {
    const text = "Quiz Leap Books";
    const typingEffect = document.querySelector(".typing-effect");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 150);
        }
    }

    typeText();

    const menuBtn = document.querySelector(".menu-btn");
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("nav-active");
        menuIcon.classList.toggle("open");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const mainShareButton = document.getElementById('mainShareButton');
    const socialIcons = document.getElementById('socialIcons');

    mainShareButton.addEventListener('click', function () {
        socialIcons.style.display = socialIcons.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('facebook').addEventListener('click', function () {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), 'facebook-share-dialog', 'width=800,height=600');
    });

    document.getElementById('twitter').addEventListener('click', function () {
        window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), 'twitter-share-dialog', 'width=800,height=600');
    });

    document.getElementById('linkedin').addEventListener('click', function () {
        window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(window.location.href), 'linkedin-share-dialog', 'width=800,height=600');
    });

    document.getElementById('whatsapp').addEventListener('click', function () {
        window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(window.location.href), 'whatsapp-share-dialog', 'width=800,height=600');
    });
});
