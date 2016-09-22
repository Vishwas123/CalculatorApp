var app = angular.module("calculator", []);
app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl() {
    
    this.resultValue = 0;
    this.buttonClicked = function(button) {
        
        this.selectedOption = button;
        
    }
    
    
    this.showResult = function() {
        
        var number1 = parseFloat(this.input1);
        var number2 = parseFloat(this.input2);
        
        
        if(this.selectedOption === '+') {
                this.resultValue = number1 + number2;
            }
        else if(this.selectedOption === '-') {
                this.resultValue = number1 - number2;
            }
        else if(this.selectedOption === '*') {
                this.resultValue = number1 * number2;
            }
        else if(this.selectedOption === '/') {
                this.resultValue = number1 / number2;
            }
        
        
        
        
    }
    
}