const container = document.getElementById('root'); // root
const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'; // 개별 news

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeeds = JSON.parse(ajax.response);
const ul = document.createElement('ul');
for (let i = 0; i < 10; ++i) {
	const li = document.createElement('li');
	const a = document.createElement('a');

	a.href = `#${newsFeeds[i].id}`; // a의 href을 "개별id해쉬"로 지정
	a.innerHTML = `${newsFeeds[i].title} (${newsFeeds[i].comments_count})`;

	li.appendChild(a);
	ul.appendChild(li);
}

// 모든 a태그에 이벤트 리스너를 넣기에는 문제가 있어서
// a태그를 누를 때 해쉬가 변경되는 것을 아용한 hashchange사용
// window 객체가 지원
// 현재의 hash값은 location.hash에서 지원
const content = document.createElement('div'); // 링크를 클릭하여 content를 불러올 때 넣어둘 공간
window.addEventListener('hashchange', function() {
	const id = this.location.hash.substr(1);
	ajax.open('GET', CONTENT_URL.replace('@id', id), false);
	ajax.send();

	const newsContent = JSON.parse(ajax.response);
	const title = document.createElement('h1');
	title.innerHTML = newsContent.title;

	content.appendChild(title);
});

container.appendChild(ul);
container.appendChild(content);
