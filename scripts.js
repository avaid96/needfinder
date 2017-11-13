$(document).ready(function(){

    $('.needCard').on('click', function() { 
        var showId = this.id.slice(0,-4);
        $('.needTile').each(function() { 
            if($(this).hasClass('active')) { 
                $(this).removeClass('active');
                $(this).addClass('inactive');
            } 
            if($('#' + showId).hasClass('inactive')) { 
                $('#' + showId).removeClass('inactive');
            } 
        });

        // Change the background color of the need cards
        $('.needCard').each(function() { 
            $('#'+this.id).css("background-color", "");    
        }) 

        // Change the color of the selected tile, and display all the items within
        $('#default').addClass('inactive');
        $('#' + showId).addClass('active');
        $('#'+this.id).css("background-color", "#2ECC71");

    });
    
    // Function for adding elements to the list of needs
    // var lis = document.getElementById("clothing").getElementsByTagName('li');
    // for (var i=0; i<lis.length; i++) {
    //     lis[i].addEventListener('click', doStuff, false);
    // }
    
    // function doStuff() {
    //     var ul = document.getElementById("mylist");
    //     var li = document.createElement("li");
    //     li.appendChild(document.createTextNode(this.text));
    //     ul.appendChild(li);
    // }
});

