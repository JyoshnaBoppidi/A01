
					var symbol = "x";
					var runde = 0;
					function schreibe(event){
					if(event.target.innerHTML == ""){
						runde+=1;
						event.target.innerHTML = symbol;
						
						
						
							if(symbol == "o"){
								symbol = "x";
								document.getElementById("player").innerHTML = "x";
							}
							else{
								symbol = "o";
								document.getElementById("player").innerHTML = "o";
							}
							validate();
						}
					}
					var felder = document.getElementsByClassName("tic");
					
					var count = felder.length;
					for(var i = 0; i < count;i++){
						felder[i].addEventListener("click", schreibe);
					}
					var scorex = 0;
					var scoreo = 0;
					function validate(){
						var count = felder.length;
						if 	(felder[0].innerHTML == "x" && felder[1].innerHTML == "x" && felder[2].innerHTML == "x"){
							alert("x wins"); 
							scorex++;
							runde = 0;
							document.getElementById("spieler1").innerHTML = scorex;
							clearen();
							document.getElementById("0_0").style.backgroundColor = "#ddd";
							document.getElementById("1_0").style.backgroundColor = "#ddd";
							document.getElementById("2_0").style.backgroundColor = "#ddd";
						}
						else if (felder[3].innerHTML == "x" && felder[4].innerHTML == "x" && felder[5].innerHTML == "x"){
							alert("x wins"); 
							scorex++;
							runde = 0;
							document.getElementById("spieler1").innerHTML = scorex;
							clearen();
							document.getElementById("0_1").style.backgroundColor = "#ddd";
							document.getElementById("1_1").style.backgroundColor = "#ddd";
							document.getElementById("2_1").style.backgroundColor = "#ddd";
						}
						else if	(felder[6].innerHTML == "x" && felder[7].innerHTML == "x" && felder[8].innerHTML == "x"){
							alert("x wins"); 
							scorex++;
							runde = 0;
							document.getElementById("spieler1").innerHTML = scorex;
							clearen();
							document.getElementById("0_2").style.backgroundColor = "#ddd";
							document.getElementById("1_2").style.backgroundColor = "#ddd";
							document.getElementById("2_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[0].innerHTML == "x" && felder[3].innerHTML == "x" && felder[6].innerHTML == "x"){
							alert("x wins"); 
							scorex++;
							runde = 0;
							document.getElementById("spieler1").innerHTML = scorex;
							clearen();
							document.getElementById("0_0").style.backgroundColor = "#ddd";
							document.getElementById("0_1").style.backgroundColor = "#ddd";
							document.getElementById("0_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[1].innerHTML == "x" && felder[4].innerHTML == "x" && felder[7].innerHTML == "x"){
							alert("x wins"); 
							scorex++;
							document.getElementById("spieler1").innerHTML = scorex;
							clearen();
							runde = 0;
							document.getElementById("1_0").style.backgroundColor = "#ddd";
							document.getElementById("1_1").style.backgroundColor = "#ddd";
							document.getElementById("1_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[2].innerHTML == "x" && felder[5].innerHTML == "x" && felder[8].innerHTML == "x"){
							alert("x wins"); 
							scorex++;
							document.getElementById("spieler1").innerHTML = scorex;
							clearen();
							runde = 0;
							document.getElementById("2_0").style.backgroundColor = "#ddd";
							document.getElementById("2_1").style.backgroundColor = "#ddd";
							document.getElementById("2_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[0].innerHTML == "x" && felder[4].innerHTML == "x" && felder[8].innerHTML == "x"){
							alert("x wins"); 
							scorex++;
							runde = 0;
							document.getElementById("spieler1").innerHTML = scorex;
							clearen();
							document.getElementById("0_0").style.backgroundColor = "#ddd";
							document.getElementById("1_1").style.backgroundColor = "#ddd";
							document.getElementById("2_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[2].innerHTML == "x" && felder[4].innerHTML == "x" && felder[6].innerHTML == "x"){
							alert("x wins"); 
							scorex++;
							document.getElementById("spieler1").innerHTML = scorex;
							clearen();
							runde = 0;
							document.getElementById("2_0").style.backgroundColor = "#ddd";
							document.getElementById("1_1").style.backgroundColor = "#ddd";
							document.getElementById("0_2").style.backgroundColor = "#ddd";
						}
						else if (felder[0].innerHTML == "o" && felder[1].innerHTML == "o" && felder[2].innerHTML == "o"){
							alert("o wins"); 
							scoreo++;
							document.getElementById("spieler2").innerHTML = scoreo;
							clearen();
							runde = 0;
							document.getElementById("0_0").style.backgroundColor = "#ddd";
							document.getElementById("1_0").style.backgroundColor = "#ddd";
							document.getElementById("2_0").style.backgroundColor = "#ddd";
						}
						else if	(felder[3].innerHTML == "o" && felder[4].innerHTML == "o" && felder[5].innerHTML == "o"){
							alert("o wins"); 
							scoreo++;
							document.getElementById("spieler2").innerHTML = scoreo;
							clearen();
							runde = 0;
							document.getElementById("0_1").style.backgroundColor = "#ddd";
							document.getElementById("1_1").style.backgroundColor = "#ddd";
							document.getElementById("2_1").style.backgroundColor = "#ddd";
						}
						else if	(felder[6].innerHTML == "o" && felder[7].innerHTML == "o" && felder[8].innerHTML == "o"){
							alert("0 wins"); 
							scoreo++;
							document.getElementById("spieler2").innerHTML = scoreo;
							clearen();
							runde = 0;
							document.getElementById("0_2").style.backgroundColor = "#ddd";
							document.getElementById("1_2").style.backgroundColor = "#ddd";
							document.getElementById("2_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[0].innerHTML == "o" && felder[3].innerHTML == "o" && felder[6].innerHTML == "o"){
							alert("0 wins"); 
							scoreo++;
							document.getElementById("spieler2").innerHTML = scoreo;
							clearen();
							runde = 0;
							document.getElementById("0_0").style.backgroundColor = "#ddd";
							document.getElementById("0_1").style.backgroundColor = "#ddd";
							document.getElementById("0_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[1].innerHTML == "o" && felder[4].innerHTML == "o" && felder[7].innerHTML == "o"){
							alert("o wins"); 
							scoreo++;
							document.getElementById("spieler2").innerHTML = scoreo;
							clearen();
							runde = 0;
							document.getElementById("1_0").style.backgroundColor = "#ddd";
							document.getElementById("1_1").style.backgroundColor = "#ddd";
							document.getElementById("1_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[2].innerHTML == "o" && felder[5].innerHTML == "o" && felder[8].innerHTML == "o"){
							alert("o wins"); 
							scoreo++;
							document.getElementById("spieler2").innerHTML = scoreo;
							clearen();
							runde = 0;
							document.getElementById("2_0").style.backgroundColor = "#ddd";
							document.getElementById("2_1").style.backgroundColor = "#ddd";
							document.getElementById("2_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[0].innerHTML == "o" && felder[4].innerHTML == "o" && felder[8].innerHTML == "o"){
							alert("o wins"); 
							scoreo++;
							document.getElementById("spieler2").innerHTML = scoreo;
							clearen();
							runde = 0;
							document.getElementById("0_0").style.backgroundColor = "#ddd";
							document.getElementById("1_1").style.backgroundColor = "#ddd";
							document.getElementById("2_2").style.backgroundColor = "#ddd";
						}
						else if	(felder[2].innerHTML == "o" && felder[4].innerHTML == "o" && felder[6].innerHTML == "o"){
							alert("o wins"); 
							scoreo++;
							document.getElementById("spieler2").innerHTML = scoreo;
							clearen();
							runde = 0;
							document.getElementById("2_0").style.backgroundColor = "#ddd";
							document.getElementById("1_1").style.backgroundColor = "#ddd";
							document.getElementById("0_2").style.backgroundColor = "#ddd";
						}
						else if (runde == 9){
							alert("Unentschieden")
							clearen();
							runde = 0;
						}
						
						if (scorex == 3){
							document.getElementById("spieler2").innerHTML = "x wins";
							document.getElementById("spieler1").innerHTML = "x wins";
						}
						if (scoreo == 3){
							document.getElementById("spieler2").innerHTML = "o wins";
							document.getElementById("spieler1").innerHTML = "o wins";
						}
					
					}
					function clearen(){
						document.getElementById("0_0").innerHTML = "";
						document.getElementById("1_0").innerHTML = "";
						document.getElementById("2_0").innerHTML = "";
						document.getElementById("0_1").innerHTML = "";
						document.getElementById("1_1").innerHTML = "";
						document.getElementById("2_1").innerHTML = "";
						document.getElementById("0_2").innerHTML = "";
						document.getElementById("1_2").innerHTML = "";
						document.getElementById("2_2").innerHTML = "";
						document.getElementById("0_0").style.backgroundColor = "#ccc";
						document.getElementById("1_0").style.backgroundColor = "#ccc";
						document.getElementById("2_0").style.backgroundColor = "#ccc";
						document.getElementById("0_1").style.backgroundColor = "#ccc";
						document.getElementById("1_1").style.backgroundColor = "#ccc";
						document.getElementById("2_1").style.backgroundColor = "#ccc";
						document.getElementById("0_2").style.backgroundColor = "#ccc";
						document.getElementById("1_2").style.backgroundColor = "#ccc";
						document.getElementById("2_2").style.backgroundColor = "#ccc";
					}
					
					function resetpoints(){
						document.getElementById("spieler2").innerHTML = "0";
						document.getElementById("spieler1").innerHTML = "0";
						scorex = 0;
						scoreo = 0;
						runde = 0;
					}