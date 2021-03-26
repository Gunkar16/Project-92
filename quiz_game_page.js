player1_name=localStorage.getItem("player1name")
player2_name=localStorage.getItem("player2name")

player1score=0;
player2score=0;

document.getElementById("player1name_score").innerHTML=player1_name+": "+player1score;
document.getElementById("player2name_score").innerHTML=player2_name+": "+player2score;


document.getElementById("player_answer").innerHTML="Answer Turn -";
document.getElementById("player_question").innerHTML="Question Turn - ";
document.getElementById("player_q").innerHTML=player1_name;
document.getElementById("player_a").innerHTML=player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(number1);
    console.log(number2);
    console.log(actual_answer);

    question_number = "<h4 id='multiply'>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br> <label id='aLabel'>Answer</label> : <input class='input' type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn="player1";
answer_turn="player2"
function check(){
    getAnswer = document.getElementById("input_check_box").value;
    console.log(getAnswer);


    if (getAnswer == actual_answer)
    {

        if(answer_turn=="player1"){
            player1score = player1score + 1;
            document.getElementById("player1name_score").innerHTML=player1_name+": "+player1score;
            console.log(player1score);
            console.log("answer turn is "+answer_turn);
            console.log("question turn is "+question_turn);
        }

        else
        {
           player2score = player2score + 1 ;
           document.getElementById("player2name_score").innerHTML=player2_name+": "+player2score;
           console.log(player2score);
           console.log("answer turn is "+answer_turn);
           console.log("question turn is "+question_turn);
        }

    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_q").innerHTML=player2_name;
    }

    else{
        question_turn="player1";
        document.getElementById("player_q").innerHTML=player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn = "player2";
        document.getElementById("player_a").innerHTML=player2_name;
    }

    else{
        answer_turn = "player1";
        document.getElementById("player_a").innerHTML=player1_name;
    }
    document.getElementById("output").innerText="";
}