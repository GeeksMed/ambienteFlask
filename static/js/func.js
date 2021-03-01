function calculaIMC(){
	nome = document.formulario.nome.value;

	sexo = document.formulario.sexo.value;

	peso = parseFloat(document.formulario.peso.value);

	altura = parseFloat(document.formulario.altura.value);

	idade = parseInt(document.formulario.idade.value);

	resultado = peso/(altura*altura);
	resultado = resultado.toFixed(2);

	if (!sexo || !peso || !altura || !idade) {
		alert("Há dados sem preencher. Favor informar e calcular novamente.\nOs dados serão apagados.");
	} else {
		if (idade > 60) {
			if (resultado <= 22) {
				aux = 0;
			}
			if (resultado > 22 && resultado <= 27) {
				aux = 1;
			}
			if (resultado > 27) {
				aux = 4;
			}
		} else {
			if (sexo == "fem") {
				if (resultado <= 19.1) {
					aux = 0;
				}
				if (resultado > 19.1 && resultado <= 25.8) {
					aux = 1;
				}
				if (resultado > 25.8 && resultado <= 27.3) {
					aux = 2;
				}
				if (resultado > 27.3 && resultado <= 32.3) {
					aux = 3;
				}
				if (resultado > 32.3) {
					aux = 4;
				}
			} else {
				if (resultado <= 19.1) {
					aux = 0;
				}
				if (resultado > 19.1 && resultado <= 25.8) {
					aux = 1;
				}
				if (resultado > 25.8 && resultado <= 27.3) {
					aux = 2;
				}
				if (resultado > 27.3 && resultado <= 32.3) {
					aux = 3;
				}
				if (resultado > 32.3) {
					aux = 4;
				}
			}
		}
	}

	calcPage = "<h3>Calculadora IMC</h3>";

	calcPage += "<p>Olá " + nome + ".</p>";

	calcPage += "<p>Segundo as informações, seu IMC é: <strong>" + resultado + "</strong>.</p>";

	calcPage += "<p>Informamos que você está com ";
	if (aux == 0) {
		calcPage += "<b>o peso abaixo da média</b>.</p>";
		calcPage += "<h5>Dicas e informações:</h5>";
		calcPage += "<p>Recomendamos uma alimentação saudável. Procure um nutricionista para maiores informações.</p>";
	}
	if (aux == 1) {
		calcPage += "<b>o peso ideal</b>.</p>";
		calcPage += "<h5>Dicas e informações:</h5>";
		calcPage += "<p>Seu peso está normal pra sua idade. Continue assim.</p>";
	}
	if (aux == 2) {
		calcPage += "<b>sobrepeso</b>.</p>";
		calcPage += "<h5>Dicas e informações:</h5>";
		calcPage += "<p>Você está um pouco acima do peso, nada muito preocupante. Recomendamos uma alimentação saudável. Procure um nutricionista para maiores informações.</p>";
	}
	if (aux == 3) {
		calcPage += "<b>pré-obesidade</b>.</p>";
		calcPage += "<h5>Dicas e informações:</h5>";
		calcPage += "<p>Você está acima do peso. Recomendamos uma alimentação saudável. Procure um nutricionista para maiores informações.</p>";
	}
	if (aux == 4) {
		calcPage += "<b>obesidade</b>.</p>";
		calcPage += "<h5>Dicas e informações:</h5>";
		calcPage += "<p>Você está acima do peso. Recomendamos que procure um nutricionista para maiores informações.</p>";
	}

	calcPage += "<p>Em tempos de coronavírus, a recomendação é ficar em casa. Mas isso não quer dizer que você precisa ficar parado.</p>";
	calcPage += "<p>Praticar exercícios indoor é importante para manter o condicionamento físico em dia e ainda espantar a preguiça e as sensações ruins que assombram a quarentena, como a ansiedade e o medo.</p>";

	calc = document.getElementById("calculadora");
	calc.innerHTML = calcPage;
}

function enviaEmail(){
	nome = document.formulario.nome.value;

	comment = document.formulario.comment.value;

	email = document.formulario.email.value;

	if (!nome || !comment || !email) {
		alert("Há dados sem preencher. Favor informar e calcular novamente.\nOs dados serão apagados.");
	} else {
	    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Site from " + nome)
             + "&body=" + escape(comment);

    	window.location.href = link;
	}	
}