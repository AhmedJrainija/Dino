document.body.addEventListener('keydown', (event)=>{
  if ((event.key === ' ') && (press === 0)) {
      press++;
      score_start = 1;
      block_start = 1;
      event.preventDefault();
      jump();

      setTimeout(()=> {
        land();
      },350)

      setTimeout(()=>{
        press = 0;
      },550)
} else if ((event.key === ' ') && (gm.classList.contains('gm2'))) {
  event.preventDefault();
  location.reload();
}
})