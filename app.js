document.addEventListener('mousemove', function (e) {
   const r = Math.round((e.pageX * 255) / window.innerWidth);
   const b = Math.round((e.pageY * 255) / window.innerHeight);
   document.body.style.backgroundColor = `rgb(${r}, 0, ${b})`;
});
