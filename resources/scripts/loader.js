window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    const body = document.querySelector('body');
    
    const squares = document.querySelectorAll('.loader-logo .square');
    
    // This part triggers the final "loaded" state style for each square.
    // It matches the CSS animation delays to apply the class right when the animation ends.
    function applyLoadedClass(element, delay) {
        setTimeout(() => {
            element.classList.add('loaded');
        }, delay);
    }

    applyLoadedClass(squares[0], 200);  // 0.2s
    applyLoadedClass(squares[1], 600);  // 0.6s
    applyLoadedClass(squares[2], 1000); // 1.0s
    applyLoadedClass(squares[3], 1400); // 1.4s


    // Set a minimum time for the loader to be visible.
    // 3500ms = 3.5 seconds. This ensures the full boot animation plays out.
    setTimeout(() => {
        loader.classList.add('hidden');
        body.classList.remove('loading');
    }, 3500); 
});