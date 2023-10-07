/*
File: menu.js
Student's Name: LUCIANNA MENDONCA DOMINGUES
Student ID: 301307882
Date: OCTOBER 6, 2023
*/

$(document).ready(function(){
    let element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});