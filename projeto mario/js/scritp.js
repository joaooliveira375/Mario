const mario = document.querySelector('.mariojump');

const jump = () => {
mario.classList.add('jump');

setTimeout(() => {

    mario.classList.remove('jump');


}, 500);

}



document.addEventListener('keydown', jump);





