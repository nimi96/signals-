
// Userlist data array for filling in info box
var userListData = [1];

// DOM Ready =============================================================
$(document).ready(function() {
    
    populateTable();

});
// Functions =============================================================
// Fill table with data
function populateTable() {

    // jQuery AJAX call for JSON
    $.getJSON( '/users/data', function(data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            
         var abc=this.name;

		xyz=JSON.stringify(abc);
		//console.log(xyz);

		if (xyz[1]==0) 
		{

 console.log("red");

	 	document.getElementById("redlight1").innerHTML = "<img src=/images/red.jpg>" ;
		document.getElementById("yellowlight1").innerHTML = "<img src=/images/yello_off.jpg>" ;
		document.getElementById("greenlight1").innerHTML = "<img src=/images/greenoff.jpg  height='42' width='42' >" ;
		document.getElementById("greenleft").innerHTML = "<img src=/images/left_off.jpg>" ;
		document.getElementById("greenright").innerHTML = "<img src=/images/right_off.jpg>" ;
		document.getElementById("blank1").innerHTML = "<img src=/images/black.png  height='42' width='42'>" 
				document.getElementById("blank2").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		document.getElementById("pcrosinr1").innerHTML = "<img src=/images/walk.jpg  height='42' width='42'>" ;
		document.getElementById("pcrosing1").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;  		
       
        //console.log("hello");

		} 

	else if(xyz[1]==1) {



	     console.log("yellow");
		document.getElementById("redlight1").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ;
		document.getElementById("yellowlight1").innerHTML = "<img src=/images/yello.jpg> <Br> " ;
		
		document.getElementById("greenlight1").innerHTML = "<img src=/images/greenoff.jpg  height='42' width='42'  ><br> " ;
		
		document.getElementById("greenleft").innerHTML = "<img src=/images/left_off.jpg>" ;
		document.getElementById("greenright").innerHTML = "<img src=/images/right_off.jpg>" ;
		document.getElementById("blank1").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
		document.getElementById("blank2").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		document.getElementById("pcrosinr1").innerHTML = "<img src=/images/walk.jpg  height='42' width='42'>" ;
		document.getElementById("pcrosing1").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;  
		


		}

else if(xyz[1]==2)   {


console.log("green");

document.getElementById("redlight1").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ; ;
document.getElementById("yellowlight1").innerHTML = "<img src=/images/yello_off.jpg>" ;
document.getElementById("greenlight1").innerHTML = "<img src=/images/gree.jpg>" ;
document.getElementById("greenleft").innerHTML = "<img src=/images/left_off.jpg>" ;
document.getElementById("greenright").innerHTML = "<img src=/images/right_off.jpg>" ;
document.getElementById("blank1").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
document.getElementById("blank2").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
document.getElementById("pcrosinr1").innerHTML = "<img src=/images/walk_on1.jpg  height='42' width='42'>" ;
document.getElementById("pcrosing1").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;  


}


else{

console.log("nodata");
 
document.getElementById("redlight1").innerHTML = "nodata" ;
document.getElementById("yellowlight1").innerHTML = "nodata" ;
document.getElementById("greenlight1").innerHTML = "nodata" ;
document.getElementById("greenleft").innerHTML = "nodata" ;
document.getElementById("greenright").innerHTML = "nodata" ;
document.getElementById("blank1").innerHTML = "nodata" ;
document.getElementById("blank2").innerHTML = "nodata";
document.getElementById("pcrosinr1").innerHTML = "nodata" ;
document.getElementById("pcrosing1").innerHTML = "nodata" ;
}
});

 });
     // Inject the whole content string into our existing HTML tablz
    
};




var myVar;

myVar = setInterval(populateTable, 5000);























