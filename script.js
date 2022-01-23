let button = document.getElementById('button');
let navbar = document.getElementById('navbar');


button.addEventListener('click', navbarOn);

function navbarOn(){
	button.navbar.toggle('active');
	navbar.navbar.toggle('active');

}
