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
