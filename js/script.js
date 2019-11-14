/*Запрет ввода симовлов в поле #enterStr*/
document.getElementById("enterStr").onkeypress = function(event){
	event = event || window.event;
	if (event.charCode && (event.charCode < 48 || event.charCode > 49))
		return false;
};

document.getElementById("enterStr").onkeypress = function(event){
	event = event || window.event;
	if (event.charCode && (event.charCode < 48 || event.charCode > 49))
		return false;
};

// Проверка на количество введённых символов
function valid(input) {
	let inputValueStr = document.getElementById('enterStr').value.length;
	let valueStr = document.getElementById('enterStr').value;
	let check = true;
	// Проверка первой строки
	if (inputValueStr != 9) {
		alert('The field with the string is filled incorrectly, you must enter 9 digits');
		check = false;
	}
	// Проверка остальных строк
	let valueArrStr = [ document.getElementById('arr1').value,
						document.getElementById('arr2').value,
						document.getElementById('arr3').value,
						document.getElementById('arr4').value,
						document.getElementById('arr5').value,
						document.getElementById('arr6').value,
						document.getElementById('arr7').value,
						document.getElementById('arr8').value,
						document.getElementById('arr9').value ];
	for (let i = 0; i < 9; i++) {
		if (valueArrStr[i] == "" || valueArrStr[i] == " ") {
			alert('Fill in all the fields');
			i = 8;
			check = false;
		}
	}

	if (check == true) {
		outputArr();
	}
};


// Создание нового массива
function outputArr() {
	let valueStr = document.getElementById('enterStr').value;
	let valueArrStr = [ document.getElementById('arr1').value,
						document.getElementById('arr2').value,
						document.getElementById('arr3').value,
						document.getElementById('arr4').value,
						document.getElementById('arr5').value,
						document.getElementById('arr6').value,
						document.getElementById('arr7').value,
						document.getElementById('arr8').value,
						document.getElementById('arr9').value ];
	let numElement = 0;
	for (let numPos = 0; numPos < 9; numPos++) {
		if (valueStr[numPos] == '1') {
			numElement++;
		}
	}
	let newArr = [numElement];
	let newElement = 0;
	for (let numPos = 0; numPos < 9; numPos++) {
		if (valueStr[numPos] == '1') {
			newArr[newElement] = valueArrStr[numPos];
			newElement++;
		}
	}
	alert(newArr);
};