var outputScreen=document.getElementsByClassName('outputScreen')[0];
console.log(outputScreen);
var buttons=document.getElementsByClassName('working-keys');
var operand1=0;
var operand2=null;
var operator=null;
function isOperator(value){
	return value=='+'||value=='-'||value=='*'||value=='/';
}
for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',function(){
		var value=this.getAttribute('data-value');
		if(isOperator(value)){
			operator=value;
			operand1=parseFloat(outputScreen.textContent);
			outputScreen.textContent="";
		}
		else if(value=='+'){
			operator='+';
			operand1=parseFloat(outputScreen.textContent);

		}
		else if(value=='-'){
			operator='-';
			operand1=parseFloat(outputScreen.textContent);

		}
		else if(value=='*'){
			operator='*';
			operand1=parseFloat(outputScreen.textContent);

		}
		else if(value=='/'){
			operator='/';
			operand1=parseFloat(outputScreen.textContent);

		}
		else if(value=='%'){
			operand1=parseFloat(outputScreen.textContent);
			operand1=operand1/100;
			outputScreen.textContent=operand1;

		}
		else if(value=='.'){
			if(outputScreen.textContent.length && !outputScreen.textContent.includes('.')){
				outputScreen.textContent+='.';
			}
		}
		else if(value=='sign'){
			operand1=parseFloat(outputScreen.textContent);
			operand1=(-1)*operand1;
			outputScreen.textContent=operand1;
		}
		else if(value=='AC'){
			outputScreen.textContent='';
		}
		else if(value=="="){
			
			operand2=parseFloat(outputScreen.textContent);
			var result = eval(operand1 + ' ' + operator + ' ' + operand2);
			outputScreen.textContent=result;
		}
		else{
			outputScreen.innerText+=value;
		}

	});


}