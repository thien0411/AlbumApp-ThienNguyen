
function addAlbum() {

  inputAlbumTitle = $("#inputAlbumTitle").val();

  inputBand = $("#inputBand").val();

  inputReleaseYear = $("#inputReleaseYear").val();



  console.log(inputAlbumTitle);
  console.log(inputBand);
  console.log(inputReleaseYear);




  if(inputReleaseYear < 1800 ||  inputReleaseYear > 2016 || isNaN(inputReleaseYear) ){

      addErrorBox("Please input a different release year");

  } else {


  numRow = $("#albumTable > tbody > tr").size() ;


  $("#albumTable tr:last").after("<tr> <td> " + numRow +  "<td>" + inputAlbumTitle + "</td> <td>" + inputBand + "</td> <td>" + inputReleaseYear + "</td> <td><button type='button' class='btn btn-xs btn-danger' onclick='removeItem(this)'>&times;</button></td> </tr>" );


  $("#albumTable tr:last").hide().fadeIn("slow");


    $("#inputAlbumTitle").val("");
    $("#inputBand").val("");
    $("#inputReleaseYear").val("");
  }
}

function addErrorBox(errorMessage) {
  var errorDiv = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                 '<button type="button" class="close" data-dismiss="alert">' +
                 '<span aria-hidden="true">&times;</span>' +
                 '<span class="sr-only">Close</span></button>' +
                 '<strong>ERROR!</strong> '+errorMessage+'</div>';
  $('#errorArea').empty();
  $('#errorArea').append(errorDiv);
  $('#errorArea').hide().fadeIn("slow");
}

function removeItem(item) {
  $(item).parent().parent().fadeOut("slow", function() {
    $(this).remove();
  });
}
