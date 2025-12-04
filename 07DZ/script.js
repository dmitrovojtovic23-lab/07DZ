/* const tabButtons = document.querySelectorAll('.tab-btn');
// const tabContents = document.querySelectorAll('.tab-content');
// tabButtons.forEach(btn => {
//     btn.onclick = () => {
//         tabButtons.forEach(b => b.classList.remove('active'));
//         tabContents.forEach(c => c.classList.remove('active'));
//         btn.classList.add('active');
//         document.getElementById(btn.dataset.tab).classList.add('active');
//     };
// });
//Завданя 2
// document.querySelectorAll('.remove').forEach(btn => {
//     btn.onclick = () => btn.parentElement.remove();
 });*/
//Завдання 3
// let index = 0;
// const lights = document.querySelectorAll('.light');

// function updateLights() {
//     lights.forEach(l => l.classList.remove('active'));
//     lights[index].classList.add('active');
// }

// updateLights();

// document.getElementById('nextBtn').onclick = () => {
//     index = (index + 1) % 3;
//     updateLights();
// };
//Завдання 4
// const list = document.getElementById('booksList');
// list.addEventListener('click', (e) => {
//     const item = e.target.closest('.book');
//     if (!item) return;
//     if (item.classList.contains('active')) {
//         item.classList.remove('active');
//         return;
//     }
//     const prev = list.querySelector('.book.active');
//     if (prev) prev.classList.remove('active');
//     item.classList.add('active');
// });
//додаткове Завдання 1
const btn = document.getElementById("btnGenerate");
const output = document.getElementById("numberBox");
btn.addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 101); 
    output.textContent = randomNum;
});