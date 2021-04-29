function insert(tile, img) {
    var swap = document.getElementById(tile);
    var pic = document.getElementById(img);
    if(window.getComputedStyle(document.getElementById("sel1")).display === "none"){
        document.getElementById("sel1").src = pic.src;
        document.getElementById("sel1").value = swap.value;
        document.getElementById("sel1").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel2")).display === "none"){
        document.getElementById("sel2").src = pic.src;
        document.getElementById("sel2").value = swap.value;
        document.getElementById("sel2").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel3")).display === "none"){
        document.getElementById("sel3").src = pic.src;
        document.getElementById("sel3").value = swap.value;
        document.getElementById("sel3").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel4")).display === "none"){
        document.getElementById("sel4").src = pic.src;
        document.getElementById("sel4").value = swap.value;
        document.getElementById("sel4").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel5")).display === "none"){
        document.getElementById("sel5").src = pic.src;
        document.getElementById("sel5").value = swap.value;
        document.getElementById("sel5").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel6")).display === "none"){
        document.getElementById("sel6").src = pic.src;
        document.getElementById("sel6").value = swap.value;
        document.getElementById("sel6").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel7")).display === "none"){
        document.getElementById("sel7").src = pic.src;
        document.getElementById("sel7").value = swap.value;
        document.getElementById("sel7").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel8")).display === "none"){
        document.getElementById("sel8").src = pic.src;
        document.getElementById("sel8").value = swap.value;
        document.getElementById("sel8").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel9")).display === "none"){
        document.getElementById("sel9").src = pic.src;
        document.getElementById("sel9").value = swap.value;
        document.getElementById("sel9").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel10")).display === "none"){
        document.getElementById("sel10").src = pic.src;
        document.getElementById("sel10").value = swap.value;
        document.getElementById("sel10").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel11")).display === "none"){
        document.getElementById("sel11").src = pic.src;
        document.getElementById("sel11").value = swap.value;
        document.getElementById("sel11").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel12")).display === "none"){
        document.getElementById("sel12").src = pic.src;
        document.getElementById("sel12").value = swap.value;
        document.getElementById("sel12").style.display = "flex";
    }else if(window.getComputedStyle(document.getElementById("sel13")).display === "none"){
        document.getElementById("sel13").src = pic.src;
        document.getElementById("sel13").value = swap.value;
        document.getElementById("sel13").style.display = "flex";
    }else{
        document.getElementById("sel14").src = pic.src;
        document.getElementById("sel14").value = swap.value;
        document.getElementById("sel14").style.display = "flex";
    }

  }
function calculate(){
    var sel1 = document.getElementById("sel1").value;
    var sel2 = document.getElementById("sel2").value;
    var sel3 = document.getElementById("sel3").value;
    var sel4 = document.getElementById("sel4").value;
    var sel5 = document.getElementById("sel5").value;
    var sel6 = document.getElementById("sel6").value;
    var sel7 = document.getElementById("sel7").value;
    var sel8 = document.getElementById("sel8").value;
    var sel9 = document.getElementById("sel9").value;
    var sel10 = document.getElementById("sel10").value;
    var sel11 = document.getElementById("sel11").value;
    var sel12 = document.getElementById("sel12").value;
    var sel13 = document.getElementById("sel13").value;
    var sel14 = document.getElementById("sel14").value;
    var han = 0;
    var sevenPairs = 1;
    //var noPoint = 1;
    //var oneSeq = 0;
    //var twoSeq = 1;
    //var thrColStr = 1;
    var straight = 0;
    var triple = 1;
    //var ctriple = 1;
    var simples = 1;
    var honor = 1;
    //var terminal = 1;
    var aterminalhonor = 1;
    var ldragon = 1;
    var hflush = 1;
    var flush = 1;
    //var orphan = 1;
    var lwind = 1;
    var bdragon = 1;
    var bwind = 1;
    var ahonor = 1;
    //var aterminal = 1;
    var agreen = 1;




    var hand = [sel1,sel2,sel3,sel4,sel5,sel6,sel7,sel8,sel9,sel10,sel11,sel12,sel13,sel14];
    for(var i = 1; i < hand.length; i++){
        var current = hand[i];
        var j = i -1;
        while(j>= 0 && current < hand[j]){
            hand[j+1] = hand[j];
            j--;
        }
        hand[j+1] = current;
    }
    var tracker = 0;
    for(var k = 0; k < hand.length; k++){
        if(hand[k] % 9 == 1 || hand[k] % 9 == 0 || hand[k] > 27){
            simples = 0
        }if( hand[k] < 28 && (hand[k] % 9 >= 2 && hand[k] % 9 <= 8)){
            aterminalhonor = 0;
        }if(k%2 == 1 && hand[k] != hand[tracker]){
            sevenPairs = 0;
        }if(hand[k] == 1  || hand[k] == 5 || hand[k] == 7 || (hand[k] >= 9 && hand[k] <= 31) || hand[k] >= 33){
            agreen = 0;
        }if(hand[k] <= 27){
            ahonor = 0;
        }if(k == 6 && hand[k] != 32){
            ldragon = 0;
        }if(k == 5 && hand[k] != 32){
            bdragon = 0
        }if(k == 3 && hand[k] != 28){
            lwind = 0
        }if(k == 2 && hand[k] != 28){
            bwind = 0
        }if((hand[k] < 10 && hand[tracker] >= 10) ||
        ((hand[k] >=10 && hand[k] < 19) && (hand[tracker] <10 || hand[tracker] >=19)) ||
         ((hand[k] >=20 && hand[k] < 28) && (hand[tracker] < 20 || hand[tracker] >=28))){
            flush = 0;
            hflush = 0;
         }if(hand[k] >= 28){
            flush = 0;
         }if(k >= 8 && hand[k] - hand[k-8] == 8 ){
            straight = 1;
         }if(k % 3 >= 2  && hand[k] != hand[k-2]){
            triple = 0;
         }
        tracker = k;
    }
    if(simples == 1){
        han = han + 1;
    }
    if(aterminalhonor == 1){
        han = han + 4;
    }
    if(sevenPairs == 1){
        han = han + 2;
    }
    if(ldragon == 1){
        han = han + 4;
    }
    if(hflush == 1){
        han = han + 3;
    }
    if(flush == 1){
        han = han+3;
    }
    if(straight == 1){
        han = han +2;
    }
    if(triple == 1){
        han = han + 2;
    }
    if(lwind == 1 || bwind == 1 || bdragon == 1 || agreen == 1 || ahonor == 1){
        han = "Limit";
    }

    document.getElementById("results").innerHTML = han;
}
  //Hide the tip amount on load
document.getElementById("sel1").style.display = "none";
document.getElementById("sel2").style.display = "none";
document.getElementById("sel3").style.display = "none";
document.getElementById("sel4").style.display = "none";
document.getElementById("sel5").style.display = "none";
document.getElementById("sel6").style.display = "none";
document.getElementById("sel7").style.display = "none";
document.getElementById("sel8").style.display = "none";
document.getElementById("sel9").style.display = "none";
document.getElementById("sel10").style.display = "none";
document.getElementById("sel11").style.display = "none";
document.getElementById("sel12").style.display = "none";
document.getElementById("sel13").style.display = "none";
document.getElementById("sel14").style.display = "none";

//click to call function
document.getElementById("b1").onclick = function() {
  insert("b1", "bam1");
};
document.getElementById("b2").onclick = function() {
  insert("b2", "bam2");
};
document.getElementById("b3").onclick = function() {
  insert("b3", "bam3");
};
document.getElementById("b4").onclick = function() {
  insert("b4", "bam4");
};
document.getElementById("b5").onclick = function() {
  insert("b5", "bam5");
};
document.getElementById("b6").onclick = function() {
  insert("b6", "bam6");
};
document.getElementById("b7").onclick = function() {
  insert("b7", "bam7");
};
document.getElementById("b8").onclick = function() {
  insert("b8", "bam8");
};
document.getElementById("b9").onclick = function() {
  insert("b9", "bam9");
};
document.getElementById("c1").onclick = function() {
  insert("c1", "cha1");
};
document.getElementById("c2").onclick = function() {
  insert("c2", "cha2");
};
document.getElementById("c3").onclick = function() {
  insert("c3", "cha3");
};
document.getElementById("c4").onclick = function() {
  insert("c4", "cha4");
};
document.getElementById("c5").onclick = function() {
  insert("c5", "cha5");
};
document.getElementById("c6").onclick = function() {
  insert("c6", "cha6");
};
document.getElementById("c7").onclick = function() {
  insert("c7", "cha7");
};
document.getElementById("c8").onclick = function() {
  insert("c8", "cha8");
};
document.getElementById("c9").onclick = function() {
  insert("c9", "cha9");
};
document.getElementById("d1").onclick = function() {
  insert("d1", "dot1");
};
document.getElementById("d2").onclick = function() {
  insert("d2", "dot2");
};
document.getElementById("d3").onclick = function() {
  insert("d3", "dot3");
};
document.getElementById("d4").onclick = function() {
  insert("d4", "dot4");
};
document.getElementById("d5").onclick = function() {
  insert("d5", "dot5");
};
document.getElementById("d6").onclick = function() {
  insert("d6", "dot6");
};
document.getElementById("d7").onclick = function() {
  insert("d7", "dot7");
};
document.getElementById("d8").onclick = function() {
  insert("d8", "dot8");
};
document.getElementById("d9").onclick = function() {
  insert("d9", "dot9");
};
document.getElementById("ew").onclick = function() {
  insert("ew", "east");
};
document.getElementById("sw").onclick = function() {
  insert("sw", "south");
};
document.getElementById("ww").onclick = function() {
  insert("ww", "west");
};
document.getElementById("nw").onclick = function() {
  insert("nw", "north");
};
document.getElementById("gd").onclick = function() {
  insert("gd", "green");
};
document.getElementById("rd").onclick = function() {
  insert("rd", "red");
};
document.getElementById("wd").onclick = function() {
  insert("wd", "white");
};
document.getElementById("calculate").onclick = function(){
    calculate();
}
