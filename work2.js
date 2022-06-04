let count = 0

const value = document.querySelector("#value")
const boss= document.querySelectorAll (".btn")

boss.forEach ( function (btn) {
btn.addEventListener ('click', function (e) {
  const styles= e.currentTarget.classList;
  
  if(styles.contains ("decrease")){
      count--;
  }

  else if(styles.contains("increase")){
      count++;
  }

  else{
      count =0;
  }
  if(count > 0){
      value.style.color = 'green';
  }

  if(count < 0){
      value.style.color = 'red';
  }
  if (count===0){
      value.style.color = 'blue';
  }
if(count > 50){
    value.textContent = 'stop pressing that button, you to like play';
}
  value.textContent=count;

});

});