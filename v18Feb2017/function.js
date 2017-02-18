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
    n1 = Number(Math.floor(Math.random() * 10));
    n1e = document.getElementById("casenum");
    n1e.innerHTML = (n1+1).toString();
    console.log(n1);
    switch (n1) {
        case 0:
            questions=["Какая последняя цифра Вашего номера телефона?", 
            "Один из цветов радуги", 
            "Какой Ваш любимый школьный предмет?", 
            "Поставьте любой специальный символ",
            "Какой любимый стиль музыки?", 
            "Номер Вашего дома"];
             break;
        case 1:
            questions=["Любимый вид спорта", 
            "Домашнее растение",
            "Какой Ваш любимый напиток?", 
            "В каком районе Вы живёте?", 
            "В каком слове Вы часто допускаете орфографические ошибки?", 
            "Поставьте смайлик"];
            break;
        case 2:
            questions=["Какой знак препинания Вы обычно ставите после обращения в письме к другу?", 
            "Кухню какой страны Вы предпочитаете?", 
            "В какое время дня ты наиболее работоспособен?", 
            "Любимая телепередача?",
            "Любимая фирма одежды?", 
            "Номер дома работы?"];
            break;
        case 3:
            questions=["Счастливое число",
            "Наиболее посещаемая социальная сеть",
            "Любимая игрушка в детстве", 
            "Отрицательная черта Вашего характера",
            "Место, где Вас клонит в сон",
            "Поставьте любой знак препинания, который первым приходит Вам в голову"];
            break;
        case 4:
            questions=["На каком музыкальном инструменте Вы бы хотели научиться играть?",
            "Какой знак препинания Вы обычно ставите после обращения в письме к другу?",
            "Блюдо, которое Вы сегодня ели (одно)",
            "Сколько часов Вы сегодня спали?",
            "В скольких школах Вы учились?",
            "Что пугает (одно слово)?"];
            break;
        case 5:
            questions=["Любимый мультфильм?",
            "Какой знак препинания Вы обычно ставите после обращения в письме к другу?",
            "Какой школьный предмет Вам нравился меньше всего?",
            "Какой фирмы Ваш ноутбук?",
            "Какого цвета здание Вашего дома?",
            "С каким растением Вы себя ассоциируете?"];
            break;
        case 6:
            questions=["Наиболее посещаемая социальная сеть",
            "Какой символ Вы обычно ставите, чтобы сделать смайлик?",
            "Какую страну Вы бы хотели посетить?",
            "Сколько раз в год Вы ходите в парикмахерскую?",
            "Как зовут Вашего лучшего друга?",
            "Любимая фирма одежды"];
            break;
        case 7:
            questions=["Поставьте смайлик",
            "Сколько часов в день Вы проводите онлайн?",
            "Какой телеканал Вы чаще всего смотрите или смотрели раньше?",
            "Каким спортом Вы занимались в детстве?",
            "Сколько раз в неделю Вы пьёте кофе?",
            "Что пугает?"];
            break;
        case 8:
            questions=["Какой Ваш любимый овощ?",
            "Чем Вас можно успокоить?",
            "Если бы Вы могли быть невидимкой, куда бы Вы пошли?",
            "Ваша любимая погода",
            "Поставьте знак препинания, содержащий точку",
            "Число (день), в который Вы родились"];
            break;
        case 9:
           questions=["Ваш любимый писатель",
            "Какого цвета чехол Вашего телефона?",
            "Любимое животное",
            "Чем Вас можно успокоить?",
            "Какой знак препинания Вы обычно ставите после обращения в письме к другу?",
            "Из-за чего у Вас обычно болит голова?"];
            break;
    }
    q0.innerHTML =  "1: " + questions[0];
    q1.innerHTML =  "2: " + questions[1];
    q2.innerHTML =  "3: " + questions[2];
    q3.innerHTML =  "4: " + questions[3];
    q4.innerHTML =  "5: " + questions[4];
    q5.innerHTML =  "6: " + questions[5];
}

function generate_passwords(){
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
    n1 = Number(document.getElementById("casenum").innerHTML)-1;
    
    console.log(n1, t0a);
    var password = "";
    var expl = "";
    switch (n1) {
        case 0:
            password = t1a[0] + t1a[1] + t1a[2] + t5a + t4a[0] + t4a[1] + t3a + t2a[0] + t2a[1] + t0a;
            expl = maketable(t1a[0] + t1a[1] + t1a[2], t5a, t4a[0] + t4a[1], t3a, t2a[0] + t2a[1], t0a, 
                "первые 3 буквы из вопроса о цвете радуги", "номер дома", "2 символа от любимого стиля музыки",
                "спец.символ", "2 символа от шк предмета", "цифра телефона");
            break; 
        case 1:
            password = t3a[0] + t3a[1] + t3a[2] + t5a + t4a[0] + t1a[0] + t1a[1]+ t2[0] + t2[1] + t0a[0] + t0a[1];
            expl = maketable(t3a[0] + t3a[1] + t3a[2], t5a, t4a[0], t1a[0] + t1a[1], t2[0] + t2[1], t0a[0] + t0a[1],
                "первые 3 символа района проживания", "смайлик", "слово с ошибками", "первые 2 символа от домашнего растения", "2 символа от любимого напитка", 
                "первые 2 символа от любимого вида спорта");
            break;
        case 2:
            password = t1a[0] + t1a[1] + t0a + t3a[0] + t3a[1] + t3a[2] + t5a + t2a[0] + t2a[1] + t4a[0] + t4a[1];
            expl =maketable(t1a[0] + t1a[1], t0a, t3a[0] + t3a[1] + t3a[2], t5a, t2a[0] + t2a[1], t4a[0] + t4a[1], 
                "первые 2 символа от страны", "обращение к другу", "3 символа от любимой телепередачи",
                "номер дома работы", "первые 2 символа от времени дня", "первые 2 символа от любимой фирмы одежды");
            break;
        case 3:
            password = t4a[0] + t4a[1] + t0a + t1a[0] + t1a[1] + t1a[2] + t5a + t3a[0] + t3a[1] + t2a[0];
            expl = maketable(t4a[0] + t4a[1], t0a, t1a[0] + t1a[1] + t1a[2], t5a, t3a[0] + t3a[1], t2a[0], 
                "первые 2 символа от места сна", "Счастливое число", "первые 3 символаот соц сети", "знак препинания", 
                "Отрицательнаячерта характера", "Любимая игрушка детства");
            break;
        case 4:
            password = t2a[0] + t2a[1] + t4a + t5a[0] + t5a[1] + t1a + t0a[0] + t0a[1] + t0a[2] + t3a;
            expl = maketable(t2a[0] + t2a[1], t4a, t5a[0] + t5a[1], t1a, t0a[0] + t0a[1] + t0a[2], t3a,
                "первые 2 символа от блюда", "количество школ", "первые 2 символа от того, что пугает",
                "обращение к другу", "первые 3 символа от музыкального инструмента", "количество часов сна");
            break;
        case 5:
            password = t0a[0] + t0a[1] + t0a[2] + t1a + t3a[0] + t3a[1] + t4a[0] + t2a[0] + t5a[0] + t5a[1] + t5a[2];
            expl = maketable(t0a[0] + t0a[1] + t0a[2], t1a, t3a[0] + t3a[1], t4a[0], t2a[0], t5a[0] + t5a[1] + t5a[2],
                "3 символа от мультфильма", "обращение к другу", "2 символа от фирмы ноутбука", 
                "1 символ от цвета здания", "1 символ от нелюбимого школьного предмета:)", "3 символа от растения, с которым Вы себя ассоциируете");
            break;
        case 6:
            password = t0a[0] + t0a[1] + t3a + t2a[0] + t2a[1] + t5a[0] + t5a[1] + t1a + t4a[0] + t4a[1];
            expl = maketable(t0a[0] + t0a[1], t3a, t2a[0] + t2a[1], t5a[0] + t5a[1], t1a, t4a[0] + t4a[1],
                "2 символа от соц сети", "количество походов в парикмахерскую", "2 символа от страны, которую Вы хотите посетить",
                "2 символа от любимой фирмы одежды", "смайлик", "имя лучшего друга");
            break;
        case 7:
            password = t5a[0] + t5a[1] + t0a + t3a[0] + t3a[1] + t1a + t2a[0] + t2a[1] + t4a;
            expl = maketable(t5a[0] + t5a[1], t0a, t3a[0] + t3a[1], t1a, t2a[0] + t2a[1], t4a,
                "2 символа от того, что пугает", "смайлик", "2 символа от спорта", "количество часов онлайн",
                "2 символа от телеканала", "количество кофе");
            break;
        case 8:
            password = t1a[0] + t1a[1] + t5a + t3a[0] + t3a[1] + t3a[2] + t4a + t0a[0] + t0a[1] + t0a[2] + t2a[0];
            expl = maketable(t1a[0] + t1a[1], t5a, t3a[0] + t3a[1] + t3a[2], t4a, t0a[0] + t0a[1] + t0a[2], t2a[0],
                "2 символа от того, чем можно успокоить", "день рождения", "2 символа от любимой погоды",
                "знак препинания", "3 символа от любимого овоща", "1 символ от места");
            break;
        case 9:
            password = t0a[0] + t0a[1] + t4a + t5a[0] + t5a[1]+ t1a[0] + t1a[1] + t3a[0] + t3a[1] + t2a[0];
            expl = maketable(t0a[0] + t0a[1], t4a, t5a[0] + t5a[1], t1a[0] + t1a[1], t3a[0] + t3a[1], t2a[0],
                "2 символа от любимого писателя", "знак препинания", "2 символа от причины боли в голове",
                "2 символа от цвета чехла на телефон", "2 символа от того, чем Вас можно успокоить", "1 символ от любимого животного");
            break;
              
    }
  resEl.innerHTML = transliterate(password) + expl;
}

function transliterate(inputtext){
var transl=new Array();
    transl['А']='A';     transl['а']='a';
    transl['Б']='B';     transl['б']='b';
    transl['В']='V';     transl['в']='v';
    transl['Г']='G';     transl['г']='g';
    transl['Д']='D';     transl['д']='d';
    transl['Е']='E';     transl['е']='e';
    transl['Ё']='Yo';    transl['ё']='yo';
    transl['Ж']='Zh';    transl['ж']='zh';
    transl['З']='Z';     transl['з']='z';
    transl['И']='I';     transl['и']='i';
    transl['Й']='J';     transl['й']='j';
    transl['К']='K';     transl['к']='k';
    transl['Л']='L';     transl['л']='l';
    transl['М']='M';     transl['м']='m';
    transl['Н']='N';     transl['н']='n';
    transl['О']='O';     transl['о']='o';
    transl['П']='P';     transl['п']='p';
    transl['Р']='R';     transl['р']='r';
    transl['С']='S';     transl['с']='s';
    transl['Т']='T';     transl['т']='t';
    transl['У']='U';     transl['у']='u';
    transl['Ф']='F';     transl['ф']='f';
    transl['Х']='X';     transl['х']='x';
    transl['Ц']='C';     transl['ц']='c';
    transl['Ч']='Ch';    transl['ч']='ch';
    transl['Ш']='Sh';    transl['ш']='sh';
    transl['Щ']='Shh';   transl['щ']='shh';
    transl['Ъ']='"';     transl['ъ']='"';
    transl['Ы']='Y\'';   transl['ы']='y\'';
    transl['Ь']='\'';    transl['ь']='\'';
    transl['Э']='E\'';   transl['э']='e\'';
    transl['Ю']='Yu';    transl['ю']='yu';
    transl['Я']='Ya';    transl['я']='ya';
    var result='';
    for(i=0;i<inputtext.length;i++) {
        if(transl[inputtext[i]]!=undefined) { result+=transl[inputtext[i]]; }
        else { result+=inputtext[i]; }
    }
    return result;
}

function maketable(p1, p2, p3, p4, p5, p6, ex1, ex2, ex3, ex4, ex5, ex6){
  res = "<table><tr class='pass-parts'>";
  res += "<td id='tab11'>" + transliterate(p1) + "</td>";
  res += "<td id='tab12'>" + transliterate(p2) + "</td>";
  res += "<td id='tab13'>" + transliterate(p3) + "</td>";
  res += "<td id='tab14'>" + transliterate(p4) + "</td>";
  res += "<td id='tab15'>" + transliterate(p5) + "</td>";
  res += "<td id='tab16'>" + transliterate(p6) + "</td>";
  res += "</tr><tr class='pass-ex'>";
  res += "<td id='tab21'>" + ex1 + "</td>";
  res += "<td id='tab22'>" + ex2 + "</td>";
  res += "<td id='tab23'>" + ex3 + "</td>";
  res += "<td id='tab24'>" + ex4 + "</td>";
  res += "<td id='tab25'>" + ex5 + "</td>";
  res += "<td id='tab26'>" + ex6 + "</td>";
  res += "</tr></table>";
  
  return res;
}