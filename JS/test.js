// localStorage 객체
// -> 웹 브라우저에 데이터를 저장하는 객체
// -> 제공 메소드
// 1) localStorage.getItem(myKey): 키에 대한 값 가져오기
// 2) localStorage.setItem(myKey, myValue): 키에 대한 값 설정
// 3) localStorage.removeItem(myKey): 해당 키의 값을 제거
// 4) localStorage.clear(): 저장된 모든 키를 제거

document.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelector('input');
	const button = document.querySelector('button');

	const savedValue = localStorage.getItem('preValue');
	// const savedValue = localStorage.preValue;// 위와 같음

	if (savedValue) {
		input.value = savedValue;
	}

	input.addEventListener('keyup', (event) => {
		const value = event.currentTarget.value;
		localStorage.setItem('preValue', value);
		// localStorage.preValue = value;// 위와 같음
	});
	button.addEventListener('click', (event) => {
		localStorage.clear();
		input.value = '';

	});
});
