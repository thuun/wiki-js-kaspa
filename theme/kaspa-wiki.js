const themeModeToggleButton = `<button 
    id="v-btn-toggle-theme-mode"
    type="button"
    class="v-btn v-btn--flat v-btn--icon v-btn--round v-btn--tile theme--dark v-size--default" 
    style="height: 64px;" 
    aria-label="Toggle Dark Mode" 
    role="button"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-weather-night theme--dark grey--text"></i></span></button>`;

document.addEventListener('DOMContentLoaded', () => {
    window.boot.register('page-ready', () => {
        setTimeout(() => {
            let sibling = document.querySelector('.v-application .nav-header .nav-header-inner .navHeaderLoading');
            sibling.insertAdjacentHTML('afterend', themeModeToggleButton);
            let button = document.getElementById('v-btn-toggle-theme-mode');
            button.onclick = (e) => {
                if (document.querySelector('.v-application').classList.toggle('theme--dark')) {
                    document.querySelector('#v-btn-toggle-theme-mode i').classList.replace('mdi-weather-night', 'mdi-weather-sunny');
                } else {
                    document.querySelector('#v-btn-toggle-theme-mode i').classList.replace('mdi-weather-sunny', 'mdi-weather-night');
                }
            };
        }, 1);
    }, true);
}, false);

