
// Userlist data array for filling in info box
var userListData = [1];

// DOM Ready =============================================================
$(document).ready(function() {
    
    populateTable2();

});
// Functions =============================================================
// Fill table with data
function populateTable2() {

    // jQuery AJAX call for JSON
    $.getJSON( '/users/data2', function(data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            
         var abczz=this.name;

		xyz=JSON.stringify(abczz);
		console.log(xyz);

		if (xyz[1]==0) 
		{

 console.log("red3");

	 	document.getElementById("redlight3").innerHTML = "<img src=/images/red.jpg>" ;
		document.getElementById("yellowlight3").innerHTML = "<img src=/images/yello_off.jpg>" ;
		document.getElementById("greenlight3").innerHTML = "<img src=/images/greenoff.jpg  height='42' width='42' >" ;
		document.getElementById("greenleft3").innerHTML = "<img src=/images/left_off.jpg>" ;
		document.getElementById("greenright3").innerHTML = "<img src=/images/right_off.jpg>" ;
		document.getElementById("blank5").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		document.getElementById("blank6").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ; 		

document.getElementById("pcrosinr3").innerHTML = "<img src=/images/walk.jpg  height='42' width='42'>" ;
document.getElementById("pcrosing3").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;       
        //console.log("hello");

		} 

	else if(xyz[1]==1) {



	     console.log("yellow3");

		document.getElementById("redlight3").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ;
		document.getElementById("yellowlight3").innerHTML = "<img src=/images/yello.jpg> <Br> " ;
		
		document.getElementById("greenlight3").innerHTML = "<img src=/images/greenoff.jpg  height='42' width='42'  ><br> " ;
		
		document.getElementById("greenleft3").innerHTML = "<img src=/images/left_off.jpg>" ;
		document.getElementById("greenright3").innerHTML = "<img src=/images/right_off.jpg>" ;
		document.getElementById("blank5").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
		document.getElementById("blank6").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;

		document.getElementById("pcrosinr3").innerHTML = "<img src=/images/walk.jpg  height='42' width='42'>" ;
document.getElementById("pcrosing3").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;
		


		}

else if(xyz[1]==2)   {


console.log("green3");

document.getElementById("redlight3").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ; ;
document.getElementById("yellowlight3").innerHTML = "<img src=/images/yello_off.jpg>" ;
document.getElementById("greenlight3").innerHTML = "<img src=/images/gree.jpg>" ;
document.getElementById("greenleft3").innerHTML = "<img src=/images/left_off.jpg>" ;
document.getElementById("greenright3").innerHTML = "<img src=/images/right_off.jpg>" ;
document.getElementById("blank5").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
document.getElementById("blank6").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;

document.getElementById("pcrosinr3").innerHTML = "<img src=/images/walk_on1.jpg  height='42' width='42'>" ;
document.getElementById("pcrosing3").innerHTML = "<img src=/images/stand.jpg  height='42' width='42'>" ;

}


else{

console.log("nodata");
 
document.getElementById("redlight3").innerHTML = "nodata" ;
document.getElementById("yellowlight3").innerHTML = "nodata" ;
document.getElementById("greenlight3").innerHTML = "nodata" ;
document.getElementById("greenleft3").innerHTML = "nodata" ;
document.getElementById("greenright3").innerHTML = "nodata" ;
document.getElementById("blank5").innerHTML = "nodata" ;
document.getElementById("blank6").innerHTML = "nodata";
document.getElementById("pcrosinr3").innerHTML = "nodata" ;
document.getElementById("pcrosing3").innerHTML = "nodata" ;
}
});

 });
     // Inject the whole content string into our existing HTML tablz
    
};




var myVar2;

myVar2 = setInterval(populateTable2, 5000);























