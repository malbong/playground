document.addEventListener("DOMContentLoaded", () => {
	const toggleBtn = document.querySelector('.navbar__toggleBtn');
	const menu = document.querySelector('.navbar__menu');
	const icons = document.querySelector('.navbar__icons');

	toggleBtn.addEventListener('click', () => {
		const left = toggleBtn.offsetLeft;
		const top = toggleBtn.offsetTop;
		console.log(left, top);

		menu.classList.toggle('active');
		icons.classList.toggle('active');

		toggleBtn.style.left = `${left}px`;
		toggleBtn.style.top = `${top}px`;
	});
});
