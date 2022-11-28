$(document).ready(function(){

  $(".closebtn").click(function(){

    $(".ads").hide(1000);

  })
    
  });











const buttons = document.querySelectorAll("a");
         buttons.forEach((button) => {
           button.onclick = function(e){
             let x = e.clientX - e.target.offsetLeft;
             let y = e.clientY - e.target.offsetTop;
             let ripple = document.createElement("span");
             ripple.style.left = `${x}px`;
             ripple.style.top = `${y}px`;
             this.appendChild(ripple);
             setTimeout(function(){
               ripple.remove();
             }, 600); // 1second = 1000ms
           }
         });




        //  ==========full Screen===========================================
         document.querySelectorAll(".photoCI").forEach( imageCI =>{
          imageCI.onclick = ( ) =>{
             if (imageCI.webkitRequestFullscreen ){
                imageCI.webkitRequestFullscreen();
             }
          }
          
          })

          let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


