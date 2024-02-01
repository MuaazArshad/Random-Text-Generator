'use strict';

const count = document.getElementById('count');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

function generateParagraph(wordList) {
	let paragraph = '';
	let words = Math.floor(Math.random() * 60) + 30;
	console.log(words);
	for (let i = 0; i < words; i++) {
		let random = Math.floor(Math.random() * wordList.length);
		paragraph += wordList[random] + ' ';
	}
	return paragraph;
}

fetch('https://random-word-api.herokuapp.com/all')
	.then((response) => response.json())
	.then((data) => {
		const wordList = data.map((item) => item);
		// console.log(wordList);
		btn.addEventListener('click', () => {
			container.innerHTML = '';
			let value = count.value;
			for (let i = 0; i < value; i++) {
				let paragraph = generateParagraph(wordList);
				paragraph += '.';
				// console.log(value);
				// console.log(paragraph);
				container.innerHTML += `<p class="paragraphs">${paragraph}</p> <br/>`;
			}
		});
	});
