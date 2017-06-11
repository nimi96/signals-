
// Userlist data array for filling in info box
var userListData = [1];

// DOM Ready =============================================================
$(document).ready(function() {
    
    populateTable1();

});
// Functions =============================================================
// Fill table with data
function populateTable1() {

    // jQuery AJAX call for JSON
    $.getJSON( '/users/data1', function(data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            
         var abcz=this.name;

		xyz=JSON.stringify(abcz);
		console.log(xyz);

		if (xyz[1]==0) 
		{

 console.log("red2");

	 	document.getElementById("redlight2").innerHTML = "<img src=/images/red.jpg >" ;
		document.getElementById("yellowlight2").innerHTML = "<img src=/images/yello_off.jpg>" ;
		document.getElementById("greenlight2").innerHTML = "<img src=/images/greenoff.jpg  height='42' width='42' >" ;
		document.getElementById("greenleft2").innerHTML = "<img src=/images/left_off.jpg>" ;
		document.getElementById("greenright2").innerHTML = "<img src=/images/right_off.jpg>" ;
		document.getElementById("blank3").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		document.getElementById("blank4").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ; 		
       document.getElementById("pcrosinr2").innerHTML = "<img src=/images/walk.jpg  height='42' width='42'>" ;
		document.getElementById("pcrosing2").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;  
        //console.log("hello");

		} 

	else if(xyz[1]==1) {



	     console.log("yellow2");

		document.getElementById("redlight2").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ;
		document.getElementById("yellowlight2").innerHTML = "<img src=/images/yello.jpg> <Br> " ;
		
		document.getElementById("greenlight2").innerHTML = "<img src=/images/greenoff.jpg  height='42' width='42'  ><br> " ;
		
		document.getElementById("greenleft2").innerHTML = "<img src=/images/left_off.jpg>" ;
		document.getElementById("greenright2").innerHTML = "<img src=/images/right_off.jpg>" ;
		document.getElementById("blank3").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
		document.getElementById("blank4").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		
        document.getElementById("pcrosinr2").innerHTML = "<img src=/images/walk.jpg  height='42' width='42'>" ;
		document.getElementById("pcrosing2").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;  

		}

else if(xyz[1]==2)   {


console.log("green2");

document.getElementById("redlight2").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ; ;
document.getElementById("yellowlight2").innerHTML = "<img src=/images/yello_off.jpg>" ;
document.getElementById("greenlight2").innerHTML = "<img src=/images/gree.jpg>" ;
document.getElementById("greenleft2").innerHTML = "<img src=/images/left_off.jpg>" ;
document.getElementById("greenright2").innerHTML = "<img src=/images/right_off.jpg>" ;
document.getElementById("blank3").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
document.getElementById("blank4").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
document.getElementById("pcrosinr2").innerHTML = "<img src=/images/walk_on1.jpg  height='42' width='42'>" ;
document.getElementById("pcrosing2").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;

}


else{

console.log("nodata");
 
document.getElementById("redlight2").innerHTML = "nodata" ;
document.getElementById("yellowlight2").innerHTML = "nodata" ;
document.getElementById("greenlight2").innerHTML = "nodata" ;
document.getElementById("greenleft2").innerHTML = "nodata" ;
document.getElementById("greenright2").innerHTML = "nodata" ;
document.getElementById("blank3").innerHTML = "nodata" ;
document.getElementById("blank4").innerHTML = "nodata";
document.getElementById("pcrosinr2").innerHTML = "nodata" ;
document.getElementById("pcrosing2").innerHTML = "nodata";
}
});

 });
     // Inject the whole content string into our existing HTML tablz
    
};




var myVar1;

myVar1 = setInterval(populateTable1, 5000);























