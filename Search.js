var InputSearch = document.getElementById("InputSearchEverything");

var AvailableResultsForSearch = ["brasil","india", "chicago"];

function SearchEverything()
{

    Destination = InputSearch.value;

    if(AvailableResultsForSearch.includes(Destination)){
        console.log("Achouuuu");
    }else{
        console.log("Não achouuuu");
    }
    
}