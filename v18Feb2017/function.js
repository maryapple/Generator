function generate_case(){
       
    q0 = document.getElementById("q0");  // ������ �� ������������
    q1 = document.getElementById("q1");
    q2 = document.getElementById("q2");
    q3 = document.getElementById("q3");
    q4 = document.getElementById("q4");
    q5 = document.getElementById("q5");

    t0 = document.getElementById("t0");  //������ �� ����� 
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
            questions=["����� ��������� ����� ������ ������ ��������?", 
            "���� �� ������ ������", 
            "����� ��� ������� �������� �������?", 
            "��������� ����� ����������� ������",
            "����� ������� ����� ������?", 
            "����� ������ ����"];
             break;
        case 1:
            questions=["������� ��� ������", 
            "�������� ��������",
            "����� ��� ������� �������?", 
            "� ����� ������ �� �����?", 
            "� ����� ����� �� ����� ���������� ��������������� ������?", 
            "��������� �������"];
            break;
        case 2:
            questions=["����� ���� ���������� �� ������ ������� ����� ��������� � ������ � �����?", 
            "����� ����� ������ �� �������������?", 
            "� ����� ����� ��� �� �������� ��������������?", 
            "������� ������������?",
            "������� ����� ������?", 
            "����� ���� ������?"];
            break;
        case 3:
            questions=["���������� �����",
            "�������� ���������� ���������� ����",
            "������� ������� � �������", 
            "������������� ����� ������ ���������",
            "�����, ��� ��� ������ � ���",
            "��������� ����� ���� ����������, ������� ������ �������� ��� � ������"];
            break;
        case 4:
            questions=["�� ����� ����������� ����������� �� �� ������ ��������� ������?",
            "����� ���� ���������� �� ������ ������� ����� ��������� � ������ � �����?",
            "�����, ������� �� ������� ��� (����)",
            "������� ����� �� ������� �����?",
            "� �������� ������ �� �������?",
            "��� ������ (���� �����)?"];
            break;
        case 5:
            questions=["������� ����������?",
            "����� ���� ���������� �� ������ ������� ����� ��������� � ������ � �����?",
            "����� �������� ������� ��� �������� ������ �����?",
            "����� ����� ��� �������?",
            "������ ����� ������ ������ ����?",
            "� ����� ��������� �� ���� ������������?"];
            break;
        case 6:
            questions=["�������� ���������� ���������� ����",
            "����� ������ �� ������ �������, ����� ������� �������?",
            "����� ������ �� �� ������ ��������?",
            "������� ��� � ��� �� ������ � ��������������?",
            "��� ����� ������ ������� �����?",
            "������� ����� ������"];
            break;
        case 7:
            questions=["��������� �������",
            "������� ����� � ���� �� ��������� ������?",
            "����� ��������� �� ���� ����� �������� ��� �������� ������?",
            "����� ������� �� ���������� � �������?",
            "������� ��� � ������ �� ����� ����?",
            "��� ������?"];
            break;
        case 8:
            questions=["����� ��� ������� ����?",
            "��� ��� ����� ���������?",
            "���� �� �� ����� ���� ����������, ���� �� �� �����?",
            "���� ������� ������",
            "��������� ���� ����������, ���������� �����",
            "����� (����), � ������� �� ��������"];
            break;
        case 9:
           questions=["��� ������� ��������",
            "������ ����� ����� ������ ��������?",
            "������� ��������",
            "��� ��� ����� ���������?",
            "����� ���� ���������� �� ������ ������� ����� ��������� � ������ � �����?",
            "��-�� ���� � ��� ������ ����� ������?"];
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
    q0 = document.getElementById("q0");  // ������ �� ������������
    q1 = document.getElementById("q1");
    q2 = document.getElementById("q2");
    q3 = document.getElementById("q3");
    q4 = document.getElementById("q4");
    q5 = document.getElementById("q5");

    t0 = document.getElementById("t0");  //������ �� ����� 
    t1 = document.getElementById("t1");
    t2 = document.getElementById("t2");
    t3 = document.getElementById("t3");
    t4 = document.getElementById("t4");
    t5 = document.getElementById("t5");

    t0a = document.getElementById("t0").value; // ����� ������
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
                "������ 3 ����� �� ������� � ����� ������", "����� ����", "2 ������� �� �������� ����� ������",
                "����.������", "2 ������� �� �� ��������", "����� ��������");
            break; 
        case 1:
            password = t3a[0] + t3a[1] + t3a[2] + t5a + t4a[0] + t1a[0] + t1a[1]+ t2[0] + t2[1] + t0a[0] + t0a[1];
            expl = maketable(t3a[0] + t3a[1] + t3a[2], t5a, t4a[0], t1a[0] + t1a[1], t2[0] + t2[1], t0a[0] + t0a[1],
                "������ 3 ������� ������ ����������", "�������", "����� � ��������", "������ 2 ������� �� ��������� ��������", "2 ������� �� �������� �������", 
                "������ 2 ������� �� �������� ���� ������");
            break;
        case 2:
            password = t1a[0] + t1a[1] + t0a + t3a[0] + t3a[1] + t3a[2] + t5a + t2a[0] + t2a[1] + t4a[0] + t4a[1];
            expl =maketable(t1a[0] + t1a[1], t0a, t3a[0] + t3a[1] + t3a[2], t5a, t2a[0] + t2a[1], t4a[0] + t4a[1], 
                "������ 2 ������� �� ������", "��������� � �����", "3 ������� �� ������� ������������",
                "����� ���� ������", "������ 2 ������� �� ������� ���", "������ 2 ������� �� ������� ����� ������");
            break;
        case 3:
            password = t4a[0] + t4a[1] + t0a + t1a[0] + t1a[1] + t1a[2] + t5a + t3a[0] + t3a[1] + t2a[0];
            expl = maketable(t4a[0] + t4a[1], t0a, t1a[0] + t1a[1] + t1a[2], t5a, t3a[0] + t3a[1], t2a[0], 
                "������ 2 ������� �� ����� ���", "���������� �����", "������ 3 ��������� ��� ����", "���� ����������", 
                "������������������ ���������", "������� ������� �������");
            break;
        case 4:
            password = t2a[0] + t2a[1] + t4a + t5a[0] + t5a[1] + t1a + t0a[0] + t0a[1] + t0a[2] + t3a;
            expl = maketable(t2a[0] + t2a[1], t4a, t5a[0] + t5a[1], t1a, t0a[0] + t0a[1] + t0a[2], t3a,
                "������ 2 ������� �� �����", "���������� ����", "������ 2 ������� �� ����, ��� ������",
                "��������� � �����", "������ 3 ������� �� ������������ �����������", "���������� ����� ���");
            break;
        case 5:
            password = t0a[0] + t0a[1] + t0a[2] + t1a + t3a[0] + t3a[1] + t4a[0] + t2a[0] + t5a[0] + t5a[1] + t5a[2];
            expl = maketable(t0a[0] + t0a[1] + t0a[2], t1a, t3a[0] + t3a[1], t4a[0], t2a[0], t5a[0] + t5a[1] + t5a[2],
                "3 ������� �� �����������", "��������� � �����", "2 ������� �� ����� ��������", 
                "1 ������ �� ����� ������", "1 ������ �� ���������� ��������� ��������:)", "3 ������� �� ��������, � ������� �� ���� ������������");
            break;
        case 6:
            password = t0a[0] + t0a[1] + t3a + t2a[0] + t2a[1] + t5a[0] + t5a[1] + t1a + t4a[0] + t4a[1];
            expl = maketable(t0a[0] + t0a[1], t3a, t2a[0] + t2a[1], t5a[0] + t5a[1], t1a, t4a[0] + t4a[1],
                "2 ������� �� ��� ����", "���������� ������� � ��������������", "2 ������� �� ������, ������� �� ������ ��������",
                "2 ������� �� ������� ����� ������", "�������", "��� ������� �����");
            break;
        case 7:
            password = t5a[0] + t5a[1] + t0a + t3a[0] + t3a[1] + t1a + t2a[0] + t2a[1] + t4a;
            expl = maketable(t5a[0] + t5a[1], t0a, t3a[0] + t3a[1], t1a, t2a[0] + t2a[1], t4a,
                "2 ������� �� ����, ��� ������", "�������", "2 ������� �� ������", "���������� ����� ������",
                "2 ������� �� ����������", "���������� ����");
            break;
        case 8:
            password = t1a[0] + t1a[1] + t5a + t3a[0] + t3a[1] + t3a[2] + t4a + t0a[0] + t0a[1] + t0a[2] + t2a[0];
            expl = maketable(t1a[0] + t1a[1], t5a, t3a[0] + t3a[1] + t3a[2], t4a, t0a[0] + t0a[1] + t0a[2], t2a[0],
                "2 ������� �� ����, ��� ����� ���������", "���� ��������", "2 ������� �� ������� ������",
                "���� ����������", "3 ������� �� �������� �����", "1 ������ �� �����");
            break;
        case 9:
            password = t0a[0] + t0a[1] + t4a + t5a[0] + t5a[1]+ t1a[0] + t1a[1] + t3a[0] + t3a[1] + t2a[0];
            expl = maketable(t0a[0] + t0a[1], t4a, t5a[0] + t5a[1], t1a[0] + t1a[1], t3a[0] + t3a[1], t2a[0],
                "2 ������� �� �������� ��������", "���� ����������", "2 ������� �� ������� ���� � ������",
                "2 ������� �� ����� ����� �� �������", "2 ������� �� ����, ��� ��� ����� ���������", "1 ������ �� �������� ���������");
            break;
              
    }
  resEl.innerHTML = transliterate(password) + expl;
}

function transliterate(inputtext){
var transl=new Array();
    transl['�']='A';     transl['�']='a';
    transl['�']='B';     transl['�']='b';
    transl['�']='V';     transl['�']='v';
    transl['�']='G';     transl['�']='g';
    transl['�']='D';     transl['�']='d';
    transl['�']='E';     transl['�']='e';
    transl['�']='Yo';    transl['�']='yo';
    transl['�']='Zh';    transl['�']='zh';
    transl['�']='Z';     transl['�']='z';
    transl['�']='I';     transl['�']='i';
    transl['�']='J';     transl['�']='j';
    transl['�']='K';     transl['�']='k';
    transl['�']='L';     transl['�']='l';
    transl['�']='M';     transl['�']='m';
    transl['�']='N';     transl['�']='n';
    transl['�']='O';     transl['�']='o';
    transl['�']='P';     transl['�']='p';
    transl['�']='R';     transl['�']='r';
    transl['�']='S';     transl['�']='s';
    transl['�']='T';     transl['�']='t';
    transl['�']='U';     transl['�']='u';
    transl['�']='F';     transl['�']='f';
    transl['�']='X';     transl['�']='x';
    transl['�']='C';     transl['�']='c';
    transl['�']='Ch';    transl['�']='ch';
    transl['�']='Sh';    transl['�']='sh';
    transl['�']='Shh';   transl['�']='shh';
    transl['�']='"';     transl['�']='"';
    transl['�']='Y\'';   transl['�']='y\'';
    transl['�']='\'';    transl['�']='\'';
    transl['�']='E\'';   transl['�']='e\'';
    transl['�']='Yu';    transl['�']='yu';
    transl['�']='Ya';    transl['�']='ya';
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