import {
    CountUp
} from './js/countup.js';

window.addEventListener('scroll', function (e) {
    const image = document.querySelector('.video_image');
    const videoDiv = document.getElementById('video');
    const videoDivDistanceToTop = videoDiv.getBoundingClientRect().top;

    if (videoDivDistanceToTop < 315) {
        image.classList.remove('animation_small');
        image.classList.add('animation_big');
    } else {
        image.classList.remove('animation_big');
        image.classList.add('animation_small');
    }
});

window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
        // console.log('up');
        document.querySelector('.navbar').classList.remove('animation_height_shrink');
        document.querySelector('.navbar').style.display = 'flex';
    } else {
        // console.log('down');
        document.querySelector('.navbar').classList.add('animation_height_shrink');
        setTimeout(() => {
            document.querySelector('.navbar').style.display = 'none';
        }, 200)
    }
    this.oldScroll = this.scrollY;
}


// const options = {
//     decimalPlaces: 1,
// };
// let demo = new CountUp('myTargetElement', 3.5, options);
// if (!demo.error) {
//     demo.start();
// } else {
//     console.error(demo.error);
// }