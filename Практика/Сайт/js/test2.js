var question_2_1_1;
var question_2_1_2;
var question_2_1_3;
var question_2_1_4;
var question_2_1_5;
var question_2_2_1;
var question_2_2_2;
var question_2_2_3;
var question_2_2_4;
var question_2_2_5;
var question_2_3_1;
var question_2_3_2;
var question_2_3_3;
var question_2_3_4;
var question_2_4_1;
var question_2_4_2;
var question_2_4_3;
var question_2_4_4;
var question_2_5_1;
var question_2_5_2;
var question_2_5_3;
var question_2_5_4;


function getAnswers2(){
    question_2_1_1=document.getElementById('2_1_1');
    question_2_1_2=document.getElementById('2_1_2');
    question_2_1_3=document.getElementById('2_1_3');
    question_2_1_4=document.getElementById('2_1_4');
    question_2_1_5=document.getElementById('2_1_5');
    question_2_2_1=document.getElementById('2_2_1');
    question_2_2_2=document.getElementById('2_2_2');
    question_2_2_3=document.getElementById('2_2_3');
    question_2_2_4=document.getElementById('2_2_4');
    question_2_2_5=document.getElementById('2_2_5');
    question_2_3_1=document.getElementById('2_3_1');
    question_2_3_2=document.getElementById('2_3_2');
    question_2_3_3=document.getElementById('2_3_3');
    question_2_3_4=document.getElementById('2_3_4');
    question_2_4_1=document.getElementById('2_4_1');
    question_2_4_2=document.getElementById('2_4_2');
    question_2_4_3=document.getElementById('2_4_3');
    question_2_4_4=document.getElementById('2_4_4');
    question_2_5_1=document.getElementById('2_5_1');
    question_2_5_2=document.getElementById('2_5_2');
    question_2_5_3=document.getElementById('2_5_3');
    question_2_5_4=document.getElementById('2_5_4');
}

function fun2() {
    var result = "";
       if (!question_2_1_1.checked && !question_2_1_2.checked && question_2_1_3.checked && !question_2_1_4.checked && question_2_1_5.checked) {
            result += "Первое задание решено верно\n";
        }
        else {
            result += "Первое задание решено не верно\n";
        }

        if(question_2_2_1.checked && !question_2_2_2.checked && question_2_2_3.checked && !question_2_2_4.checked && !question_2_2_5.checked){
            result += "Второе задание решено верно\n";
        }
        else{
            result += "Второе задание решено не верно\n";
        }

        if(!question_2_3_1.checked && question_2_3_2.checked && !question_2_3_3.checked && !question_2_3_4.checked){
            result += "Третье задание решено верно\n";
        }
        else{
            result += "Третье задание решено не верно\n";
        }

        if(!question_2_4_1.checked && !question_2_4_2.checked && question_2_4_3.checked && !question_2_4_4.checked){
            result += "Четвертое задание решено верно\n";
        }
        else{
            result += "Четвертое задание решено не верно\n";
        }

        if(!question_2_5_1.checked && !question_2_5_2.checked && !question_2_5_3.checked && question_2_5_4.checked){
            result += "Пятое задание решено верно\n";
        }
        else{
            result += "Пятое задание решено не верно\n";
        }
        alert (result);

}