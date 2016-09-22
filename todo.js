var app = angular.module("ToDoAPP", []);
app.controller("toDoCtrl", toDoCtrl);

function toDoCtrl() {
    
        this.editMode = false;
        
        this.todos = [
            "GIT",
            "JavaScript",
            "AngularJS" 
        ];
    
        
        this.addItems = function() {
            
            this.todos.push(this.item);
            this.item = "";
        }
        
        this.editItems = function() {
            this.editMode = !this.editMode;
        }
        
        this.deleteItem = function(index) {
            this.todos.splice(index, 1);
        }
    
}
