
var h1 = document.createElement("h1");

var div1 = document.createElement("div");
var div2 = document.createElement("div");

var h2 = document.createElement("h2");
var p = document.createElement("p");

var h22 = document.createElement("h2");
var p2 = document.createElement("p")

var header = document.querySelector("header");
var main = document.querySelector("main");
var conteudo = document.createTextNode("Olá, meu nome é Mateus, estou cursando programação à distância pelo CEFET, e esse é apenas outro site que estou desenvolvendo. É um grande prazer ter você aqui em meu site! :)  :)");
var conteudo2 = document.createTextNode("Nesse curso aprendemos sobre lingugens: HTML, CSS e JavaScript. Está sendo o meu primeiro contato com a programação, é bastante difícil rsrsrs, mas eu consegui absorver muita coisa, e isso vai ser muito útil pra mim daqui uns anos. Tenho um sonho de criar minha loja de roupas de grife, e quero ser responsável (mesmo que inicialmente) pelo site da minha loja.");
var titulo = document.createTextNode("Olá, espero que esteja tudo bem com você!!!");
var titulodiv1 = document.createTextNode("Apresentação!");
var titulodiv2 = document.createTextNode("Um pouco mais sobre minhas experiências no curso...");

h1.appendChild(titulo);
p.appendChild(conteudo);
h2.appendChild(titulodiv1);
p2.appendChild(conteudo2);
h22.appendChild(titulodiv2);

//main
main.appendChild(div1);
main.appendChild(div2);

div1.appendChild(h2);
div1.appendChild(p);

div2.appendChild(h22);
div2.appendChild(p2);

p.classList.add('class');
p2.classList.add('class')

//header
header.appendChild(h1);

//add ao DOM
document.body.insertBefore(header);
document.body.insertBefore(main);