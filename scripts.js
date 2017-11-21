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
        $('#'+this.id).css("background-color", "#3D3030");

    });
    
    var itemsRequested = [];
    var itemsReferences = [];

    // Function for adding elements to the list of needs
    var clothingList = document.getElementById("clothing").getElementsByTagName('li');
    for (var i=0; i<clothingList.length; i++) {
        clothingList[i].addEventListener('click', addToMyNeedsList, false);
    }
    
    var foodList = document.getElementById("food").getElementsByTagName('li');
    for (var i=0; i<foodList.length; i++) {
        foodList[i].addEventListener('click', addToMyNeedsList, false);
    }
    
    var rescueList = document.getElementById("rescue").getElementsByTagName('li');
    for (var i=0; i<rescueList.length; i++) {
        rescueList[i].addEventListener('click', addToMyNeedsList, false);
    }

    function satisfyNeed() {
        var newNeed = this.textContent||this.innerText; 
        var index = itemsRequested.indexOf(newNeed);
        var str = document.getElementById("myNeedsList").children[0].innerHTML;
        document.getElementById("myNeedsList").children[0].innerHTML = str.replace('<li><input type="checkbox">'+itemsRequested[index]+"</li>","");
        itemsRequested.splice(index, 1);
        // Enabling the checkbox and unchecking it 
        document.getElementById(newNeed.toString()).removeAttribute("disabled");
        document.getElementById(newNeed.toString()).checked = false;
        var selectedNeedsList = document.getElementById("selectedNeeds").getElementsByTagName('li');
        for (var i=0; i<selectedNeedsList.length; i++) {
            selectedNeedsList[i].addEventListener('click', satisfyNeed, false);
        }
    }

    function revertDefaultMessage() {
        messaging.innerHTML = "";
    }

    function messageSelection(option) {
        // clear timeouts
        var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        // clear timeouts

        if (option == 1) {
            messaging.innerHTML = "This item has been added to your needs";
            setTimeout(revertDefaultMessage, 1000);
        }
        else if (option == 2) {
            messaging.innerHTML = "This item has already been marked as a need";
            setTimeout(revertDefaultMessage, 1000);
        }
    }

    function addToMyNeedsList(){
        var newNeed = this.textContent||this.innerText; 
        if(itemsRequested.indexOf(newNeed) == -1){
            messageSelection(1);
            itemsRequested.push(newNeed);
            console.log(document.getElementById(""+newNeed.toString() + ""));
            document.getElementById("myNeedsList").children[0].innerHTML += '<li><input type="checkbox">'+itemsRequested[itemsRequested.length-1]+'</li>';
            // Ensuring that the same checkbox isn't selected again
            document.getElementById(newNeed.toString()).setAttribute("disabled", "true");
            var selectedNeedsList = document.getElementById("selectedNeeds").getElementsByTagName('li');
            for (var i=0; i<selectedNeedsList.length; i++) {
                selectedNeedsList[i].addEventListener('click', satisfyNeed, false);
            }
        }
        else{
            messageSelection(2);
        }
    
    }
});

