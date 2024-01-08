powerLimitForAutotap = 100
countclicks = 34
recharging = false
skipClick = false

let app_root = document.querySelector('div[class^="_root"]')
let multipleClicks = app_root[Object.keys(app_root)[1]].children[9].props.profile.multipleClicks

async function click() {
    let cc = document.querySelectorAll('div[class^="_notcoin"]');
    let scoreElement = document.querySelector('div[class^="_scoreCurrent"]');
    let score = parseInt(scoreElement.textContent);
    
    try {
        let imrocket = document.querySelectorAll('img[class^="_root"]');
        imrocket[0][Object.keys(imrocket[0])[1]].onClick();
        recharging = false;
    } catch (error) {}
    
    for (let step = 0; step < countclicks; step++) {
        score = parseInt(scoreElement.textContent);

        if (skipClick) {
            break;
        }
        
        if (recharging) {
            if (score >= powerLimitForAutotap) {
                recharging = false;
            }
            break;
        }

        if (score > multipleClicks*2) {
            try {
                await new Promise((resolve) => {
                    cc[0][Object.keys(cc[0])[1]].onTouchStart('');
                    setTimeout(resolve, 100);
                });
            } catch (error) {}
        } else {
            recharging = true;
            break;
        }
    }
}

setInterval(click, 500);

function start() {
    skipClick = false;
}

function stop() {
    skipClick = true;
}