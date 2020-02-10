jQuery.validator.setDefaults({
    // debug: true,
    success: "valid"
});
  
$().ready(function(){
    $('.formTable').validate({
        rules: {
            'productId[]': {
                required: true,
                number: true
            },
            "productName[]": {
                required: true,
                minlength: 3
            },
            'productH[]': {
                required: true,
                number: true
            },
            'productW[]': {
                required: true,
                number: true
            },
            'productL[]': {
                required: true,
                number: true
            }
        },
        messages: {
            'productId[]': {
                required: 'Поле не может быть пустым',
                number: 'Можно ввести только целые числа'
            },
            "productName[]": {
                required: 'Поле не может быть пустым',
                minlength: 'Введите не менее 3 символов'
            },
            "productH[]": {
                required: 'Поле не может быть пустым',
                number: 'Можно ввести только числа'
            },
            "productW[]": {
                required: 'Поле не может быть пустым',
                number: 'Можно ввести только числа'
            },
            "productL[]": {
                required: 'Поле не может быть пустым',
                number: 'Можно ввести только числа'
            }
        }
    });
});

$('.formTable').on('submit', function(e){
    e.preventDefault();
    console.log('on submit');

    var form = $(this)
    
    if (!form.valid()) {
        
    } else {

        console.log('Отправляем данные на сервер');

        var btn = $('.button');
        btn.prop('value', 'Сохранение...');
        btn.addClass('button-progress').prop('disabled', true);

        // sleep some time... 
        setTimeout(function(){

            // then save data
            $.post('updateTable.php', form.serialize(), function(data) {
                
                if (data == 0) {

                    btn.prop('value', 'Готово!');
                    btn.removeClass('button-progress');
                    btn.addClass('button-done');

                } else {

                    btn.prop('value', 'Сохранить');
                    btn.removeClass('button-progress').prop('disabled', false);
                    alert(data);
                }
            });

        },1000);

    }
});