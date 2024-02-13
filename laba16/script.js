let style = 1;

document.getElementById('but1').addEventListener('click', function() {
    let stylesheet = document.getElementById('stylesheet');
    if (style === 1) {
        stylesheet.href = 'styleb.css';
        style = 2;
    } else {
        stylesheet.href = 'style.css';
        style = 1;
    }
    updateProgress(Math.random() * 100);
});

let opacity = 1;

document.getElementById('but2').addEventListener('click', function() {
    let listItems = document.querySelectorAll('#list');
    listItems.forEach(item => {
        if (opacity - 0.1 > 0) {
            item.style.opacity = opacity - 0.1;
        } else {
            item.style.opacity = 1;
        }
    });
    opacity = (opacity - 0.1 > 0) ? opacity - 0.1 : 1;
});

let updateProgress = function(percent) {
    let progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = percent + "%";
}