canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
player_object="";
block_image_object=""

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,left:player_x
        
    });
    canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width);
       block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_y,left:player_x
            
        });
        canvas.add(block_image_object);
    });
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
        keypressed=e.keyCode;
        console.log (keypressed);
        if(e.shiftKey==true && keypressed=="80"){
            console.log ("p & shift pressed together");
            block_width=block_width+10;
            block_height=block_height+10;
            document.getElementById("current_width").innerHTML=block_width;
            document.getElementById("current_height").innerHTML=block_height;
        }

        if (e.shiftKey==true && keypressed=="77"){
            console.log ("m & shift pressed together");
            block_width=block_width-10;
            block_height=block_height-10;
            document.getElementById("current_width").innerHTML=block_width;
            document.getElementById("current_height").innerHTML=block_height;
        }

        if (keypressed=="38"){
            up ();
            console.log("up");
        }

        if (keypressed=="37"){
            left ();
            console.log("left");
        }


        if (keypressed=="39"){
            right ();
            console.log("right");
        }

        if (keypressed=="40"){
            down ();
            console.log("down");
        }
        if(keypressed=="87"){
            console.log("w");
            new_image("wall.jpg");
        }

        if(keypressed=="71"){
            console.log("g");
            new_image("ground.png");
        }

        if(keypressed=="76"){
            console.log("l");
            new_image("light_green.png");
        }

        if(keypressed=="84"){
            console.log("t");
            new_image("trunk.jpg");
        }

        if(keypressed=="82"){
            console.log("r");
            new_image("roof.jpg");

            
        }

        if(keypressed=="89"){
            console.log("y");
            new_image("yellow_wall.png");
        }

        if(keypressed=="68"){
            console.log("d");
            new_image("dark_green.png");
        }

        if(keypressed=="85"){
            console.log("u");
            new_image("unique.png");
        }

        if(keypressed=="67"){
            console.log("c");
            new_image("cloud.jpg");
        }
    }

    function up(){
        if(player_y>0){
            player_y=player_y-block_height;
            canvas.remove(player_object);
            player_update();
        }
    }

    function down(){
        if(player_y<=500){
            player_y=player_y+block_height;
            canvas.remove(player_object);
            player_update();

        }
    }

    function left(){
        if(player_x>0){
            player_x=player_x-block_width;
            canvas.remove(player_object);
            player_update();
        }
    }

    function right(){
        if (player_x<=900){
            player_x=player_x+block_width;
            canvas.remove(player_object)
            player_update();
        }
    }