const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store = {
	currentPage: 1,
};

function getData(url) {
	ajax.open('GET', url, false);
	ajax.send();
	return (JSON.parse(ajax.response));
}

function newsFeed() {
	const newsFeeds = getData(NEWS_URL);
	const newsList = [];
	newsList.push('<ul>');
	for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; ++i) { // page를 index값으로 처리가능
		newsList.push(`
			<li>
				<a href="#/show/${newsFeeds[i].id}">
				${newsFeeds[i].title} (${newsFeeds[i].comments_count})
				</a>
			</li>
		`);
	}
	newsList.push('</ul>');

	newsList.push(` // 이전 페이지 / 다음 페이지를 위한 div, a 태그 + 방어 코드
		<div>
			<a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
			<a href="#/page/${store.currentPage < 3 ? store.currentPage + 1 : 3}">다음 페이지</a>
		</div>
	`);

	container.innerHTML = newsList.join('');
}

function newsDetail() {
	const id = location.hash.substr(7);

	const newsContent = getData(CONTENT_URL.replace('@id', id));
	container.innerHTML = `
		<h1>${newsContent.title}</h1>
		<div><a href="#/page/${store.currentPage}">목록으로</a></div>
	`;
}

function router() {
	const routePath = location.hash;
	if (routePath === '') {
		newsFeed();
	} else if (routePath.indexOf('#/page/') >= 0) {
		store.currentPage = Number(routePath.substr(7));
		newsFeed();
	} else {
		newsDetail();
	}
}

window.addEventListener('hashchange', router);
router();
