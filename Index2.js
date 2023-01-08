let gttsv =0;
let mam =0;
let zz=0;
let xk=0;

document.getElementById('hu1').style.visibility ="hidden" ;
document.getElementById('m').style.visibility ="hidden" ;
document.getElementById('m2').style.visibility ="visible" ;
document.getElementById('m3').style.visibility ="hidden" ;
document.getElementById('m4').style.visibility ="hidden" ;
document.getElementById('color').style.visibility ="hidden"
document.getElementById('daynight').style.visibility ="hidden";




  function menu() {
    document.getElementById('hu1').style.visibility = "visible ";
    document.getElementById('m').style.visibility = "visible ";
    document.getElementById('m2').style.visibility ="hidden" ;
    document.getElementById('m3').style.visibility ="visible" ;
    document.getElementById('m4').style.visibility ="visible" ;
    document.getElementById('color').style.visibility ="visible" ;
    document.getElementById('daynight').style.visibility ="visible";
  }
    function menu2() {
      document.getElementById('hu1').style.visibility ="hidden" ;
      document.getElementById('m').style.visibility = "hidden";
      document.getElementById('m2').style.visibility = "visible";
      document.getElementById('m3').style.visibility = "hidden";
      document.getElementById('m4').style.visibility ="hidden" ;
      document.getElementById('color').style.visibility ="hidden" ;
      document.getElementById('daynight').style.visibility ="hidden";
    }
    

/*onload =  function gtts() {
	setTimeout(doSomething2, 800);
	function doSomething2() {
console.log('game time tick speed +1');
gttsv += 1;

          console.log(gttsv);
	setTimeout(800);
	return gtts();
}}
*/
onload = function gt() {
	setTimeout(doSomething3, 300);
	function doSomething3() {
//Quicker reset kp engine
mam+=1;
if(xk===1){
gttsv+=1;
}
          console.log('load2.='+mam+gttsv);
if (mam>2) {
  mam=0;
  xt=0;
  yt=0;
}
if(xk===1 && gttsv ===290) {
  var audioFile = new Audio('./Sonarmylove.wav');
  audioFile.play()
  gttsv = 0;
  
}
//music

 

	setTimeout(300  );
	return gt();
}}
 function myFunction2(event)  {
   zz += 2;
   if (zz > 1) { 
   xk=1;
     zz -= 400;
     var audioFile = new Audio('./Sonarmylove.wav');
     audioFile.play()
     
     
   
   
   }
   }
     
       
 
 function hidedb(){
   document.getElementById('console').style.visibility ="hidden" ;
   renderer();
 }
 
 if (camera.position.y < -9) {
  camera.position.y += 20;
}

 
 