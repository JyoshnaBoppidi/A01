function scoresIncreasing(scores) {
let scores1 = parseInt(scores)
  for (var i = 1; i < scores1.length; i++){
    if (scores1[i] != scores1[i-1] && scores1[i] < scores1[i-1]){
      alert("false");
    }
  }
  alert("true");
}