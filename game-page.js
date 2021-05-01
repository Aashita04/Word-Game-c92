player1n= localStorage.getItem("name1");
player2n= localStorage.getItem("name2");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1n + " : " ;
document.getElementById("player2name").innerHTML=player2n + " : " ;

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("player_q").innerHTML= "Question Turn : " + player1n ;
document.getElementById("player_a").innerHTML= "Answer Turn : " + player2n ;

function send(){
   
    get_word= document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    charAt1= word.charAt(1);
    console.log(charAt1);

    mid= Math.floor(word.length/2);
    charAt2= word.charAt(mid);
    console.log(charAt2);

    end= word.length - 1;
    charAt3= word.charAt(end);
    console.log(charAt3);

    remove1= word.replace(charAt1,"_");
    remove2= remove1.replace(charAt2,"_");
    remove3= remove2.replace(charAt3,"_");
    console.log(remove3);

    question_word="<h4 id='word-display'>Q. " + remove3 + "</h4>";
    input_box="<br> Answer:  <input type='text' id='input_text_box' >";
    check_button="<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row= question_word + input_box + check_button;
    document.getElementById("output").innerHTML= row ;

    document.getElementById("word").value="";
    document.getElementById("msg").innerHTML="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_text_box").value;
    answer= get_answer.toLowerCase();
    console.log("answer =" + answer);

    if (answer==word){
        document.getElementById("msg").innerHTML="Correct Answer!!";
        if (answer_turn="player1"){
            player1score= player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }

        else{
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }
    }

    else{
        document.getElementById("msg").innerHTML="Wrong Answer, Correct Answer = " + word;
    }

    if (question_turn=="player1"){

        question_turn="player2";
        document.getElementById("player_q").innerHTML="Question Turn = " + player2n;
    }

    else{
        question_turn="player1";
        document.getElementById("player_q").innerHTML="Question Turn = " + player1n;
    }

    if (answer_turn=="player1"){

        answer_turn="player2";
        document.getElementById("player_a").innerHTML="Answer Turn = " + player2n;
    }

    else{
        answer_turn="player1";
        document.getElementById("player_a").innerHTML="Answer Turn = " + player1n;
    }

    document.getElementById("output").innerHTML="";
}