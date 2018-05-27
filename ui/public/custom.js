// JavaScript Document
"use strict";
$(document).ready(function() {
    $('button.navbar-toggler').on('click', function() {    /*--------Sidebar toggle-------*/
		$('.off-canvas-sidebar').show('slide', {direction: 'left'}, 1000);
		$('.main-panel').show('slide', {direction: 'left'}, 1000);
		$('.navbar-toggler').hide();
		$('.close').show();
		$('body').addClass('nav-open');
		
		var div = '<div id="bodyClick"></div>';
		$(div).appendTo("body").click(function() {
			$('body').removeClass('nav-open');
			$('#bodyClick').remove();
			$('.navbar-toggler').show();
			$('.close').hide();
		});
	});
	/*--------------------Sidebar links click add active class-----------------------*/
	var makeactive; var loc;
	var sidebarList = document.getElementById("navlist");
	var listItems = sidebarList.getElementsByClassName("list-group-item");
	makeactive = function () {
		for (var i = 0; i < listItems.length; i++) {
			listItems[i].classList.remove('active');
			this.classList.add('active');		
		}
		loc = this.innerText;
		window.location = "/"+loc.toLowerCase();
	};
	for (var i = 0; i < listItems.length; i++) {
    	listItems[i].addEventListener('click', makeactive); 
	}
});