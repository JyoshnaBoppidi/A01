(function init(){

  var doc = document;
  var bts = doc.getElementsByClassName('btn');
  function changeTo(elem, xo){ // takes X or O.
    if(!elem.className.match('X') && !elem.className.match('O')){
      elem.className += (" "+xo);
      return true;
    } else {
      return false;
    }
  };
  function checkWins(plyr,mtx){
    var wins = [[],[],[],[],[],[],[],[]];
    var all=[], allWins=[];
    for(var i=0; i<3; i++){
      for(var j=0; j<3; j++){
        if(mtx[i][j].className.match('X') || mtx[i][j].className.match('O')){all.push(mtx[i][j])};
        if(i==0){
          if(mtx[i][j].className.match(plyr)){
            wins[0].push(mtx[i][j]);
            wins[j+3][0]=mtx[i][j];
            if(j==0){
              wins[6][0]=mtx[i][j];
            } else if(j==2){
              wins[7][0]=mtx[i][j];
            }
          }
        }
        if(i==1){
          if(mtx[i][j].className.match(plyr)){
            wins[1].push(mtx[i][j]);
            wins[j+3][1]=mtx[i][j];
            if(j==1){
              wins[6][1]=mtx[i][j];
              wins[7][1]=mtx[i][j];
            }
          }
        }
        if(i==2){
          if(mtx[i][j].className.match(plyr)){
            wins[2].push(mtx[i][j]);
            wins[j+3][2]=mtx[i][j];
            if(j==2){
              wins[6][2]=mtx[i][j];
            } else if(j==0){
              wins[7][2]=mtx[i][j];
            }
          }
        }
      }
    }
    for(i=0; i<8; i++){
      for(j=wins[i].length; j>-1; j--){
        if(wins[i][j]==undefined){
          wins[i].splice(j,1);
        }
      }
      if(wins[i].length==3){
        allWins.push(wins[i]);
      }
    }
    if(allWins.length>0){
      return allWins;
    }
    if(all.length===9){
      return 'tie';
    }
    return false;
  };
  function clrBtns(buttonMtx, cont_2){
    for(var i=0; i<3; i++){
      for(var j=0; j<3; j++){
        if(buttonMtx[i][j].className.match(' O') || buttonMtx[i][j].className.match(' X')){
          buttonMtx[i][j].className=buttonMtx[i][j].className.replace(/\s?[XO]/g,'');
        }
        if(buttonMtx[i][j].className.match(' won')){
          buttonMtx[i][j].className=buttonMtx[i][j].className.replace(/\s?won/g,'');
        }
      }
    }
    if(cont_2.className.match(' msgWin')){
      cont_2.className=cont_2.className.replace(/\s?msgWin/g,'');
    }
  };
  function colorScores(currentTurn){
    if(currentTurn=='X'){
      currentTurn='O';
      xmsg.parentNode.className='msg'; 
      omsg.parentNode.className=omsg.parentNode.className+' firstTurn';
    } else {
      currentTurn='X';
      omsg.parentNode.className='msg';
      xmsg.parentNode.className=xmsg.parentNode.className+' firstTurn';
    }
    return currentTurn;
  };
  function updateScores(currentTurn){
    if(currentTurn=='X'){
      xmsg.innerHTML=parseInt(xmsg.innerHTML)+1;
    } else {
      omsg.innerHTML=parseInt(omsg.innerHTML)+1;
    }
  };
  function buttonPress(){
    if(changeTo(this, currentTurn)==true){
      var check = checkWins(currentTurn, gameButtons);
      if(check!=false){
        if(check instanceof Array == true){
          for(var r=0; r<check.length; r++){
            for(var k=0; k<check[r].length; k++){
              check[r][k].className+=' won';
            }
          }
          msgCenter.innerHTML=(currentTurn+" WINS!!!"); msgCenter.className+=' msgWin';
          updateScores(currentTurn);
        } else if(check=='tie'){
          msgCenter.innerHTML=("A TIE!!!"); msgCenter.className+=' msgWin';
        }
        buttonState=turnOffBtns();
      }
      if(currentTurn=='X' && buttonState==true){
        currentTurn='O'; msgCenter.innerHTML=(currentTurn+"'s turn:");
      } else if(buttonState==true){
        currentTurn='X';  msgCenter.innerHTML=(currentTurn+"'s turn:");
      }
    }
  };
  var gameButtons=[[bts[0],bts[1],bts[2]],[bts[3],bts[4],bts[5]],[bts[6],bts[7],bts[8]]];
  var msgCenter = doc.getElementById('msgcenter');
  var currentTurn = 'X', buttonState = true; 
  var xmsg = doc.getElementById('x_msg'), omsg = doc.getElementById('o_msg'); 
  xmsg.parentNode.className='msg firstTurn';
  function initBtns(){
    for(var i=0; i<3; i++){
      for(var j=0; j<3; j++){
        gameButtons[i][j].addEventListener('click', buttonPress);
      }
    }
    return true;
  };
  function turnOffBtns(){
    for(var i=0; i<3; i++){
      for(var j=0; j<3; j++){
        gameButtons[i][j].removeEventListener('click', buttonPress);
      }
    }
    return false;
  };
  initBtns();
  doc.getElementById('reset').addEventListener('click', function(){
    clrBtns(gameButtons, msgCenter);
    buttonState=initBtns(); currentTurn=colorScores(currentTurn);
    msgCenter.innerHTML="Let's Play! "+currentTurn+"'s turn";
  });
})();