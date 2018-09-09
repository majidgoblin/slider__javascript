var nextItems = document.querySelectorAll('.slider-right-slides img');

nextItems.forEach(function () {
    this.addEventListener('click', function (e) {
        e.preventDefault();
        var a = document.getElementsByClassName('active-slide')[0];
        console.log(a);
        a.classList.remove('active-slide');
        // console.log(c);
    })
})