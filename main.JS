"use strict";
let __$ = 12;
let _$_ = 25;
let $$$ = 3;
let _$$ = 3;
let _$_2 = 100;
let $__ = 8;
let __$2 = 10;
let ___ = 0;
$$$ = 20;
let eD = 5;
___ = ___ + 95;
$$$ = ___ - _$_2;
$__ = "eD"
let $__$ = $__ + "c?" + "jXJx";
let password = $__$;

function checkPassword() {
    var inputElement = document.getElementById("passInput");
    
    if (inputElement) {
        var password = inputElement.value;
        if (password === $__$) { 
            alert("تم التحقق!");
            window.location.href = "index.23.html"; 
        } else {
            document.getElementById("message").innerHTML = "كلمة السر خطأ!";
        }
    } else {
        console.error("خطأ: لم يتم العثور على المربع الذي يحمل id='passInput'");
    }
}