$(document).ready(function() {
    // Check if  browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        $('.calculator-btn').removeClass('d-none');
        $('.calculator-iframe').remove();

        function animateWithPromise($element, styles, duration) {
            return $element.animate(styles, duration).promise();
        }

        animateWithPromise($('.logo'), {'opacity':'1'}, 500)
            .then(() => animateWithPromise($('p'), {'opacity':'1'}, 500))
            .then(() => {
                $('.calculator-btn').css('bottom', '-50px').css('opacity', '1'); // Set initial position and opacity
                return animateWithPromise($('.calculator-btn'), {'bottom': '0'}, 500); // Animate from bottom to top
            })
            .catch((error) => {
                console.error('Error during animations:', error);
                $('.logo').css('opacity', '1');
                $('p').css('opacity', '1');
                $('.calculator-btn').css('bottom', '0').css('opacity', '1');
            });

        // Deactivate the pulsating animation on mouse hover
        $('.calculator-btn').hover(function() {
            $(this).addClass('pulse-off');
        }, function() {
            $(this).removeClass('pulse-off');
        });
    } else {
        $('.calculator-safari').remove();
        $('.calculator-iframe').removeClass('d-none');
    }
});
