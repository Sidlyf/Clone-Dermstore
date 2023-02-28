function scrollEelement(el, left, right) {
	let element = document.querySelector(el)
	let leftButton = document.querySelector(left)
	let rightButton = document.querySelector(right)


	console.log(element)
	leftButton.addEventListener('click', function () {
		console.log(element.clientWidth)
		element.scrollBy(`-${element.clientWidth / 2}`, 0);
	})

	rightButton.addEventListener('click', function () {
		element.scrollBy(`${element.clientWidth / 2}`, 0);
	})
}



scrollEelement('#best-sellers-scroll', "#best-sellers-scroll .left-arrow", '#best-sellers-scroll .right-arrow')

scrollEelement('#now-trending-scroll', "#now-trending-scroll .left-arrow", '#now-trending-scroll .right-arrow')

