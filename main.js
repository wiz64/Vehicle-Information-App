let data = document.querySelector("#t1");
let a=0;
function send() {
  let no = document.querySelector("#t1").value;
  console.log(no);
  
}




document.querySelector("#t1").addEventListener("keydown", function (e) {

  setTimeout(function(){ 
       
    console.log(e.target.value.length);
    if (e.target.value.length == "2" ) {
     
    e.target.value = e.target.value + " ";
    
  }
  if (e.target.value.length == "5" && isNaN(e.target.value[4]) && e.target.value[4]!=' '  ) {
    e.target.value = e.target.value.substr(0,4) + " "+e.target.value[4];
    
  }
  else if(e.target.value.length == "5" &&  e.target.value[4]!=' ') {
    e.target.value = e.target.value + " ";
    
  }
   
  if(e.target.value.length >6 && !isNaN(e.target.value[e.target.value.length-1])  && e.target.value[e.target.value.length-1]!=' ' && isNaN(e.target.value[e.target.value.length-2]))
  { 
   console.log('length'+e.target.value.length);
   console.log('value-1 '+e.target.value[e.target.value.length-1]);
    swap=e.target.value[e.target.value.length-1];
    console.log('swap '+swap);
    e.target.value=  e.target.value.substr(0,e.target.value.length-1) + " "+`${swap}`;

  }

}, 90);
    
  
});
  
