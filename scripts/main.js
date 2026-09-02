const header = document.querySelector('.header')
const btnBurger = document.querySelector('.js-burger-btn')
const body = document.body
const closeTriggers = document.querySelectorAll(
	'.header__link, .header__logo, .header__card-link',
)

const closeMenu = () => {
	body.classList.remove('no-scroll')
	header.classList.remove('burger--active')
}

btnBurger.addEventListener('click', () => {
	body.classList.toggle('no-scroll')
	header.classList.toggle('burger--active')
})

closeTriggers.forEach(el => el.addEventListener('click', closeMenu))

window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		header.classList.add('header--scroll')
	} else {
		header.classList.remove('header--scroll')
	}
})

const catalogBtns = document.querySelectorAll('.js-catalog__link')
const catalogs = document.querySelectorAll('.js-catalog__products')

function selectCatalog(e) {
	const target = e.currentTarget
	const targetId = target.dataset.target
	const activeCatalog = document.getElementById(targetId)

	catalogs.forEach(cat => {
		cat.classList.remove('catalog__products--active')
	})

	catalogBtns.forEach(btn => {
		btn.classList.remove('catalog__link--active')
	})

	if (activeCatalog) {
		activeCatalog.classList.add('catalog__products--active')
		target.classList.add('catalog__link--active')
	}
}

catalogBtns.forEach(el => {
	el.addEventListener('click', selectCatalog)
})

