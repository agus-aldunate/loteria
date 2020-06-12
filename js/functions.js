
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
						colour = "#2EAFFD";
						break;
					case number < 30:
						colour = "#EA6CE9";
						break;
					case number < 40:
						colour = "#6DCB56";
						break;
					case number < 50:
						colour = "#F3EF80";
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
		}, 500 * i);
	}
	
	const button = document.querySelector("#go");
	setTimeout(() => {
		button.classList.remove("hidden");
	}, 6500);
	
};

document.addEventListener("DOMContentLoaded", () => {
	init();
});
