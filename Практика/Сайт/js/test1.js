var question_1_1_1;
var question_1_1_2;
var question_1_1_3;
var question_1_1_4;
var question_1_1_5;
var question_1_1_6;
var question_1_2_1;
var question_1_2_2;
var question_1_2_3;
var question_1_2_4;
var question_1_3_1;
var question_1_3_2;
var question_1_3_3;
var question_1_3_4;
var question_1_3_5;
var question_1_3_6;
var question_1_3_7;
var question_1_4_1;
var question_1_4_2;
var question_1_4_3;
var question_1_4_4;
var question_1_5_1;
var question_1_5_2;
var question_1_5_3;
var question_1_5_4;
var question_1_5_5;


function getAnswers(){
    question_1_1_1=document.getElementById('1_1_1');
    question_1_1_2=document.getElementById('1_1_2');
    question_1_1_3=document.getElementById('1_1_3');
    question_1_1_4=document.getElementById('1_1_4');
    question_1_1_5=document.getElementById('1_1_5');
    question_1_1_6=document.getElementById('1_1_6');
    question_1_2_1=document.getElementById('1_2_1');
    question_1_2_2=document.getElementById('1_2_2');
    question_1_2_3=document.getElementById('1_2_3');
    question_1_2_4=document.getElementById('1_2_4');
    question_1_3_1=document.getElementById('1_3_1');
    question_1_3_2=document.getElementById('1_3_2');
    question_1_3_3=document.getElementById('1_3_3');
    question_1_3_4=document.getElementById('1_3_4');
    question_1_3_5=document.getElementById('1_3_5');
    question_1_3_6=document.getElementById('1_3_6');
    question_1_3_7=document.getElementById('1_3_7');
    question_1_4_1=document.getElementById('1_4_1');
    question_1_4_2=document.getElementById('1_4_2');
    question_1_4_3=document.getElementById('1_4_3');
    question_1_4_4=document.getElementById('1_4_4');
    question_1_5_1=document.getElementById('1_5_1');
    question_1_5_2=document.getElementById('1_5_2');
    question_1_5_3=document.getElementById('1_5_3');
    question_1_5_4=document.getElementById('1_5_4');
    question_1_5_5=document.getElementById('1_5_5');
}

function fun1() {
    var result = "";
       if (!question_1_1_1.checked && !question_1_1_2.checked && question_1_1_3.checked && question_1_1_4.checked && !question_1_1_5.checked && question_1_1_6.checked) {
            result += "Первое задание решено верно\n";
        }
        else {
            result += "Первое задание решено не верно\n";
        }

        if(!question_1_2_1.checked && !question_1_2_2.checked && !question_1_2_3.checked && question_1_2_4.checked){
            result += "Второе задание решено верно\n";
        }
        else{
            result += "Второе задание решено не верно\n";
        }

        if(!question_1_3_1.checked && question_1_3_2.checked && !question_1_3_3.checked && question_1_3_4.checked && question_1_3_5.checked && !question_1_3_6.checked && !question_1_3_7.checked){
            result += "Третье задание решено верно\n";
        }
        else{
            result += "Третье задание решено не верно\n";
        }

        if(!question_1_4_1.checked && !question_1_4_2.checked && !question_1_4_3.checked && question_1_4_4.checked){
            result += "Четвертое задание решено верно\n";
        }
        else{
            result += "Четвертое задание решено не верно\n";
        }

        if(question_1_5_1.checked && !question_1_5_2.checked && question_1_5_3.checked && !question_1_5_4.checked && !question_1_5_5.checked){
            result += "Пятое задание решено верно\n";
        }
        else{
            result += "Пятое задание решено не верно\n";
        }
        alert (result);

}