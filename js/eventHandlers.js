export function convertToBabySpeak(ev) {
    ev.preventDefault();

    const adultWords = document.querySelector('input[name="adultWords"]').value;
    let toLowerCase = adultWords.toLowerCase();
    let babyWords = 'Baby says: ';

    for (let i = 0; i < toLowerCase.length; i++) {
        if (toLowerCase[i] === 'l' || toLowerCase[i] === 'r') {
            babyWords += 'w';
        } else {
            babyWords += toLowerCase[i];
        }
    }

    babyWords += '. Buwaaaaaahhh';

    // Creating new elements
    const newPara = document.createElement('p');
    const text = document.createTextNode(babyWords);
    newPara.appendChild(text);
    const babySentence = document.querySelector('#babySentence');
    babySentence.appendChild(newPara);
}
