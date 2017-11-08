var navigation = document.getElementById('navigation');
var burger_toggle = document.getElementById('burger_toggle');
var dropdown_menu = document.getElementById('dropdown');
dropdown_menu.style.display = 'none';

burger_toggle.addEventListener('mouseup', function() {
	navigation.style.background = dropdown_menu.style.display === 'none' ? '#fff' : '';
	dropdown.style.background = dropdown_menu.style.display === 'none' ? '#fff' : '';
	dropdown_menu.style.display = dropdown_menu.style.display === 'none' ? 'block' : 'none';
});

window.addEventListener('resize', function(e) {
	if(screen.width > 980) {
		navigation.style.background = '';
		dropdown_menu.style.display = 'none';
	}
});