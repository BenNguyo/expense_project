

function make_json(form)
{


// var $expense_type = $("form.expense_type");
//     $amount = $("form.amount");
//     $note = $("form.note");
//     $date = $("form.date");
// var object = {
//     name: $expense_type.val(),
//     cash: $amount.val(),
//     reason: $note.val(),
//     date: $date.val()
// }

// var params = JSON.stringify(object);

// $.ajax({
//     type: 'POST',
//     data: params,
//     url: 'save_to_json.php',
//     success: function(data){
//         // do something on success
//     },
//     error: function(){
//         // do something on error
//     }
// });

 var json =
    {
        "expense_type": form.expense_type.value,
        "amount" : form.amount.value,
        "note": form.note.value,
        "date": form.date.value
    };


     var html = JSON.stringify(json,0,4) ;
    document.getElementById('output').innerHTML = html;
    var other = JSON.parse(html)  ;
     var others = " On " + other.date + " , " + other.amount
      +  " shillings was spent on " + other.expense_type + " for " + other.note;
    
    window.alert("New expense added!" + others)
    // document.getElementById('new_output').innerHTML = others;
     return false;


}



/*
var form = document.querySelector('form');
var exp_result = new XMLHttpRequest();

exp_result.upload.addEventListener('load' , function(e){
    console.log('Loaded and complete');
}, false);

form.addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(form);
    exp_result.open('post', 'expense.php' ,true);
   exp_result.send(formData);

}, false);*/


/*file_put_content('my_json_data.json', $jsonObject, FILE_APPEND);
JavaSrcipt:

var $firstName = $(".name"),
    $caption = $(".caption");
var object = {
    name: $firstName.val(),
    caption: $caption.val()
}

var params = JSON.stringify(object);

$.ajax({
    type: 'POST',
    data: params,
    url: 'save_to_json.php',
    success: function(data){
        // do something on success
    },
    error: function(){
        // do something on error
    }
});
PHP (save_to_json.php):

    if (!isset($_POST['params']) && !empty($_POST['params'])) {
        $params = $_POST['params'];

        $jsonObject = json_encode($params);
        file_put_contents('my_json_data.json', $jsonObject);
    } */