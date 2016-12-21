questions = ["Какая последняя цифра твоего номера телефона?", 
            "Один из цветов радуги", 
            "Какой твой любимый школьный предмет?", 
            "Какой твой любимый овощ?",
            "Какой любимый стиль музыки?", 
            "Номер твоего дома + 100?", 
            "Любимый вид спорта", 
            "Домашнее растение",
            "Какой твой любимый напиток?", 
            "В каком районе ты живешь?", 
            "В каком слове вы часто допускаете орфографические ошибки?", 
            "Чем Вас можно успокоить?",
            "Если бы вы могли быть невидимкой, куда бы вы пошли?", 
            "Кухню какой страны ты предпочитаешь?", 
            "В какое время дня ты наиболее работоспособен?"]

        function work() {
                const N = 15;
                var numbers = [];
                flag = 0;
                for (i = 0; i < 6; i++) {
                    n = Math.floor(Math.random() * N) ;
                    for(j = 0; j < numbers.length; j++){
                      if (numbers[j] == n){
                        flag = 1;
                        break;
                          }
                    }
                    if (flag == 1){
                      i = i - 1;
                      flag = 0;
                      continue;
                      }
                    numbers.push(n);
                }
        
                //r = document.getElementById("array_div");   // ссылка на div в который будет записан массив с рандомными номерами
                //r.innerHTML = "Question numbers <b>" + numbers.join(", ") + "<br/>" + questions.join("<br/>");

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
          t1 = document.getElementById("t0");
                t1.value = "";
          t2 = document.getElementById("t0");
                t2.value = "";
                
        }

function generate_passwords(){
        dictionary={"а":"a", "б":"b", "в":"v", "г": "g", "д": "d", "е": "e", "ё": "jo", "ж":"zh", "з":"z", "и":"i", "й":"j", "к":"k", "л":"l","м": "m",
"н":"n", "о":"o", "п":"p", "р":"r", "с":"s", "т":"t", "у":"u", "ф":"f", "х":"h","ц":"c", "ч":"ch", "ш":"sh", "щ":"shh", "ъ":"#", "ы":"y", "ь":"'", "э":"je", "ю":"ju", "я":"ja"};
        t0element = document.getElementById("t0");
    t0a = t0element.value;
    t1element = document.getElementById("t1");
    t1a = t1element.value;
    t2element = document.getElementById("t2");
    t2a = t2element.value;
    t3element = document.getElementById("t3");
    t3a = t3element.value;
    t4element = document.getElementById("t4");
    t4a = t4element.value;
    t5element = document.getElementById("t5");
    t5a = t5element.value;
    //res = dictionary[t1a];  // res - туда сохраняется буква, переведенная на англ яз
    resEl = document.getElementById("result");

    var n1;
    n1 = Math.floor(Math.random() * 6);
    switch (n1) {
        case 0:
            resEl.innerHTML = t0a[0] + t1a[1] + t2a[1] + t4a[0] + t3a[0];
        case 1:
            resEl.innerHTML = t2a[0] + t2a[1] + t0a[0] + t4a[length - 1] + t4a[length - 2] + t1a[0];
        case 2:
            resEl.innerHTML = t5a[0] + t5a[1] + t3a[1] + t2a[0] + t2a[1] + t0a[0] + t0a[1];
        case 3:
            resEl.innerHTML = t4a[0] + t4a[1] + t1a[0] + t3a[0] + t3a[1] + t2a[0];
        case 4:
            resEl.innerHTML = t3a[0] + t3a[1] + t2a[0] + t5a[0] + t5a[1] + t0a[0] + t0a[1];
        case 5:
            resEl.innerHTML = t4a[0] + t4a[1] + t0a[0] + t0a[1] + t4a[1] + t4a[0] + t2a[0] + t1a[0];
    }
}
