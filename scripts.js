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
    
    var itemsInCart = [];
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
        var index = itemsInCart.indexOf(newNeed);
        var str = document.getElementById("myNeedsList").children[0].innerHTML;
        document.getElementById("myNeedsList").children[0].innerHTML = str.replace('<li><input type="checkbox">'+itemsInCart[index]+"</li>","");
        itemsInCart.splice(index, 1);
    }
       
    function addToMyNeedsList(){
        var newNeed = this.textContent||this.innerText; 
        if(itemsInCart.indexOf(newNeed) == -1){
            itemsInCart.push(newNeed);
            document.getElementById("myNeedsList").children[0].innerHTML += '<li><input type="checkbox">'+itemsInCart[itemsInCart.length-1]+'</li>';
            var selectedNeedsList = document.getElementById("selectedNeeds").getElementsByTagName('li');
            for (var i=0; i<selectedNeedsList.length; i++) {
                selectedNeedsList[i].addEventListener('click', satisfyNeed, false);
            }
        }
        else{
            var index = itemsInCart.indexOf(newNeed);
            var str = document.getElementById("myNeedsList").children[0].innerHTML;
            document.getElementById("myNeedsList").children[0].innerHTML = str.replace('<li><input type="checkbox">'+itemsInCart[index]+"</li>","");
            itemsInCart.splice(index, 1);
            var selectedNeedsList = document.getElementById("selectedNeeds").getElementsByTagName('li');
            for (var i=0; i<selectedNeedsList.length; i++) {
                selectedNeedsList[i].addEventListener('click', satisfyNeed, false);
            }
        }
    
    }
});

