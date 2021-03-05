function Cadastrar() { 
    var nickname1 = document.getElementById('nickid').value;
    var nickname2 = document.getElementById('nick2id').value;
    document.getElementById('nickname').innerHTML = 'Jogador 1: ' + nickname1;
    document.getElementById('nickname2').innerHTML ='Jogador 2: ' + nickname2;
    
    }
    
    document.getElementById("btn-cadastrar-nick").addEventListener("click", function(){
                    var nickname1 = document.getElementById("nickid").value;
                    var nickname2 = document.getElementById("nick2id").value;
                    
                    if (nickname1 == "" || nickname2 == ""){
                    alert( 'Favor Cadastrar 2 Jogadores');
                    location.href = jogodados.html;
     }
    
     var x = document.getElementById("boxcadastro");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none"
                    }
    
                var x = document.getElementById("boxjogo");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none"
                    }
                    
        
    });
    
    function girarDado(min,max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
    }
    
    var pontuacao1 =  10;
    var pontuacao2 =  10;
    document.getElementById('pontos').innerHTML = 'Pontos: ' + pontuacao1;
    document.getElementById('pontos2').innerHTML = 'Pontos: ' + pontuacao2;
    
    
        
    
    function Sortear(){
    
    var delay = 40;
    var num_dado=girarDado(1, 6);
    var num_dado2=girarDado(1, 6);
         
        if(num_dado==1) document.getElementById("Img1").src="img/dado1.png";
                        else if (num_dado==2) document.getElementById("Img1").src="img/dado2.png";
                            else if (num_dado==3) document.getElementById("Img1").src="img/dado3.png";
                                else if (num_dado==4) document.getElementById("Img1").src="img/dado4.png";
                                    else if (num_dado==5) document.getElementById("Img1").src="img/dado5.png";
                                        else document.getElementById("Img1").src="img/dado6.png";
                                    
                    
                    if(num_dado2==1) document.getElementById("Img2").src="img/dado1.png";
                        else if (num_dado2==2) document.getElementById("Img2").src="img/dado2.png";
                            else if (num_dado2==3) document.getElementById("Img2").src="img/dado3.png";
                                else if (num_dado2==4) document.getElementById("Img2").src="img/dado4.png";
                                    else if (num_dado2==5) document.getElementById("Img2").src="img/dado5.png";
                                        else document.getElementById("Img2").src="img/dado6.png";
                                        
    
        if (num_dado == num_dado2){
            
            pontuacao1 = pontuacao1;
            pontuacao2 = pontuacao2;
            /*alert('O Jogo Empatou: ');*/
            document.getElementById('demoresultado').innerHTML = 'O Jogo Empatou ' ; 
        } else if (num_dado < num_dado2){
            pontuacao1 = pontuacao1 - 1;	
            /*alert ('O Jogador 2 Venceu a rodada');*/
            document.getElementById('demoresultado').innerHTML = 'O Jogador 2 Venceu a rodada ' ; 
        } else if (num_dado > num_dado2) {
            pontuacao2 = pontuacao2 - 1;
            /*alert ('O Jogador 1 Venceu a rodada');*/
            document.getElementById('demoresultado').innerHTML = 'O Jogador 1 Venceu a rodada ' ; 
        } 
        
        document.getElementById('pontos').innerHTML= 'Pontos: ' + pontuacao1;
        document.getElementById('pontos2').innerHTML= 'Pontos: ' + pontuacao2;
        
        if (pontuacao1 == 0){ 
            /*alert('Jogador 2 Venceu o Jogo, Parabéns!');*/
            document.getElementById('demoresultado').innerHTML = 'O Jogador 2 Venceu o JOGO ' ;
            /*location.reload()*/
            setTimeout(function(){
            alert('Game Over!');
            location.reload()
            //your code to be executed after 1 seconds
    },delay);
        }
        else if (pontuacao2 == 0){
            /*alert('Jogador 1 Venceu o Jogo, Parabéns!');*/
            document.getElementById('demoresultado').innerHTML = 'O Jogador 1 Venceu o JOGO ' ;
            /*location.reload()	*/
            setTimeout(function(){
            alert('Game Over!');
            location.reload()
            //your code to be executed after 1 seconds
    },delay);
        } 
        
    }
        
        function reset() {	
    location.reload()
    
    };
        
    
    