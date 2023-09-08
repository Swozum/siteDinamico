//INTRODUÇÃO
//Titulo da introdução
function int(){
    return introd.titulo;
}

//Subtitulo da introdução
function intSub(){
    return introd.subtitulo;
}
//logo da NCAA
function intLogo(){
    return introd.logo;
}

//Texto da Introdução
function intTextoTamanho(){
    return introd.textoIntrod.length;
}

//Texto da Introdução
function intTexto(iParag){
    return '<p class="escrita">' + introd.textoIntrod[iParag] + '</p>';
}





//CONFERENCIAS
//Numero de secções das conferencias
function confSec(){
    return conferencias.length;
}

//Nome da conferencia
function confNome(iConf){
    return conferencias[iConf].nomeConferencia;
}

//Foto da conferencia
function confFoto(iConf){
    return '<img width="100%" src="' + conferencias[iConf].logoConferencia +'"/>';
}

//Texto da conferencia
function confTexto(iConf){
    return '<p class="escrita">' + conferencias[iConf].introdConferencia +'</p>';
}


//Equipes
//Numero de secções das equipes
function equipesConferencia(iConf){
    return conferencias[iConf].equipesConferencia.length;
}

//Nome das equipes da conferencia
function equipeNome(iConf, iTime){
    return conferencias[iConf].equipesConferencia[iTime].nomeEquipe;
}

//Cidade das equipes da conferencia
function equipeAno(iConf, iTime){
    return conferencias[iConf].equipesConferencia[iTime].cidadeEquipe;
}

//Fotos das equipes da conferencia
function equipeFoto(iConf, iTime){
    return conferencias[iConf].equipesConferencia[iTime].estadioEquipe;
}

//Texto das equipes da conferencia
function equipeTexto(iConf, iTime){
    return '<p class="escrita">' + conferencias[iConf].equipesConferencia[iTime].textoEquipe + '</p>';
}
//Cor de fundo que corresponde a cor primaria de cada equipe
function fundoCor(iConf, iTime){
    return conferencias[iConf].equipesConferencia[iTime].fundoEquipe;
}//Cor para as letras no texto das equipes que corresponde a cor secundaria de cada equipe
function letraCor(iConf, iTime){
    return conferencias[iConf].equipesConferencia[iTime].corEquipe;
}