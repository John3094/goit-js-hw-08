import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LOCAL_STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(setTime, 1000));

function setTime(event) {
    const currentTime = event.seconds;
    localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
}

function itemLocalStorge() {
    const valueLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (valueLocalStorage) {
        player.setCurrentTime(valueLocalStorage);
    }
}

itemLocalStorge();
