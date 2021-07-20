document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.querySelector('.navbar__toggleBtn');
	const menu = document.querySelector('.navbar__menu');
	const icons = document.querySelector('.navbar__icons');

	toggleBtn.addEventListener('click', () => {
		const top = toggleBtn.offsetTop;
		const left = toggleBtn.offsetLeft;
		const bodyWidth = document.body.offsetWidth;
		const toggleBtnWidth = toggleBtn.offsetWidth;
		const right = bodyWidth - left - toggleBtnWidth;

		toggleBtn.style.top = `${top}px`;
		toggleBtn.style.right = `${right}px`;

		menu.classList.toggle('active');
		icons.classList.toggle('active');
	});
});
