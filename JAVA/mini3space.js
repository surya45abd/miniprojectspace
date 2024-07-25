document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.wrong').forEach(function(element) {
        element.addEventListener('click', removeInfo);
    });
});

function showInfo(id) {
    document.querySelectorAll('.overs').forEach(function(val) {
        val.style.display = 'none';
    });
    document.querySelector(`.over${id}`).style.display = 'block';
    document.querySelector('.over').style.display = 'block';
    document.querySelector('.wrapper').style.justifyContent = 'start';
}

function removeInfo() {
    document.querySelector('.over').style.display = 'none';
}

function about() {
    document.querySelector('.video').style.display = 'none';
}
