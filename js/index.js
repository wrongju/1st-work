const btn = document.querySelectorAll('.cena');
// const stl = document.querySelectorAll('.arrow');
Array.prototype.forEach.call(btn, (elem) => {
   elem.addEventListener('click', () => {
     let perentItem = elem.parentElement.parentElement;
     let stl = document.querySelectorAll('.arrow');
     elem.classList.toggle('after-none');
     stl.classList.toggle('up');
   })
 })