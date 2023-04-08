import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {

    @api todoValue;
    @api todoStatus;
    @api todoId;

    get completeClass() {
        return this.todoStatus ? 'strikeText' : '';
    }

    handleComplete(event) {
        this.todoStatus = !this.todoStatus;
    }

    handleDelete(event) {
        const deleteEvent = new CustomEvent('delete', {
            detail : this.todoId
        });
        this.dispatchEvent(deleteEvent);
    }

}