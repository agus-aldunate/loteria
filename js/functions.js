const init = () => {
	window.totales=0;
	window.totales1=0;
	const button1 = document.querySelector("#numbers");
	const button2 = document.querySelector("#go");
	const button3 = document.querySelector("#next");
	const titulo = document.querySelector("#titulo");
	const borde = document.querySelector("#wrapper1");
	const titulo1 = document.querySelector("#titulo1");
	const borde2 = document.querySelector("#wrapper2");
	const balls1 = document.querySelectorAll(".ball");
	const balls2 = document.querySelectorAll(".ball1");
	const balls3 = document.querySelectorAll(".ball2");
	var x = 0;
	
	button1.addEventListener("click", () => {
		window.i = 0;
		button1.classList.add("hidden");
		button2.classList.add("hidden");
		button3.classList.add("hidden");
		titulo.classList.remove("mostrarp1");
		borde.classList.remove("border");
		titulo1.classList.remove("mostrarp2");
		borde2.classList.remove("border");

		for(let i = 0; i < balls2.length; i++){
			balls2[i].classList.remove("show1");
			balls3[i].classList.remove("show2");
		}
		for (let i = 0; i < balls1.length; i++) {
			balls1[i].classList.remove("show");
			setTimeout(() => {
				balls1[i].classList.remove("borrar");
				balls1[i].classList.add("show");
			}, 50 * i);
		}
		let lotto1 = [];

		//Fill lotto array with 6 unique numbers
		for (let i = 0; i < 49; i++) {
			const number1 = i+1;

				//Set colour based on the number range
				let colour1 = "";

				switch (true) {
					case number1 < 10:
						colour1 = "#d1d1d1";
						break;
					case number1 < 20:
						colour1 = "#ababab";
						break;
					case number1 < 30:
						colour1 = "#6b6b6b";
						break;
					case number1 < 40:
						colour1 = "#545454";
						break;
					case number1 < 50:
						colour1 = "#000000";
						break;
				}

				// fill lotto array with number and colour
				lotto1 = [...lotto1, {number1, colour1}];
		}
		displayResult1(lotto1, balls1);
	});
};

//Display 6 numbers with correct colours from lotto and colours array
const displayResult1 = (lotto1, balls1) => {
	const puntos1 = document.querySelector("#puntos");
	const rondas1 = document.querySelector("#rondas");
	const aciertos1 = document.querySelector("#aciertos");
	const cantidad = document.querySelector("#cantidad");
	for (let i = 0; i < balls1.length; i++) {
		balls1[i].classList.remove("show");
		balls1[i].style.backgroundColor = lotto1[i].colour1;
		balls1[i].querySelector("span").innerHTML = lotto1[i].number1;
		setTimeout(() => {
			balls1[i].classList.add("show");
			puntos1.classList.add("mostrar");
			rondas1.classList.add("mostrar");
			aciertos1.classList.add("mostrar");
			cantidad.classList.add("mostrar");
		}, 50 * i);
	}
	
	const button1 = document.querySelector("#numbers");
	setTimeout(() => {
		
	}, 650);
	
};

document.addEventListener("DOMContentLoaded", () => {
	init();
	init1();
	init2();
	init3();
	init4();
	
});


const init1 = () => {
	const button = document.querySelector("#go");
	const button3 = document.querySelector("#next");
	const titulo = document.querySelector("#titulo");
	const borde = document.querySelector("#wrapper1");
	const balls = document.querySelectorAll(".ball1");
	const balls5 = document.querySelectorAll(".ball2");
	let numbers = [];
	var puntos=0;
	var aciertos=0;
	window.x = 0;
	
	//Poner los numeros del 1 al 49
	for (i = 1; i < 50; i++) {
		numbers = [...numbers, i];
	}
	
	button.addEventListener("click", () => {
		window.x = 1;
		titulo.classList.add("mostrarp1");
		borde.classList.add("border");
		button.classList.add("hidden");
		let lotto = [];

		//Fill lotto array with 6 unique numbers
		for (i = 0; i< 6; i++) {
			const number = numbers[Math.floor(Math.random() * numbers.length)];
			const numberExists = lotto.find(o => o.number === number);
			if (!numberExists) {
				//Set colour based on the number range
				let colour = "";

				switch (true) {
					case number < 10:
						colour = "#d1d1d1";
						break;
					case number < 20:
						colour = "#ababab";
						break;
					case number < 30:
						colour = "#6b6b6b";
						break;
					case number < 40:
						colour = "#545454";
						break;
					case number < 50:
						colour = "#000000";
						break;
				}
				lotto = [...lotto, {number, colour}];
			} else {
				i--;
			}
		}
		lotto.sort(function (a, b) {
			if (a.number > b.number) {
			  return 1;
			}
			if (a.number < b.number) {
			  return -1;
			}
			// a must be equal to b
			return 0;
		  });
		displayResult(lotto, balls);
		var puntos=0;
		var aciertos=0;
for(let x=0; x<balls.length; x++){
	for (let y=0; y<balls.length; y++){
		if(balls[x].querySelector("span").innerHTML==balls5[y].querySelector("span").innerHTML){
			puntos=puntos+10;
			aciertos=aciertos+1;
			balls[x].classList.add("correcto");
			balls5[y].classList.add("correcto1");
		}
	}
}



document.getElementById("ac").innerHTML = aciertos;

if (puntos==50){
	puntos=puntos+100;
}else if(puntos==60){
	puntos=puntos+1000;
}
window.totales1=puntos;
window.totales=window.totales+window.totales1;
document.getElementById("contenido").innerHTML = puntos;
document.getElementById("total").innerHTML = window.totales;



		button3.classList.remove("hidden");
	});


};


//Display 6 numbers with correct colours from lotto and colours array
const displayResult = (lotto, balls) => {
	for (let i = 0; i < 6; i++) {
		balls[i].classList.remove("show1");
		balls[i].style.backgroundColor = lotto[i].colour;
		balls[i].querySelector("span").innerHTML = lotto[i].number;
		setTimeout(() => {
			balls[i].classList.add("show1");
		}, 50 * i);


	}


	}
	


const init2 = () => {
	const titulo = document.querySelector("#titulo");
	const borde = document.querySelector("#wrapper1");
	const titulo1 = document.querySelector("#titulo1");
	const borde2 = document.querySelector("#wrapper2");
	const button1 = document.querySelector("#next");
	const button2 = document.querySelector("#go");
	const balls1 = document.querySelectorAll(".ball");
	const balls2 = document.querySelectorAll(".ball1");
	const balls3 = document.querySelectorAll(".ball2");
	var cantidad = 0;
	
	button1.addEventListener("click", () => {
		window.x = 0;
		cantidad ++;
		document.getElementById("cantidad1").innerHTML = cantidad;
		var puntos=0;
		var aciertos=0;
		window.i = 0;
		button2.classList.add("hidden");
		button1.classList.add("hidden");
		titulo.classList.remove("mostrarp1");
		borde.classList.remove("border");
		titulo1.classList.remove("mostrarp2");
		borde2.classList.remove("border");
		document.getElementById("contenido").innerHTML = puntos;
		document.getElementById("ac").innerHTML = aciertos;
		for(let i = 0; i < balls2.length; i++){
			balls2[i].classList.remove("show1");
			balls3[i].classList.remove("show2");
			balls2[i].classList.remove("correcto");
			balls3[i].classList.remove("correcto1");
		}
		for (let i = 0; i < balls1.length; i++) {
			balls1[i].classList.remove("show");
			setTimeout(() => {
				balls1[i].classList.remove("borrar");
				balls1[i].classList.add("show");
			}, 50 * i);
		}
		let lotto1 = [];

		//Fill lotto array with 6 unique numbers
		for (let i = 0; i < 49; i++) {
			const number1 = i+1;

				//Set colour based on the number range
				let colour1 = "";

				switch (true) {
					case number1 < 10:
						colour1 = "#d1d1d1";
						break;
					case number1 < 20:
						colour1 = "#ababab";
						break;
					case number1 < 30:
						colour1 = "#6b6b6b";
						break;
					case number1 < 40:
						colour1 = "#545454";
						break;
					case number1 < 50:
						colour1 = "#000000";
						break;
				}

				// fill lotto array with number and colour
				lotto1 = [...lotto1, {number1, colour1}];
		}
		displayResult2(lotto1, balls1);
	});
};

//Display 6 numbers with correct colours from lotto and colours array
const displayResult2 = (lotto1, balls1) => {
	for (let i = 0; i < balls1.length; i++) {
		balls1[i].classList.remove("show");
		balls1[i].style.backgroundColor = lotto1[i].colour1;
		balls1[i].querySelector("span").innerHTML = lotto1[i].number1;
		setTimeout(() => {
			balls1[i].classList.add("show");
		}, 50 * i);
	}
	
	
};


	const init3= () => {
		const button2 = document.querySelector("#go");
		const balls3 = document.querySelectorAll(".ball");
		const titulo2 = document.querySelector("#titulo1");
		const borde2 = document.querySelector("#wrapper2");
		const balls4 = document.querySelectorAll(".ball2");
		window.i = 0;
		var cantidad = 0;
			for(let index = 0; index < balls3.length; index++ ){
				balls3[index].addEventListener("click", function() {
				if( window.i < 6){
					if(window.i==0){
						titulo2.classList.add("mostrarp2");
						borde2.classList.add("border");
					}
					balls3[index].classList.add("borrar");
					const number3 = index + 1;
					let colour3 = "";

					switch (true) {
						case number3 < 10:
							colour3 = "#d1d1d1";
							break;
						case number3 < 20:
							colour3 = "#ababab";
							break;
						case number3 < 30:
							colour3 = "#6b6b6b";
							break;
						case number3 < 40:
							colour3 = "#545454";
							break;
						case number3 < 50:
							colour3 = "#000000";
							break;
					}
				displayResult3(number3, colour3, balls4, window.i);
				window.i ++;
				if(window.i == 6){
					button2.classList.remove("hidden");
				}
			}
		});

	}
	};
		const displayResult3 = (number3, colour3, balls4, i) => {
				balls4[i].classList.remove("show2");
				balls4[i].style.backgroundColor = colour3;
				balls4[i].querySelector("span").innerHTML = number3;
				setTimeout(() => {
					balls4[i].classList.add("show2");
				}, 50 * i);
		};

	const init4= () => {
			const button2 = document.querySelector("#go");
			const balls3 = document.querySelectorAll(".ball");
			const balls4 = document.querySelectorAll(".ball2");
			window.i = 0;
			for(let index = 0; index < balls4.length; index++ ){
				balls4[index].addEventListener("click", function() {
					if(window.i == index + 1){
						button2.classList.add("hidden");
						if(window.x == 0){
							balls4[index].classList.remove("show2");
							const number = balls4[index].querySelector("span").innerHTML - 1;
							balls3[number].classList.remove("borrar");
								window.i = index;
						}
				}
				});
			}
		}