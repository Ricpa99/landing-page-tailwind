const btn = document.querySelector('#hamburger')
const nav = document.querySelector('nav')

window.onscroll = () => {
    const header = document.querySelector('header');
    const headTop = header.offsetTop;
    if (window.pageYOffset > headTop) {
        header.classList.add('head-fixed')
    } else {
        header.classList.remove('head-fixed')
        
    }

}

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    nav.classList.toggle('hidden')
})