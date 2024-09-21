const button1 =document.getElementById("buttons1");
const button2 =document.getElementById("buttons2");



 function buttonOn(button){

    
    if(button=='buttons1'){
        button1.classList.add('illuminate');
        button1.classList.remove('spento');
        button2.classList.add('spento');
        button2.classList.remove('illuminate');
       document.getElementById('section1').style.display='block';
       document.getElementById('section2').style.display='none';
    }else{
        button2.classList.add('illuminate');
        button2.classList.remove('spento');
        button1.classList.remove('illuminate');
        button1.classList.add('spento');
        document.getElementById('section1').style.display='none';
        document.getElementById('section2').style.display='block';
    }
    
 }
 