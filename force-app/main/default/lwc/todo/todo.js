import { LightningElement } from 'lwc';

export default class Todo extends LightningElement {

    todoValue = '';
    todoList = [
        {
            id : 1,
            value : 'test',
            status : true
        }
    ];

    idCounter = 0;

    get hasTodoListItems() {
        return this.todoList.length > 0;
    }

    handleChange(event){
        this.todoValue = event.target.value;
    }

    handleClear(event) {
        this.todoList = [];
    }

    addTodo(event) {
        if (this.todoValue === '') {
            alert("You must add a value");
            return;
        }

        this.idCounter++;
        let newTodo = {
            id : this.idCounter,
            value : this.todoValue
        }
        this.todoList = [...this.todoList, newTodo ]
        this.todoValue = '';

    }

    deleteHandler(event) {
        this.todoList = this.todoList.filter(todo => todo.id !== event.detail);
    }

    connectedCallback() {
        this.idCounter = this.todoList.length;
    }
}