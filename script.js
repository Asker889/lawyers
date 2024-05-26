const headerMenuBtn = document.querySelector('.header-menu');
const header = document.querySelector('.header');
const navItems = document.querySelectorAll('.nav-item');


headerMenuBtn.onclick = toggleMenu;

function toggleMenu(){
	headerMenuBtn.classList.toggle('_active');
	header.classList.toggle('_active');
}

navItems.forEach(item => item.onclick = closeMenu)

function closeMenu(){
	headerMenuBtn.classList.remove('_active');
	header.classList.remove('_active');
}


// swiper-reviews


const swiperReviews = document.querySelector('.swiper-reviews');

let reviewsOps = {
	breakpoints: {
		900: { slidesPerView:2},
		0: { slidesPerView:1}
	}
}

Object.assign(swiperReviews, reviewsOps);
swiperReviews.initialize();

const btnNews = document.querySelector('[data-btn="news"');
const newsList = document.querySelectorAll('.cards-news');


btnNews.onclick = toggleListShow;

let newsShow = false;

function hideNews(){
	newsList.forEach ((item, i)=>{
		if(i > 2) item.style.display ='none'
	})
}
function showNews(){
	newsList.forEach ((item, i)=>{
		if(i > 2) item.style.display ='block'
	})
}

hideNews()

function toggleListShow(){
	newsShow = !newsShow;
	let textBtn = newsShow ? 'Свернуть' : 'Все новости';
	btnNews.textContent = textBtn;
	
	newsShow ? showNews() : hideNews();	
}
