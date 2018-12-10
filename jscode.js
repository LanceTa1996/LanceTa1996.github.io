function submit1(){
	alert("The form was submitted.");
}

function add_date1(){

	var x = document.createElement("INPUT");
    x.setAttribute("type", "date");                         
	document.getElementById("main1").appendChild(x);

}


function add_date2(){

	var x = document.createElement("INPUT");
    x.setAttribute("type", "date");                         
	document.getElementById("main2").appendChild(x);

}

function add_date3(){

	var x = document.createElement("INPUT");
    x.setAttribute("type", "date");                         
	document.getElementById("main3").appendChild(x);

}

function add_date4(){

	var x = document.createElement("INPUT");
    x.setAttribute("type", "date");                         
	document.getElementById("main4").appendChild(x);
	
}

function add_date5(){

	var x = document.createElement("INPUT");
    x.setAttribute("type", "date");                         
	document.getElementById("main5").appendChild(x);

}

function add_date_btn(){
	
	var add_date_btn = document.createElement("BUTTON");
	var t = document.createTextNode("Add Date");
    add_date_btn.appendChild(t);
	add_date_btn.setAttribute("onclick","add_date();");
	add_date_btn.setAttribute("onsubmit","return false;");
	var element = document.getElementById("main");
    element.appendChild(add_date_btn);
	
}

function add_course(){

	var para1 = document.createElement("p");
	var node1 = document.createTextNode("Enter the course for your exam. Please put your course abbreviation followed by the course number. Example: MATH 151");
	para1.appendChild(node1);
	
	var course = document.createElement("INPUT");
	course.setAttribute("type", "text","return false;");
	
	var para2 = document.createElement("p");
	var node2 = document.createTextNode("Please click on the add date button to add an exam date for your course. Click multiple times to add multiple dates.");
	para2.appendChild(node2);
	
	var element = document.getElementById("main");

	element.appendChild(para1);
	element.appendChild(course);
	element.appendChild(para2);
	
}


function stopRKey(evt) { 
  var evt = (evt) ? evt : ((event) ? event : null); 
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
} 

document.onkeypress = stopRKey; 
