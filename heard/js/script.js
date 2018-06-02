 function upCase(str) {
  
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

var str = "урок-3-был слишком легким";
// alert(upCase(str.replace(/-/g, ' ').replace(/м/g, 'о').substring(0, 18)));

let arr = [20, 33, 1, 'Человек', 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++){
	sum = Math.sqrt(sum + parseInt(Math.pow(arr[i],2)));
	// console.log(sum)
};
// let arg = prompt('введите значеие аргумента')
function takeArgument(arg) {
	if ((typeof(arg)) === 'string') { if (arg.length > 50){
		alert(arg.slice(0, 50) + '(...)');
	} else {alert(arg.replace(/^\s*/,'').replace(/\s*$/,''));}
	} else {alert('передана не строка')}
} 
// takeArgument("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa adipisci quod laudantium. Ea eos unde eius iusto maiores, numquam! Dignissimos ab consectetur iste eum facere alias ut. Animi voluptatibus eos alias, repudiandae culpa corporis aliquam dolor doloribus, dolore omnis impedit eaque eligendi exercitationem optio, eius. Rem officia quasi, reiciendis. ") ;