function generate_case(){
       
    q0 = document.getElementById("q0");  // ссылка на формулировку
    q1 = document.getElementById("q1");
    q2 = document.getElementById("q2");
    q3 = document.getElementById("q3");
    q4 = document.getElementById("q4");
    q5 = document.getElementById("q5");

    t0 = document.getElementById("t0");  //ссылка на ответ 
    t1 = document.getElementById("t1");
    t2 = document.getElementById("t2");
    t3 = document.getElementById("t3");
    t4 = document.getElementById("t4");
    t5 = document.getElementById("t5");

    t0.value = "";
    t1.value = "";
    t2.value = "";
    t3.value = "";
    t4.value = "";
    t5.value = "";

    var n1;
    n1 = Number(Math.floor(Math.random() * 3));
    console.log(n1);
    switch (n1) {
        case 0:
            questions=["Какая последняя цифра твоего номера телефона?", 
            "Один из цветов радуги", 
            "Какой твой любимый школьный предмет?", 
            "Какой твой любимый овощ?",
            "Какой любимый стиль музыки?", 
            "Номер твоего дома + 100?"];
             break;
        case 1:
            questions=["1Какая последняя цифра твоего номера телефона?", 
            "1Один из цветов радуги", 
            "1Какой твой любимый школьный предмет?", 
            "1Какой твой любимый овощ?",
            "1Какой любимый стиль музыки?", 
            "1Номер твоего дома + 100?"];
            break;
        case 2:
            questions=["2Какая последняя цифра твоего номера телефона?", 
            "2Один из цветов радуги", 
            "2Какой твой любимый школьный предмет?", 
            "2Какой твой любимый овощ?",
            "2Какой любимый стиль музыки?", 
            "2Номер твоего дома + 100?"];
    }
    q0.innerHTML =  "1: " + questions[0];
    q1.innerHTML =  "2: " + questions[1];
    q2.innerHTML =  "3: " + questions[2];
    q3.innerHTML =  "4: " + questions[3];
    q4.innerHTML =  "5: " + questions[4];
    q5.innerHTML =  "6: " + questions[5];
}

function generate_password(){
        dictionary={"а":"a", "б":"b", "в":"v", "г": "g", "д": "d", "е": "e", "ё": "jo", "ж":"zh", "з":"z", "и":"i", "й":"j", "к":"k", "л":"l","м": "m",
"н":"n", "о":"o", "п":"p", "р":"r", "с":"s", "т":"t", "у":"u", "ф":"f", "х":"h","ц":"c", "ч":"ch", "ш":"sh", "щ":"shh", "ъ":"#", "ы":"y", "ь":"'", "э":"je", "ю":"ju", "я":"ja"};
       
    //res = dictionary[t1a];  // res - туда сохраняется буква, переведенная на англ яз
    resEl = document.getElementById("result");
    q0 = document.getElementById("q0");  // ссылка на формулировку
    q1 = document.getElementById("q1");
    q2 = document.getElementById("q2");
    q3 = document.getElementById("q3");
    q4 = document.getElementById("q4");
    q5 = document.getElementById("q5");

    t0 = document.getElementById("t0");  //ссылка на ответ 
    t1 = document.getElementById("t1");
    t2 = document.getElementById("t2");
    t3 = document.getElementById("t3");
    t4 = document.getElementById("t4");
    t5 = document.getElementById("t5");

    t0a = document.getElementById("t0").value; // текст ответа
    t1a = document.getElementById("t1").value;
    t2a = document.getElementById("t2").value;
    t3a = document.getElementById("t3").value;
    t4a = document.getElementById("t4").value;
    t5a = document.getElementById("t5").value;

    var n1;
    n1 = Number(Math.floor(Math.random() * 6));
    switch (n1) {
        case 0:
            resEl.innerHTML = t0a[0] + t1a[1] + t2a[1] + t4a[0] + t3a[0] + t5a[0] + t2a[2] + t5a[1] + t2a[0] + t4a[0];
            numbers=["Какая последняя цифра твоего номера телефона?", 
            "Один из цветов радуги", 
            "Какой твой любимый школьный предмет?", 
            "Какой твой любимый овощ?",
            "Какой любимый стиль музыки?", 
            "Номер твоего дома + 100?"];
                r0.innerHTML = numbers[0].toString() + ": " + questions[numbers[0]];
                r1.innerHTML =  numbers[1].toString() + ": " + questions[numbers[1]];
                r2.innerHTML =  numbers[2].toString() + ": " + questions[numbers[2]];
                r3.innerHTML =  numbers[3].toString() + ": " + questions[numbers[3]];
                r4.innerHTML =  numbers[4].toString() + ": " + questions[numbers[4]];
                r5.innerHTML =  numbers[5].toString() + ": " + questions[numbers[5]];

                t0.value = "";
                t1.value = "";
                t2.value = "";
                t3.value = "";
                t4.value = "";
                t5.value = "";
        case 1:
            resEl.innerHTML = t2a[0] + t2a[1] + t0a[0] + t4a[length - 1] + t4a[length - 2] + t1a[0];
            numbers=["В каком районе ты живешь?", 
            "В каком слове вы часто допускаете орфографические ошибки?", 
            "Чем Вас можно успокоить?",
            "Если бы вы могли быть невидимкой, куда бы вы пошли?", 
            "Кухню какой страны ты предпочитаешь?", 
            "В какое время дня ты наиболее работоспособен?"];
                r0 = document.getElementById("q0");
                r0.innerHTML = numbers[0].toString() + ": " + questions[numbers[0]];
                r1 = document.getElementById("q1");
                r1.innerHTML =  numbers[1].toString() + ": " + questions[numbers[1]];
                r2 = document.getElementById("q2");
                r2.innerHTML =  numbers[2].toString() + ": " + questions[numbers[2]];
                r3 = document.getElementById("q3");
                r3.innerHTML =  numbers[3].toString() + ": " + questions[numbers[3]];
                r4 = document.getElementById("q4");
                r4.innerHTML =  numbers[4].toString() + ": " + questions[numbers[4]];
                r5 = document.getElementById("q5");
                r5.innerHTML =  numbers[5].toString() + ": " + questions[numbers[5]];
                        t0 = document.getElementById("t0");
                        t0.value = "";
                        t1 = document.getElementById("t1");
                        t1.value = "";
                        t2 = document.getElementById("t2");
            resEl.innerHTML = t5a[0] + t5a[1] + t3a[1] + t2a[0] + t2a[1] + t0a[0] + t0a[1];
        case 3:
            resEl.innerHTML = t4a[0] + t4a[1] + t1a[0] + t3a[0] + t3a[1] + t2a[0];
        case 4:
                        t2.value = "";
                        t3 = document.getElementById("t3");
                        t3.value = "";
                        t4 = document.getElementById("t4");
                        t4.value = "";
                        t5 = document.getElementById("t5");
                        t5.value = "";
        case 2:
            resEl.innerHTML = t3a[0] + t3a[1] + t2a[0] + t5a[0] + t5a[1] + t0a[0] + t0a[1];
        case 5:
            resEl.innerHTML = t4a[0] + t4a[1] + t0a[0] + t0a[1] + t4a[1] + t4a[0] + t2a[0] + t1a[0];
    }
}
