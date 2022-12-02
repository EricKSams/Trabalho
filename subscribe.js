class Validator{

    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }


validate(form) {
    let currentValidations = document.querySelectorAll('form.error-validations');

    if(currentValidations.length > 0) {
        this.cleanValidations(currentValidations);
    }

    let inputs = form.getElementsByTagName("input");

    let inputsArray = [...inputs];

    inputsArray.forEach(function(input, obj){
        for(let i = 0; this.validations.length > i; i++) {
            if(input.getAttribute(this.validations[i]) != null){
                let method = this.validations[i].replace("data-",'').replace('-',''); 
                let value = input.getAttribute(this.validations[i]);
                this[method](input, value);
            }
        }
    },this);

    }
    minlength(input, minValue){
        let inputLength = input.value.length;
        let errorMessage = 'O campo necessita ao menos ${minValue} caracteres';
        if(inputLength < minValue) {
            this.printMessage(input,errorMessage);
        }
    }

    printMessage(input, msg){
        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.input.parentNode;
        template.classList.remove('template');
        inputParent.appendChild(template);
    }
    cleanValidations(validations){
        validations.forEach(el => el.remove());
    }
}

let form = document.getElementById("formulariocadastro");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

submit.addEventListener("click", function(e){
    e.preventDefault();

    validator.validate(form);
});