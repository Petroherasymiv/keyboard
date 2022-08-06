window.addEventListener('keydown', event => {
    console.log(event)
    styleKeyDown(event.key, 'down');
    switch (event.key) {
        case 'Shift':
            print('');
            break;
        case 'CapsLock':
            print('');
            break;
        case 'Control':
            print('');
            break;
        case 'Enter':
            print('\n');
            break;
        case 'Alt':
            print('');
            break;
        case 'Tab':
            print('  \xa0  ');
            break;
        case 'Backspace':
            let BackS = document.querySelector('.boxText')
            BackS.textContent = BackS.textContent.slice(0, -1);
            break;
        case event.key:
            print(event.key)
    }
})
document.addEventListener("keydown", function (event) {
    let key = event.key + event.location;
    if (key === 'Shift2') {
        let Text2 = document.querySelectorAll('.Text2')
        Text2[0].classList.add('active')
    } else {
        document.addEventListener("keyup", function (event) {
            let key = event.key + event.location;
            if (key === 'Shift2') {
                let Text2 = document.querySelectorAll('.Text2')
                Text2[0].classList.remove('active')
            }
        });

    }
    if (key === 'Shift1') {
        let Text3 = document.querySelectorAll('.Text3')
        Text3[0].classList.add('active')
    } else {
        document.addEventListener("keyup", function (e) {
            let key = e.key + e.location;
            if (key === 'Shift1') {
                let Text3 = document.querySelectorAll('.Text3')
                Text3[0].classList.remove('active')
            }
        });
    }
});
window.addEventListener('keyup', event => {
    styleKeyDown(event.key, 'up');

})
window.addEventListener('keydown', event => {
    capsActive(event.key)
})

function capsActive(key) {
    let Text1 = document.querySelectorAll('.Text1');
    {
        if (Text1[0].textContent === key) {
            Text1[0].classList.toggle('active')
        }
    }
}
function styleKeyDown(key, status) {
    let Text = document.querySelectorAll('.Text');
    for (let i = 0; i < Text.length; i++) {
        if (Text[i].textContent === key || Text[i].textContent === key.toLowerCase()) {
            if (status === 'down') {
                Text[i].classList.add('active')
            } else if (status === 'up') {
                Text[i].classList.remove('active')
            }
        }
    }
}

function print(Text, textUp) {
    const area = document.querySelector('.boxText');
    if (textUp === 'shiftKey') {
        area.textContent += Text.toUpperCase();
    } else {
        area.textContent += Text;
    }
}




