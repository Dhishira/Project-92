player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

Player1_score = 0;
Player2_score = 0;

document.getElementById("player1_name").innerHTML = player1+" : ";
document.getElementById("player2_name").innerHTML = player2+" : ";

document.getElementById("player1_score").innerHTML = Player1_score;
document.getElementById("player2_score").innerHTML = Player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - "+player1;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2;

function send()
{
    number1 = document.getElementById("Number1").value;
    number2 = document.getElementById("Number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_word = "<h4>"+number1+" X "+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'> ";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML = row;
    
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
          Player1_score = Player1_score + 1 ;
          document.getElementById("player1_score").innerHTML = Player1_score ;
        }
        else
        {
            Player2_score = Player2_score + 1 ;
            document.getElementById("player2_score").innerHTML = Player2_score ;
        }

    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : "+player2;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : "+player1;
    }
   
    if(answer_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : "+player2;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : "+player1;
    }

   document.getElementById("output").innerHTML = "";

}