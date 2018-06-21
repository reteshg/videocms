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
		//history.pushState (null, '', '"/"+loc.toLowerCase()');
		//window.location = "/"+loc.toLowerCase();
	};
	for (var i = 0; i < listItems.length; i++) {
    	listItems[i].addEventListener('click', makeactive); 
	}
	/*-------------------------Accordion close for Desktop---------------------------*/
	function adjustCollapseView() {
		var desktopView = $(document).width();
		if(desktopView >= "768") {
			$("#accordion td.crdheader[data-toggle]").attr("data-toggle","");
			$("#accordion .collapse").removeClass("show").css("height","auto");
		}else {
			$("#accordion td.crdheader[data-toggle]").attr("data-toggle","collapse");
			//$("#accordion .collapse").removeClass("").css("height","0");
			$("#accordion .collapse:first").addClass("show").css("height","auto");
		}
	}
	$(function() {
		adjustCollapseView();
		$(window).on("resize","load", function(){
			adjustCollapseView();
		});
	});
});