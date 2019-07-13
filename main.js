$(".input-txt-tol").on("keyup",function(e){

    //13 means enter button
    if(e.keyCode === 13 && $(".input-txt-tol").val() !== ""){

        var task = $("<div class='task-tol'></div>").text($(".input-txt-tol").val());
        var del = $("<i class='fa fa-trash'></i>");
        var check = $("<i class='fa fa-check'></i>");


        del.click(function(){

            var parent = $(this).parent();
            parent.fadeOut(function(){

                parent.remove();

            }); 

        });

        check.click(function(){

            var parent = $(this).parent();
            parent.fadeOut(function(){

                $(".comp-tol").append(parent);
                parent.fadeIn();

            }); 

            $(this).remove();

        });


        task.append(del, check);

        $(".notcomp-tol").append(task);

        //to clear the input
        $(".input-txt-tol").val("");
    
    }

})