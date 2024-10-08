import { clinicalSummary, documents, feedback, medications, notice, timeline } from "/scripts/portalData.js";

console.log(timeline)


let rightSidebar = document.querySelector(".sidebar");
let rightSidebarLinks = rightSidebar.querySelectorAll("li");
let display = document.querySelector(".display");

display.innerHTML = notice;

rightSidebarLinks[0].addEventListener("click",function() {
    display.innerHTML = notice//appointments;
});

rightSidebarLinks[1].addEventListener("click",function() {
    display.innerHTML = clinicalSummary;
});

rightSidebarLinks[2].addEventListener("click",function() {
    display.innerHTML = documents;
});

rightSidebarLinks[3].addEventListener("click",function() {
    display.innerHTML = notice//library;
});

rightSidebarLinks[4].addEventListener("click",function() {
    display.innerHTML = medications;
});

rightSidebarLinks[5].addEventListener("click",function() {
    display.innerHTML = notice//messages;
});

rightSidebarLinks[6].addEventListener("click",function() {
    display.innerHTML = feedback;
});

rightSidebarLinks[7].addEventListener("click",function() {
    display.innerHTML = timeline;
});

rightSidebarLinks[8].addEventListener("click",function() {
    display.innerHTML = notice//visits;
});

rightSidebarLinks[9].addEventListener("click",function() {
    display.innerHTML = notice//wellness;
});