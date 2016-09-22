var app = angular.module("calculator", ["MyConcatenationModule", "ngTagsInput", "ToDoAPP"]); // We have to register the other module to the ng-app module.
app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl() {
    
    this.resultValue = 0;
    this.buttonClicked = function (button) {
        
        this.selectedOption = button; };
    
    
    this.showResult = function () {
        
        var number1 = parseFloat(this.input1);
        var number2 = parseFloat(this.input2);
        
        
        if (this.selectedOption === '+') {
                this.resultValue = number1 + number2;
            } else if (this.selectedOption === '-') {
                this.resultValue = number1 - number2;
            } else if (this.selectedOption === '*') {
                this.resultValue = number1 * number2;
            } else if (this.selectedOption === '/') {
                this.resultValue = number1 / number2;
            }
        
        
        
        
    }
    
}

app.controller("TagsDemoCtrl", TagsDemoCtrl);

function TagsDemoCtrl() {
    this.tags = [
    { text: 'Game1' },
    { text: 'Game2' },
    { text: 'Game3' }
  ];
}