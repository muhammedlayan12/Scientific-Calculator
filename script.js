// const display = document.getElementById('display');
// const buttons = Array.from(document.querySelectorAll('.btn'));

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         if (button.textContent === '=') {
//             try {
//                 display.value = eval(display.value);
//             } catch {
//                 display.value = 'Error';
//             }
//         } else if (button.textContent === 'AC') {
//             display.value = '';
//         } else if (button.textContent === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else {
//             display.value += button.textContent;
//         }
//     });
// });





// const display = $("#display");
// const button = Array.from($(".btn"));

// button.forEach(button => {
//     $(button).on("click", function() {
//         if ($(button).text() === '=') {
//             try {
//                 display.val(eval(display.val()));
//             } catch {
//                 display.val('error');
//             }
//         } else if ($(button).text() === 'AC') {
//             display.val('');
//         } else if ($(button).text() === 'DEL') {
//             display.val(display.val().slice(0, -1));
//         } else {
//             display.val(display.val() + $(button).text());
//         }
//     });
// });
   



const display = $("#display");
const buttons = Array.from($(".button button")); // Fixed button selector

buttons.forEach(button => {
    $(button).on("click", function() {
        if ($(this).text() === '=') {
            try {
                display.val(eval(display.val()));
            } catch {
                display.val('error');
            }
        } else if ($(this).text() === 'AC') {
            display.val('');
        } else if ($(this).text() === 'DEL') {
            display.val(display.val().slice(0, -1)); // Fixed DEL button functionality
        } else {
            display.val(display.val() + $(this).text());
        }
    });
});