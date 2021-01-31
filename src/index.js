import './styles/main.scss';

const HEADER_BREAKPOINT_POSITION = 40;
const HEADER_SCROLLED_CLASSNAME = 'header__search--scrolled';

const headerSearch = document.getElementsByClassName('header__search')[0];

window.addEventListener('scroll', function() {
	if (window.pageYOffset >= HEADER_BREAKPOINT_POSITION) headerSearch.classList.add(HEADER_SCROLLED_CLASSNAME);
	else if (headerSearch.classList.contains(HEADER_SCROLLED_CLASSNAME)) headerSearch.classList.remove(HEADER_SCROLLED_CLASSNAME);
});