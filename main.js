let a = Number(prompt('enter the 1st number'))
let b = Number(prompt('enter the 2nd number'))
const gcd=(a,b)=>{
	if(b===0){
		return a
	}
	console.log(b,a%b)	
	return gcd(b,a%b)

}

document.write("given number a= " + a + "<br><br>")
document.write("given number b= " + b + "<br><br>")
document.write("GCD is = " + gcd(a, b))