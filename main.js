$(document).ready(function () {
    console.log("Start");
    // var $product = $('.nudges');
    // // var $response
    $(".issue").hide();
    $.ajax({
        type: 'GET',
        url: "services.json",
        dataType: 'json',
        success: function(result) {
            console.log(result);
            $response = result;
            //Request loop
            $.each(result,function(i, service){
                $('.nudges').append('<div class="sugg first" data-index=' + i + ' data-id=' + result[i].id + '><input type="checkbox" data-id=' + result[i].id + ' id="checkbox' + i + '" name="' + result[i].name + '"><label for="checkbox' + i + '"></label>' + result[i].name + '</div>');

            });
            
            //Issue on request loop : NEXT
            $('.first').on('click', function (event) {
                console.log("AAAAAAAAAAAAAAAAAAAA");
                // var srviceName = $(this).data('id');
                var index = $(this).data("index");
                console.log(index);
                $(event.delegateTarget).css("background-color", "#1996a2d6");
                $div = result[index].name;
                console.log($div);
                $('input[name="Request"]').attr("value", $div)
               
                $.each(result[index].issues, function (i, service) {
                    console.log(result[index].issues[i]);
                    $('.issuenudges').append('<div class="sugg second" data-index=' + i + ' data-id=' + result[index].issues[i] + '><input type="checkbox" data-id=' + result[index].issues[i] + ' id="checkbox1' + i + '" name="' + result[index].issues[i] + '"><label for="checkbox1' + i + '"></label>' + result[index].issues[i] + '</div>');
                });
                $(".request").hide();
                $(".issue").show();
            });

            
               
        },
        error: function(result) {
                //alert("Invalid data");

                alert("Error, plz add your order again")
        }
    });

    // $('.qtagselect__select').tagselect();
 });