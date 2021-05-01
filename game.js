function adduser(){
    player1=document.getElementById("player1name").value;
    player2=document.getElementById("player2name").value;
    localStorage.setItem("name1", player1);
    localStorage.setItem("name2", player2);
    window.location="gamepage.html";
}