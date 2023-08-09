$(document).ready(function() {
    // Check if browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const animationDuration = 500;

    if (isSafari) {
        $('.calculator-iframe').addClass('d-none');
        $('.safari-calculator-container').removeClass('d-none');

        const animateWithPromise = ($element, styles) => $element.animate(styles, animationDuration).promise();

        animateWithPromise($('p'), {'opacity': '1'})
            .then(() => {
                $('.calculator-btn').css('bottom', '-50px').css('opacity', '1'); // Set initial position and opacity
                return animateWithPromise($('.calculator-btn'), {'bottom': '0'}); // Animate from bottom to top
            })
            .catch(error => {
                console.error('Error during animations:', error);
                $('p, .calculator-btn').css({'opacity': '1', 'bottom': '0'});
            });

        $('.calculator-btn').hover(function() {
            $(this).toggleClass('pulse-off');
        });
    } else {
        $('.safari-calculator-container').addClass('d-none');
        $('.calculator-iframe').removeClass('d-none');
    }
});
