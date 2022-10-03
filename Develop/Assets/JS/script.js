// Código de asignación
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Escriba la contraseña en la entrada #password
function writePassword() {
 
  password.txtlen = prompt('Choose a length for you password between 8-128 characters', 'Enter a Number here');

  if (!isNaN(password.txtlen)){

    password.txtlen = Math.floor(password.txtlen);

    if ( 8 <= password.txtlen && password.txtlen <= 128 ){

      window.alert('Password length accepted: ' + password.txtlen);

    } else {

        window.alert('Enter a value between 8 to 128');
        console.log('Invalid password lenght: ' + password.txtlen);
        console.log('<---------->');
        return;
    }
    
  }else{

    window.alert('Value entered is Not a number');
    console.log('Value entered is Not a number');
    console.log('<---------->');
    return;

  }

  password.inc_upp = confirm("Do you want your password to include Uppercase Letters?");
  console.log('Inc.Uppercase: ' + password.inc_upp);

  password.inc_lwr = confirm("Do you want your password to include Lowercase Letters?");
  console.log('Inc.Lowercase: ' + password.inc_lwr);

  password.inc_num = confirm("Do you want your password to include Numbers?");
  console.log('Inc.Numbers: ' + password.inc_num);

  password.inc_spc = confirm("Do you want your password to include special characters?");
  console.log('Inc.SpecialChars: ' + password.inc_spc);

  if ( password.inc_upp || password.inc_lwr || password.inc_num || password.inc_spc){
  
    password.generatePass();
    console.log('Password: ' + password.textstr);
    console.log('Password length: ' + password.textstr.length);

    passwordText.textContent = password.textstr;

    password.resetpassword();

  }else{

    window.alert('Select at least one option (Uppercase, Lowercase, Number, Special character) to generate your password');

  }

  console.log('<---------->');

}

// Agregar oyente de eventos para generar el botón
generateBtn.addEventListener("click", writePassword);

const password = {

  specialChars: ['!','#','$','%','&','(',')','*','+','-',',','.','/',':',';','=','<','>','@','[',']','_','{','}','|'],
  upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  numbers: ['1','2','3','4','5','6','7','8','9','0'],
  options: [],

  textstr: '',
  txtlen:  0,
  inc_spc: false,
  inc_upp: false,
  inc_lwr: false,
  inc_num: false,
  option: 0,

  generatePass: function(){

      //make sure password at least contain one character of options selected by user
      //&&
      //add options selected by user:
      if(this.inc_upp){
        this.textstr = this.textstr + this.setUpperChar();
        this.options.push(1);
      }
      if(this.inc_lwr){
        this.textstr = this.textstr + this.setLowerChar();
        this.options.push(2);
      }
      if(this.inc_num){
        this.textstr = this.textstr + this.setNumber();
        this.options.push(3);
      }
      if(this.inc_spc){
        this.textstr = this.textstr + this.setSpecialChar();
        this.options.push(4);
      }

      console.log('Options: ' + this.options);

    //considering password lenght selected by user add randomly a character within options selected:
    for (i = 1; i <= this.txtlen; i++){

      if (this.textstr.length < this.txtlen){

        //generate random option across those selected by user:
        this.option = this.options[ Math.floor(Math.random() * this.options.length) ];

        //generate character across valid options:
        switch(this.option){
          case 1:
            this.textstr = this.textstr + this.setUpperChar();
            break;
          case 2:
            this.textstr = this.textstr + this.setLowerChar();
            break;
          case 3:
            this.textstr = this.textstr + this.setNumber();
            break;
          case 4:
            this.textstr = this.textstr + this.setSpecialChar();
            break;
        }

      }

    }

  },

  setSpecialChar: function(){
    return this.specialChars[ Math.floor(Math.random() * this.specialChars.length) ];
  },

  setUpperChar: function(){
    return this.upperCase[ Math.floor(Math.random() * this.upperCase.length) ];
  },

  setLowerChar: function(){
    return this.lowerCase[ Math.floor(Math.random() * this.lowerCase.length) ];
  },

  setNumber: function(){
    return this.numbers[ Math.floor(Math.random() * this.numbers.length) ];
  },

  resetpassword: function(){

    this.textstr = '';
    this.txtlen  =  0;
    this.inc_spc = false;
    this.inc_upp = false;
    this.inc_lwr = false;
    this.inc_num = false;
    this.option  = 0;
    this.options = [];

  },

};

