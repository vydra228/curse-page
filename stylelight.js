/*let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.button-style');

const enableDarkStyle = () => {
    document.body.classList.add('lightstyle');
    localStorage.setItem('styleMode', 'dark');
}

const disableDarkStyle = () => {
    document.body.classList.remove('lightstyle');
    localStorage.setItem('styleMode', null);
}

styleToggle.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if(styleMode !== 'dark'){
    enableDarkStyle();
} else {
    disableDarkStyle();
}
});

if (styleMode === 'dark') {
    enableDarkStyle();
}
*/

let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.button-style');

const enableLightStyle = () => {
    document.body.classList.add('lightstyle');
    localStorage.setItem('styleMode', 'dark');
}

const disableLightStyle = () => {
    document.body.classList.remove('lightstyle');
    localStorage.setItem('styleMode', 'light');
}

if (styleToggle) {
    styleToggle.addEventListener('click', () => {
        styleMode = localStorage.getItem('styleMode');
        if (styleMode !== 'dark') {
            enableLightStyle();
        } else {
            disableLightStyle();
        }
    });
}

if (styleMode === 'dark') {
    enableLightStyle();
} else {
    disableLightStyle();
}
