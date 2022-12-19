const form = document.querySelector('.form-hero');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+375 (99) 999-99-99');
inputMask.mask(telSelector);
//валидация
new window.JustValidate('.form-hero',{
    rules:{
        tel:{
            required: true,
            function: ()=>{
                const phone = telSelector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 9;
            }
        },
        kind: {
            required: true
        },
    },
    messages:{
        name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов'
        },
        email:{
            email: 'Введите корректный email',
            required: 'Введите email'
        },
        tel: {
            required: 'Введите номер телефона',
            function: 'Введите номер полностью'
            
        },
        kind: {
            required: 'Введите вид работы'
        }
    },
    submitHandler: function(thisForm){
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log('Отправлено');
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
    }
});
new window.JustValidate('.form-review',{
    rules:{
        review: {
            required: true,
        }
    },
    messages:{
        name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов'
        },
        review: {
            required: 'Введите комментарий',
        }
    },
    submitHandler: function(thisForm){
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    alert(200);
                }
            }
        }
        xhr.open('POST', 'mailReview.php', true);
        xhr.send(formData);
        thisForm.reset();
    } 
    
});