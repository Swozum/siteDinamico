var indexTime;
var indexConferencia;


//*********** inicialização **********

function inic(){
	Intro();
	selectConferencia();
}


//*********** input/output ***********

//output de um conteúdo num contentor HTML, dados o ID do contentor e o conteúdo (boleano, número ou string)
function out(idCont, conteudo){
	document.getElementById(idCont).innerHTML = conteudo;
}


//***************************************Introdução***********************************
//Cria a Introdução
function Intro(){
	refID("operacoes").style.display="none";
	verIntrod();
	var iConf, codHTML = '';
	for(iConf = 0; iConf < confSec(); iConf++){
		codHTML += codSelectConferencia(iConf);
	}
	out("dir", codTextoIntrod());
	out("esq", codHTML);
}




//Codigo para o div esquerdo(Foto e o nome da Conferencia)
function codSelectConferencia(iConf){
	var codHTML = '<div class="selectConferencia" onclick="vistaConferencia('+ iConf +')">';
	codHTML += confFoto(iConf);
	codHTML += confNome(iConf);
	return codHTML +'</div>';
}
//Codigo para o div Direito na introdução(titulo e texto de introdução)
function codTextoIntrod(){
	var iParag, codHTML = '';
	codHTML += '<h1 id="introTitulo">' + int() + '</h1>';
	codHTML += '<h2 id="introSubtitulo">' + intSub() + '</h2>';
	for(iParag = 0; iParag < intTextoTamanho(); iParag++){
		codHTML += intTexto(iParag);
	}
	return codHTML;
}
//***************************************Pintor***********************************

//Navegação drop-down Conferencias
function selectConferencia(){
	var iConf, codHTML = '';
	for(iConf = 0; iConf<confSec(); iConf++){
		codHTML += '<option>' + confNome(iConf) + '</option>';
	}
	out("nomeConferencia", codHTML);
}
//mostra a conferencia escolhida na lista drop-down
function escolheConferencia(){
	indexConferencia = refID("nomeConferencia").selectedIndex;
	vistaConferencia(indexConferencia);
}
//avanca e recua a conferencia mostrada
function avanca(passo){
	indexConferencia += passo;
	if(indexConferencia < 0)indexConferencia = confSec()-1;
	console.log(indexConferencia);
	//excede o limite máximo: vai para o minimo
	if(indexConferencia > (confSec()-1))indexConferencia = 0;
	console.log(indexConferencia);

	//atualiza a navegação da select da conferencia
	refID("nomeConferencia").selectedIndex = indexConferencia;
	//mostra o pintor
	vistaConferencia(indexConferencia);
}
//Foto da conferencia
function conferenciaFoto(iConf){
	var codHTML = '';
	codHTML += '<img style=width:250px; text-align:center;' + confFoto(iConf);
	return codHTML;
}


//Texto sobre a conferencia
function conferenciaInfo(iConf){
	var codHTML = '';
	codHTML += '<h2 class="nomeConf">' + confNome(iConf) + '</h2>';
	codHTML += confTexto(iConf);
	return codHTML;
}
//***************************************OBRAS***********************************

//mostra a equipe escolhida na lista drop-down
function selectEquipe(iConferencia){
	var  codHTML = '';
	for(iEquipe = 0; iEquipe < equipesConferencia(iConferencia); iEquipe++){
		codHTML += '<option>' + equipeNome(iConferencia, iEquipe) + '</option>';
	}
	out("nomeEquipe", codHTML);

}

//mostra a equipe escolhida na lista drop-down
function escolheEquipe(){
	indexEquipe = refID("nomeEquipe").selectedIndex;
	equipeGrande(indexConferencia, indexEquipe);
}
//muda a equipe exibida por meio do botao 'proxima equipe' e 'equipe anterior'
function avancaEquipe(passo){
	indexEquipe += passo;
	//retrocede do limite mínimo: vai para o maxímo
	if(indexEquipe < 0)indexEquipe = equipesConferencia(indexConferencia) -1;
	console.log(indexEquipe);
	//excede o limite máximo: vai para o minimo
	if(indexEquipe > (equipesConferencia(indexConferencia)-1))indexEquipe = 0;
	console.log(indexEquipe);
	//atualiza o nome das obras no select
	refID("nomeEquipe").selectedIndex = indexEquipe;
	//mostra a equipe
	equipeGrande(indexConferencia, indexEquipe);
}
//Cria a vista para a conferencia
function vistaConferencia(iConferencia){
	verConferencia();
	indexConferencia = iConferencia;
	var iEquipe, codHTML = '';
	for(iEquipe = 0; iEquipe < equipesConferencia(iConferencia); iEquipe++){
		codHTML += '<div class="imag"><img style="width:100%" src="' +  equipeFoto(iConferencia, iEquipe) + '" onclick="equipeGrande('+indexConferencia+','+iEquipe+ ')"/>'+equipeNome(indexConferencia,iEquipe)+'</div>';
	}
	//carregaDropDown();
	out("esqConferencia", codHTML);
	out("fotoConferencia", conferenciaFoto(iConferencia));
	out("conferenciaCont", conferenciaInfo(iConferencia));
	refID("nomeConferencia").selectedIndex = iConferencia;
}
//Foto e nome das equipes da conferencia selecionada
function codSelectEquipe(iConferencia, iEquipe){
	var codHTML = '<div class="selectConferencia" onclick="equipeGrande('+ iConferencia+"," + iEquipe +')">';
	codHTML += equipeFoto(iConferencia, iEquipe);
	codHTML += equipeNome(iConferencia, iEquipe);
	return codHTML +'</div>';
}


function equipeGrande(iConferencia, iEquipe){
	verEquipe();
	var codHTML = '';
	indexEquipe = iEquipe;
	codHTML += '<button class="btn" onclick="Intro()">ver introdução</button><button class="btn" id="verConferencia" onclick="vistaConferencia('+ iConferencia +')" >ver Conferencia</button><button class="btn" onclick="avancaEquipe(-1)">equipe anterior</button><button class="btn" onclick="avancaEquipe(1)">equipe seguinte</button><select id="nomeEquipe" onchange="escolheEquipe()"></select>'
	out("operacoesTime", codHTML);
	selectEquipe(iConferencia);
	let el = document.getElementById("equipeCompleta");
	el.style.cssText = 'background-color:'+fundoCor(iConferencia, iEquipe)+';color:'+letraCor(iConferencia, iEquipe)+';';
	codHTML = '';
	codHTML += '<img class="equipeGrande" src = "'+equipeFoto(iConferencia, iEquipe)+'"/>';
	codHTML += '<h2 id="tituloEquipe">' + equipeNome(iConferencia, iEquipe)+"&nbsp<br> "+ equipeAno(iConferencia, iEquipe)+'</h2>';
	codHTML += equipeTexto(iConferencia, iEquipe);
	out("equipeCompleta", codHTML);
	refID("nomeEquipe").selectedIndex = iEquipe;
}


//************* processos ************

//referência a um objeto HTML, dado o seu ID
function refID(idObj){
	return document.getElementById(idObj);
}


//ALTERAR QUAL DIV PODE SER VISTO
function verConferencia(){
    document.getElementById("Introd").style.display="none";
	document.getElementById("Conferencia").style.display="block";
	document.getElementById("Time").style.display="none";
}

function verEquipe(){
	document.getElementById("Introd").style.display="none";
	document.getElementById("Conferencia").style.display="none";
	document.getElementById("Time").style.display="block";
}

function verIntrod(){
	document.getElementById("Introd").style.display="block";
	document.getElementById("Conferencia").style.display="none";
	document.getElementById("Time").style.display="none";
}
