console.log("runed")

//let but_a = [{isActive:false,id:''},{isActive:false,id:''}]
let but_a = [];
let a =0;
function PickColor(color='',id='',id_op='',color_op=''){
    
  document.getElementById(id).style.backgroundColor = color;

  document.getElementById(id_op).style.backgroundColor = color_op;
}