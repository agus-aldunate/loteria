const init1 = () => {
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
						colour1 = "#FFFFFF";
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
	for (let i = 0; i < balls1.length; i++) {
		balls1[i].classList.remove("show");
		balls1[i].style.backgroundColor = lotto1[i].colour1;
		balls1[i].querySelector("span").innerHTML = lotto1[i].number1;
		setTimeout(() => {
			balls1[i].classList.add("show");
		}, 50 * i);
	}
	
	const button1 = document.querySelector("#numbers");
	setTimeout(() => {
		button1.classList.remove("hidden");
	}, 650);
	
};

document.addEventListener("DOMContentLoaded", () => {
	init1();
});


const init = () => {
	const button = document.querySelector("#go");
	const balls = document.querySelectorAll(".ball");
    let numbers = [];
	
	//Poner los numeros del 1 al 49
	for (i = 1; i < 50; i++) {
		numbers = [...numbers, i];
	}
	
	button.addEventListener("click", () => {
		button.classList.add("hidden");
		let lotto = [];

		//Fill lotto array with 6 unique numbers
		for (let i = 0; i < 49; i++) {
			const number = numbers[Math.floor(Math.random() * numbers.length)];
			const numberExists = lotto.find(o => o.number === number);

			if (!numberExists) {
				//Set colour based on the number range
				let colour = "";

				switch (true) {
					case number < 10:
						colour = "#FFFFFF";
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

				// fill lotto array with number and colour
				lotto = [...lotto, {number, colour}];
			} else {
				i--;
			}
		}
		displayResult(lotto, balls);
	});
};

//Display 6 numbers with correct colours from lotto and colours array
const displayResult = (lotto, balls) => {
	for (let i = 0; i < balls.length; i++) {
		balls[i].classList.remove("show");
		balls[i].style.backgroundColor = lotto[i].colour;
		balls[i].querySelector("span").innerHTML = lotto[i].number;
		setTimeout(() => {
			balls[i].classList.add("show");
		}, 50 * i);
	}
	
	const button = document.querySelector("#go");
	setTimeout(() => {
		button.classList.remove("hidden");
	}, 650);
	
};

document.addEventListener("DOMContentLoaded", () => {
	init();
});
