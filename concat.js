var app = angular.module("MyConcatenationModule", []);

app.controller("ConcCtrl", ConcCtrl);

function ConcCtrl() {
    
    
    
    this.showResult = function() {
        
        var number1 = this.input3;
        var number2 = this.input4;
        
        this.resultValue = number1 + number2 ;
        
    }
    
}