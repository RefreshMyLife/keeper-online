
const container = document.querySelector('.container__inner');
const sidebar = document.querySelector('.sidebar');
const footerHead = document.querySelector('.footer__head');

function fixHeightLayout() {
    if (container.offsetHeight > sidebar.offsetHeight) {
        sidebar.style.cssText = `height: ${container.offsetHeight }px`;
        // container.style.cssText = `height: ${container.offsetHeight}px`;
    } else {
        sidebar.style.cssText = `height: ${sidebar.offsetHeight}px`;
        container.style.cssText = `height: ${sidebar.offsetHeight + 60}px`;
        footerHead.style.cssText = '  bottom: -25px;';
    }
}
document.addEventListener('load', fixHeightLayout());
