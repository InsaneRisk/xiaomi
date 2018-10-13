window.onload = function () {
	var ulDom = document.getElementById('carousel-list');
	var leftDom = document.getElementById('left');
	var rightDom = document.getElementById('right');
	var btnDom = document.getElementById('buttons');
	var chbtnDom = btnDom.children;
	var active = 0;
	for (var i = 0; i < chbtnDom.length; i++) {
		(function (num) {
			chbtnDom[num].onclick = function () {
				ulDom.style.marginLeft = -1226 * num + 'px';
				chbtnDom[num].className += ' bots';
				chbtnDom[active].className = chbtnDom[active].className.replace('bots', '');
				active = num;
			}
		})(i)
	}
	// console.log(ulDom,leftDom,rightDom,btnDom,chbtnDom);
}