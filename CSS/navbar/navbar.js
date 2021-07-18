document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.querySelector('.navbar__toggleBtn');
	const menu = document.querySelector('.navbar__menu');
	const icons = document.querySelector('.navbar__icons');

	toggleBtn.addEventListener('click', () => {
		const originTopPos = toggleBtn.offsetTop;

		toggleBtn.style.top = `${originTopPos}px`;

		menu.classList.toggle('active');
		icons.classList.toggle('active');
	});
});
