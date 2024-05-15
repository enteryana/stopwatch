import formatUnit from "../utils/fomatUnit.js";
import formatmilliseconds from "../utils/formatMilliseconds.js"

const updateTimeDom = (timeDom, time) => {
    timeDom.querySelector('.milliseconds').innerText = formatmilliseconds(time.milliseconds, );

    if (time.seconds !== time.oldSeconds) {
        timeDom.querySelector('.seconds').innerText = formatUnit(time.seconds, );
    }

    if (time.minutes !== time.oldMinutes) {
        timeDom.querySelector('.minutes').innerText = formatUnit(time.minutes, );
    }

    time.oldSeconds = time.seconds;
    time.oldMinutes = time.minutes;

};

export default updateTimeDom;