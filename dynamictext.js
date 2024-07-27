document.addEventListener('DOMContentLoaded', function() {
    const text = "Quiz Leap Books";
    let index = 0;
    const element = document.getElementById('dynamic-text');

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();
});
document.getElementById('share-button').onclick = function() {
    var socialButtons = document.getElementById('social-buttons');
    if (socialButtons.classList.contains('hidden')) {
        socialButtons.classList.remove('hidden');
        socialButtons.classList.add('visible');
    } else {
        socialButtons.classList.remove('visible');
        socialButtons.classList.add('hidden');
    }
};

document.getElementById('facebook-share').onclick = function() {
    window.open(
        'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://quizleapsbooks.github.io/Welcome_Quiz_Leap_Books/'), 
        'facebook-share-dialog', 
        'width=800,height=600'
    ); 
    return false;
};

document.getElementById('twitter-share').onclick = function() {
    window.open(
        'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + 
        '&url=' + encodeURIComponent('https://quizleapsbooks.github.io/Welcome_Quiz_Leap_Books/'), 
        'twitter-share-dialog', 
        'width=800,height=600'
    ); 
    return false;
};

document.getElementById('linkedin-share').onclick = function() {
    window.open(
        'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent('https://quizleapsbooks.github.io/Welcome_Quiz_Leap_Books/'), 
        'linkedin-share-dialog', 
        'width=800,height=600'
    ); 
    return false;
};
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'x') || (e.ctrlKey && e.key === 'v') || (e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 's')) {
        e.preventDefault();
    }
});
