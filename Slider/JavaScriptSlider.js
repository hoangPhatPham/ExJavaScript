var current_img;

function Next(){
    if (current_img < 25){    
        current_img++;
        document.getElementById("image_to_show").src = "Image_Slider/"+ current_img + ".jpg";
    }
}

function LoadNewSlider(){
    current_img = 1;
    document.getElementById("image_to_show").src = "Image_Slider/1.jpg";
    LoadBtnIndex();
}
function Previous(){
    if (current_img > 1){    
        current_img--;
        document.getElementById("image_to_show").src = "Image_Slider/"+ current_img + ".jpg";
    }
}

function LoadBtnIndex(){
    var text_div_index = "";
    for (i = 1; i <= 25; i ++){
        text_div_index += "<button type = 'button'  id = '" + i + "' class = 'button_in_div_index' onClick = 'GoToIndexImg("+ i +")'>" + i + "</button>";
    }
    document.getElementById("div_index").innerHTML = text_div_index; 
}

function GoToIndexImg(i){
    current_img = i;
    document.getElementById("image_to_show").src = "Image_Slider/"+ current_img + ".jpg";
}

function SetButtonColor(){
   for(i = 1; i <= 25; i ++){
       if (i == current_img)
           document.getElementById(i).className = "this_pic";
       else
           document.getElementById(i).className = "button_in_div_index";
   }
}
