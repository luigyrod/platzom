/*
	En caso de que export no tuviera default, entonces se debe poner 
	llave al nombre de la funcion
	import {platzom} from 'platzom'
*/
export default function platzom(str){
	let translation = str

	// Si la palabra termina con ar, se le uitan esos dos caracteres
	if(str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)
	}

	if( str.toLowerCase().startsWith('z') ){
		translation += 'pe'
	}

	const length = translation.length
	if( length >= 10 ){
		const firstHalf = translation.slice(0, Math.round(length/2))
		const secondHalf = translation.slice( Math.round(length/2))
		translation = `${firstHalf}-${secondHalf}`
	}

	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str) {
		const length = str.length
		let translation = ''
		let capitalize = true
		for(let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if(str == reverse(str)){
		return minMay(str)
	}
	return translation
}
