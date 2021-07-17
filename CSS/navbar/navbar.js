document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.querySelector('.navbar__toggleBtn');
	const menu = document.querySelector('.navbar__menu');
	const icons = document.querySelector('.navbar__icons');

	toggleBtn.addEventListener('click', () => {
		const originLeftPos = toggleBtn.offsetLeft;
		const originTopPos = toggleBtn.offsetTop;
		const originRightPos = document.offsetWidth - originLeftPos;

		toggleBtn.style.right = `${originRightPos}px`;
		toggleBtn.style.top = `${originTopPos}px`;

		menu.classList.toggle('active');
		icons.classList.toggle('active');
	});
});
