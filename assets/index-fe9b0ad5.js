(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const v=document.querySelector(".btn"),L=()=>{window.scrollY>400?v.style.visibility="visible":v.style.visibility="hidden"};document.addEventListener("scroll",()=>{L()});v.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".mobile-link"),t=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const r=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};o.addEventListener("click",t),l.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}),s.forEach(e=>{e.addEventListener("click",()=>{n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)})})})();let i=1;c(i);let b=document.getElementById("prev"),h=document.getElementById("next"),g=document.getElementById("per"),E=document.getElementById("nex");h.addEventListener("click",function(){c(i+=1),a()});E.addEventListener("click",function(){c(i+=1),a()});b.addEventListener("click",function(){c(i-=1),a()});g.addEventListener("click",function(){c(i-=1),a()});function c(n){let o=document.getElementsByClassName("myslide");n>o.length&&(i=1),n<1&&(i=o.length);for(let l of o)l.style.display="none";o[i-1].style.display="flex"}var y=0;a();function a(){clearInterval(y),y=setInterval(function(){i++,c(i)},5e3)}var d=7;setInterval(()=>{d=d-1,d||(d=7),document.getElementById("timeVisual").innerHTML=d},1e3);(()=>{const n={form:document.getElementById("yacht-form"),modal:document.querySelector("[data-modal-rent]"),closeModalBtn:document.querySelector("[data-modal-close-rent]"),inputs:document.querySelectorAll("input, textarea"),phoneInput:document.getElementById("phone")};n.phoneInput.addEventListener("input",t),n.form.addEventListener("submit",o),n.closeModalBtn.addEventListener("click",()=>{l(),s()});function o(e){e.preventDefault();const r=n.form.querySelectorAll("input[required], textarea[required]");Array.from(r).every(p=>p.value.trim()!=="")&&l()}function l(){n.modal.classList.toggle("is-hidden")}function s(){n.inputs.forEach(e=>{e.value=""})}function t(){n.phoneInput.value=n.phoneInput.value.replace(/[^0-9+]/g,"")}})();const u=document.querySelector(".reweivs-buut-cont-one"),m=document.querySelector(".reweivs-buut-cont-two"),f=document.querySelector(".reweivs-buut-cont-sry");u.addEventListener("click",()=>{u.classList.add("active"),m.classList.remove("active"),f.classList.remove("active")});m.addEventListener("click",()=>{u.classList.remove("active"),m.classList.add("active"),f.classList.remove("active")});f.addEventListener("click",()=>{u.classList.remove("active"),m.classList.remove("active"),f.classList.add("active")});
