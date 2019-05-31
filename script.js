var age=Number(prompt("How are old you?"))

if(age<0){alert("Error: Your age must be a positive number");
}

if(age===21){alert("Happy 21st birthday!");
}

if(age%2!==0){alert("Your age is odd!");
}

if (age%Math.sqrt(age) === 0) {
	alert("Your age is a perfect square!");
}
