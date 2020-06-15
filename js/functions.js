const init = () => {
	const button1 = document.querySelector("#numbers");
	const balls1 = document.querySelectorAll(".ball");
	
	
	button1.addEventListener("click", () => {
		button1.classList.add("hidden");
		let lotto1 = [];

		//Fill lotto array with 6 unique numbers
		for (let i = 0; i < 49; i++) {
			const number1 = i+1;

				//Set colour based on the number range
				let colour1 = "";

				switch (true) {
					case number1 < 10:
						colour1 = "#5e5757";
						break;
					case number1 < 20:
						colour1 = "rgba(255,0,0,0.5)";
						break;
					case number1 < 30:
						colour1 = "rgba(0,0,255,0.5)";
						break;
					case number1 < 40:
						colour1 = "rgba(255,60,119,0.5)";
						break;
					case number1 < 50:
						colour1 = "#6b425d";
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
	for (let i = 0; i < balls1.length; i++) {
		balls1[i].classList.remove("show");
		balls1[i].style.backgroundColor = lotto1[i].colour1;
		balls1[i].querySelector("span").innerHTML = lotto1[i].number1;
		setTimeout(() => {
			balls1[i].classList.add("show");
			puntos1.classList.add("mostrar");
			rondas1.classList.add("mostrar");
			aciertos1.classList.add("mostrar");
		}, 50 * i);
	}
	
	const button1 = document.querySelector("#numbers");
	setTimeout(() => {
		button1.classList.remove("hidden");
	}, 650);
	
};

document.addEventListener("DOMContentLoaded", () => {
	init();
	init1();
	init3();
	
});


const init1 = () => {
	const button = document.querySelector("#go");
	const titulo = document.querySelector("#titulo");
	const borde = document.querySelector("#wrapper1");
	const balls = document.querySelectorAll(".ball1");
    let numbers = [];
	
	//Poner los numeros del 1 al 49
	for (i = 1; i < 50; i++) {
		numbers = [...numbers, i];
	}
	
	button.addEventListener("click", () => {
		titulo.classList.add("mostrarp1");
		borde.classList.add("border");
		button.classList.add("hidden");
		let lotto = [];

		//Fill lotto array with 6 unique numbers
		for (let i = 0; i < 6; i++) {
			const number = numbers[Math.floor(Math.random() * numbers.length)];
			const numberExists = lotto.find(o => o.number === number);
			if (!numberExists) {
				//Set colour based on the number range
				let colour = "";

				switch (true) {
					case number < 10:
						colour = "#5e5757";
						break;
					case number < 20:
						colour = "rgba(255,0,0,0.5)";
						break;
					case number < 30:
						colour = "rgba(0,0,255,0.5)";
						break;
					case number < 40:
						colour = "rgba(255,60,119,0.5)";
						break;
					case number < 50:
						colour = "#6b425d";
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
	
	const button = document.querySelector("#go");
	setTimeout(() => {
		button.classList.remove("hidden");
	}, 650);
	
};


	const init3= () => {
		const balls3 = document.querySelectorAll(".ball");
		const titulo2 = document.querySelector("#titulo1");
		const borde2 = document.querySelector("#wrapper2");
		const balls4 = document.querySelectorAll(".ball2");
		var i =0;

			for(let index =0; index < balls3.length; index++ ){
				balls3[index].addEventListener("click", function() {
				if( i < 6){
					if(i==0){
						titulo2.classList.add("mostrarp2");
						borde2.classList.add("border");
					}
					balls3[index].classList.add("borrar");
					const number3 = index + 1;
					let colour3 = "";

						switch (true) {
							case number3 < 10:
								colour3 = "#5e5757";
								break;
							case number3 < 20:
								colour3 = "rgba(255,0,0,0.5)";
								break;
							case number3 < 30:
								colour3 = "rgba(0,0,255,0.5)";
								break;
							case number3 < 40:
								colour3 = "rgba(255,60,119,0.5)";
								break;
							case number3 < 50:
								colour3 = "#6b425d";
								break;
						}	
				displayResult3(number3, colour3, balls4, i);
				i ++;
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