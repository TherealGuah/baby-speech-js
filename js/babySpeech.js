import {convertToBabySpeak} from './eventHandlers.js';

$(document).ready(function() {
    $('form').submit(convertToBabySpeak);
});

// --- vanilla JS version for event listener ---
// const form = document.querySelector('form');
// form.addEventListener('submit', convertToBabySpeak);







