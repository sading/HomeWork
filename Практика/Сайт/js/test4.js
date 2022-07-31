var question_1_1;
var question_1_2;
var question_1_3;
var question_1_4;
var question_2_1;
var question_2_2;
var question_2_3;
var question_2_4;
var question_3_1;
var question_3_2;
var question_3_3;
var question_3_4;
var question_3_5;
var question_4_1;
var question_4_2;
var question_4_3;
var question_4_4;
var question_5_1;
var question_5_2;
var question_5_3;
var question_5_4;


function getAnswers(){
    question_1_1=document.getElementById('1_1');
    question_1_2=document.getElementById('1_2');
    question_1_3=document.getElementById('1_3');
    question_1_4=document.getElementById('1_4');
    question_2_1=document.getElementById('2_1');
    question_2_2=document.getElementById('2_2');
    question_2_3=document.getElementById('2_3');
    question_2_4=document.getElementById('2_4');
    question_3_1=document.getElementById('3_1');
    question_3_2=document.getElementById('3_2');
    question_3_3=document.getElementById('3_3');
    question_3_4=document.getElementById('3_4');
    question_3_5=document.getElementById('3_5');
    question_4_1=document.getElementById('4_1');
    question_4_2=document.getElementById('4_2');
    question_4_3=document.getElementById('4_3');
    question_4_4=document.getElementById('4_4');
    question_5_1=document.getElementById('5_1');
    question_5_2=document.getElementById('5_2');
    question_5_3=document.getElementById('5_3');
    question_5_4=document.getElementById('5_4');
}

function fun1() {
    var result = "";
       if (!question_1_1.checked && question_1_2.checked && question_1_3.checked && !question_1_4.checked) {
            result += "Первое задание решено верно\n";
        }
        else {
            result += "Первое задание решено не верно\n";
        }

        if(question_2_1.checked && !question_2_2.checked && !question_2_3.checked && !question_2_4.checked){
            result += "Второе задание решено верно\n";
        }
        else{
            result += "Второе задание решено не верно\n";
        }

        if(question_3_1.checked && !question_3_2.checked && question_3_3.checked && question_3_4.checked && !question_3_5.checked){
            result += "Третье задание решено верно\n";
        }
        else{
            result += "Третье задание решено не верно\n";
        }

        if(question_4_1.checked && !question_4_2.checked && !question_4_3.checked && !question_4_4.checked){
            result += "Четвертое задание решено верно\n";
        }
        else{
            result += "Четвертое задание решено не верно\n";
        }

        if(!question_5_1.checked && !question_5_2.checked && !question_5_3.checked && question_5_4.checked){
            result += "Пятое задание решено верно\n";
        }
        else{
            result += "Пятое задание решено не верно\n";
        }
        alert (result);

}