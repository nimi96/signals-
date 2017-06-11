
// Userlist data array for filling in info box
var userListData = [1];

// DOM Ready =============================================================
$(document).ready(function() {
    
    populateTable3();

});
// Functions =============================================================
// Fill table with data
function populateTable3() {

    // jQuery AJAX call for JSON
    $.getJSON( '/users/data3', function(data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            
         var abczz=this.name;

		xyz=JSON.stringify(abczz);
		console.log(xyz);

		if (xyz[1]==0) 
		{

 console.log("red4");

	 	document.getElementById("redlight4").innerHTML = "<img src=/images/red.jpg>" ;
		document.getElementById("yellowlight4").innerHTML = "<img src=/images/yello_off.jpg>" ;
		document.getElementById("greenlight4").innerHTML = "<img src=/images/greenoff.jpg  height='42' width='42' >" ;
		document.getElementById("greenleft4").innerHTML = "<img src=/images/left_off.jpg>" ;
		document.getElementById("greenright4").innerHTML = "<img src=/images/right_off.jpg>" ;
		document.getElementById("blank7").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		document.getElementById("blank8").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		 document.getElementById("pcrosinr4").innerHTML = "<img src=/images/walk.jpg  height='42' width='42'>" ;
		document.getElementById("pcrosing4").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;   		
       

        //console.log("hello");


		} 

	else if(xyz[1]==1) {



	     console.log("yellow4");

		document.getElementById("redlight4").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ;
		document.getElementById("yellowlight4").innerHTML = "<img src=/images/yello.jpg> <Br> " ;
		
		document.getElementById("greenlight4").innerHTML = "<img src=/images/greenoff.jpg  height='42' width='42'  ><br> " ;
		
		document.getElementById("greenleft4").innerHTML = "<img src=/images/left_off.jpg>" ;
		document.getElementById("greenright4").innerHTML = "<img src=/images/right_off.jpg>" ;
		document.getElementById("blank7").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
		document.getElementById("blank8").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		
 document.getElementById("pcrosinr4").innerHTML = "<img src=/images/walk.jpg  height='42' width='42'>" ;
		document.getElementById("pcrosing4").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;  

		}

else if(xyz[1]==2)   {


console.log("green4");

document.getElementById("redlight4").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ; ;
document.getElementById("yellowlight4").innerHTML = "<img src=/images/yello_off.jpg>" ;
document.getElementById("greenlight4").innerHTML = "<img src=/images/gree.jpg>" ;
document.getElementById("greenleft4").innerHTML = "<img src=/images/left_off.jpg>" ;
document.getElementById("greenright4").innerHTML = "<img src=/images/right_off.jpg>" ;
document.getElementById("blank7").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
document.getElementById("blank8").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
document.getElementById("pcrosinr4").innerHTML = "<img src=/images/walk_on1.jpg  height='42' width='42'>" ;
document.getElementById("pcrosing4").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;


}


else{

console.log("nodata");
 
document.getElementById("redlight4").innerHTML = "nodata" ;
document.getElementById("yellowlight4").innerHTML = "nodata" ;
document.getElementById("greenlight4").innerHTML = "nodata" ;
document.getElementById("greenleft4").innerHTML = "nodata" ;
document.getElementById("greenright4").innerHTML = "nodata" ;
document.getElementById("blank7").innerHTML = "nodata" ;
document.getElementById("blank8").innerHTML = "nodata";

document.getElementById("pcrosinr4").innerHTML = "nodata" ;
document.getElementById("pcrosing4").innerHTML = "nodata" ;

}
});

 });
     // Inject the whole content string into our existing HTML tablz
    
};




var myVar3;

myVar3 = setInterval(populateTable3, 5000);























