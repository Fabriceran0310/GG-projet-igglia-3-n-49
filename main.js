function _$(val){return document.getElementById(val);}
function _createElts(elts){return document.createElement(elts);}

var tour= "X", matRef = new Array(), ScorP1 = 0, ScorP2 = 0,nomP1,nomP2, cli=0;

function resetFanorona(){
	var casMor = document.getElementsByTagName('input');
	matRef[0] = new Array();
	matRef[0][0] = "X"; matRef[0][1] = "X"; matRef[0][2] = "X";
	matRef[1] = new Array();
	matRef[1][0] = "."; matRef[1][1] = "."; matRef[1][2] = ".";
	matRef[2] = new Array();
	matRef[2][0] = "O"; matRef[2][1] = "O"; matRef[2][2] = "O";
	for(i = 0 ; i < casMor.length ; i++){
		if(i==0) casMor[i].setAttribute("value","X");
		if(i==1) casMor[i].setAttribute("value","");
		if(i==2) casMor[i].setAttribute("value","O");
		
	}
}
function InitializeMatrice(){
	testeur = 0;
	matRef[0] = new Array();
	matRef[0][0] = "."; matRef[0][1] = "."; matRef[0][2] = ".";
	matRef[1] = new Array();	
	matRef[1][0] = "."; matRef[1][1] = "."; matRef[1][2] = ".";
	matRef[2] = new Array();
	matRef[2][0] = "."; matRef[2][1] = "."; matRef[2][2] = ".";
}
function Score(){
	var	lb_Score1 = _$('ScoreP1'), lb_Score2 = _$('ScoreP2');
	lb_Score1.innerHTML = "";
	lb_Score1.innerHTML = ScorP1;
	lb_Score2.innerHTML = "";
	lb_Score2.innerHTML = ScorP2;
}
function testerJoueur(valMat){
	if(valMat == "X"){
		alert("		************** Félicitation "+nomP1+" a gagné **************");
		ScorP1 += 1;
		Score();
		resetFanorona();
		InitializeMatrice();
		for (i = 0 ; i < 3; i ++){
			for(j = 0 ; j < 3 ; j++){
				if(i==0){
					_$("b_" + i + "_" + j).style.background = 'url(b_1.jpg)';
					_$("b_" + i + "_" + j).value ="X";
				}
				if(i==1){
					_$("b_" + i + "_" + j).style.background = 'none';
					_$("b_" + i + "_" + j).value ="";
				}
				if(i==2){
					_$("b_" + i + "_" + j).style.background = 'url(b_2.jpg)';
					_$("b_" + i + "_" + j).value ="O";
				}
				_$("b_" + i + "_" + j).style.backgroundRepeat = 'round';
			}
		}
	}else if(valMat == "O"){
		alert("		************** Félicitation "+nomP2+" a gagné **************");
		ScorP2 += 1;
		Score();
		resetFanorona();
		InitializeMatrice();
		for (i = 0 ; i < 3; i ++){
			for(j = 0 ; j < 3 ; j++){
				if(i==0){
					_$("b_" + i + "_" + j).style.background = 'url(b_1.jpg)';
					_$("b_" + i + "_" + j).value ="X";
				}
				if(i==1){
					_$("b_" + i + "_" + j).style.background = 'none';
					_$("b_" + i + "_" + j).value ="";
				}
				if(i==2){
					_$("b_" + i + "_" + j).style.background = 'url(b_2.jpg)';
					_$("b_" + i + "_" + j).value ="O";
				}
				_$("b_" + i + "_" + j).style.backgroundRepeat = 'round';
			}
		}
	}
}
function jouerFanorona(nomId, elt ) {
		switch(nomId){
			case "b_0_0" :
				matRef[0][0] = elt;break;
			case "b_0_1" :
				matRef[0][1] = elt;break;
			case "b_0_2" :
				matRef[0][2] = elt;break;
			case "b_1_0" :
				matRef[1][0] = elt;break;
			case "b_1_1" :
				matRef[1][1] = elt;break;
			case "b_1_2" :
				matRef[1][2] = elt;break;
			case "b_2_0" :
				matRef[2][0] = elt;break;
			case "b_2_1" :
				matRef[2][1] = elt;break;
			case "b_2_2" :
				matRef[2][2] = elt;break;
			default:
				alert("mouvement indisponible ");
		}
		if((matRef[0][0] == matRef[0][1]) && (matRef[0][0] == matRef[0][2]) && (matRef[0][1] == matRef[0][2]))
			testerJoueur(matRef[0][0]);
		else if((matRef[0][0] == matRef[1][0]) && (matRef[0][0] == matRef[2][0]) && (matRef[1][0] == matRef[2][0]))
			testerJoueur(matRef[0][0]);
		else if((matRef[0][0] == matRef[1][1]) && (matRef[0][0] == matRef[2][2]) && (matRef[1][1] == matRef[2][2]))
			testerJoueur(matRef[0][0]);
		else if((matRef[0][1] == matRef[1][1]) && (matRef[0][1] == matRef[2][1]) && (matRef[1][1] == matRef[2][1]))
			testerJoueur(matRef[0][1]);
		else if((matRef[0][2] == matRef[1][1]) && (matRef[0][2] == matRef[2][0]) && (matRef[1][1] == matRef[2][0]))
			testerJoueur(matRef[0][2]);
		else if((matRef[1][0] == matRef[1][1]) && (matRef[1][0] == matRef[1][2]) && (matRef[1][1] == matRef[1][2]))
			testerJoueur(matRef[1][0]);
		else if((matRef[2][0] == matRef[2][1]) && (matRef[2][0] == matRef[2][2]) && (matRef[2][1] == matRef[2][2]))
			testerJoueur(matRef[2][0]);
	//}
}
function monterCasse(){
	var elt_parent = _$('tab_morp');
	for (i = 0; i < 3 ; i++){
		var newelts = _createElts('tr');
		elt_parent.appendChild(newelts);
		for(j = 0; j < 3 ; j++){
			var newseltsChild = _createElts('td');
			newelts.appendChild(newseltsChild);
			var newBout = _createElts('input');
			newBout.type = "button";
			newBout.value = "";
			newBout.id = "b_" + i + "_" + j;
			newseltsChild.appendChild(newBout);
			if(i == 0){
				newBout.style.backgroundImage = 'url(b_1.jpg)';
				newBout.value = "X";
			}
			if(i == 2){
				newBout.style.backgroundImage = 'url(b_2.jpg)';
				newBout.value = "O";
			}
			newBout.style.backgroundRepeat = 'round';
		}
	}
}
function localisation(){
	var inpu = document.getElementsByTagName("input");
	for( j = 0; j<inpu.length; j++){
		inpu[j].addEventListener("click", function getpos(){
			if(cli % 2){
				if(tour == "X"){
					if(this.getAttribute("value") == ""){
						this.setAttribute("value",tour);
						imagecocher(tour,this.id);
						jouerFanorona(this.id,tour);
						tour = "O";
						cli++;
					}
					else{ alert("veuillez cliqué sur un bouton vide differente de la precedente")}
				} else if(tour == "O"){
					if(this.getAttribute("value") == ""){
						this.setAttribute("value",tour);
						imagecocher(tour,this.id);
						jouerFanorona(this.id,tour);
						tour = "X";
						cli++;
					}
					else{ alert("veuillez cliqué sur  un bouton vide differente de la precedente") ;}
				}
			}
			else{
					if(this.getAttribute("value") == tour){
						this.setAttribute("value","");
						this.style.backgroundImage = 'none';
						cli++;
					}else{ 
						alert("veuillez cliqué sur les bouton avec le symbole " + tour) ;
					}
			}
		});
	}
}
function imagecocher(tour,id_btn){
	if(tour == "X"){
		_$("" + id_btn).style.backgroundImage = 'none';
		_$("" + id_btn).style.backgroundImage = 'url(b_1.jpg)';
		_$("" + id_btn).style.backgroundRepeat = 'round';
	}else if(tour == "O"){
		_$("" + id_btn	).style.backgroundImage = 'none';
		_$("" + id_btn).style.backgroundImage = 'url(b_2.jpg)';
		_$("" + id_btn).style.backgroundRepeat = 'round';
	}
}
function nomJoueur(){
	var j1 = _$('nomP1'),j2 = _$('nomP2');
	nomP1 = prompt('Entrer le nom du joueur n°: 1 ');
	nomP2 = prompt('Entrer le nom du joueur n°: 2 ');
	j1.innerHTML = "";
	j1.innerHTML = nomP1 +"( X )";
	j2.innerHTML = "";
	j2.innerHTML = nomP2 + "( O )";
}
nomJoueur();
InitializeMatrice();
monterCasse();
localisation();