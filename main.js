player1 = "";;
player2 = "";

function add_user()
{
    player1 = document.getElementById("Player_1").value;
    player2 = document.getElementById("Player_2").value;

    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);

    window.location = "game.html" ;
}