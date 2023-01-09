const toggleBtn = document.querySelector('.toggle-btn');

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const head = document.documentElement;

//initial checked theme
(() => {
	if (userTheme === 'dark' || (!userTheme && systemTheme)) {
		head.classList.add('dark');
		toggleBtn.setAttribute('checked', true);
		return;
	}
	head.classList.remove('dark');
})();

//user switch theme
toggleBtn.addEventListener('click', () => {
	if (head.classList.contains('dark')) {
		head.classList.remove('dark');
		localStorage.theme = 'light';
	} else {
		head.classList.add('dark');
		localStorage.theme = 'dark';
	}
});
