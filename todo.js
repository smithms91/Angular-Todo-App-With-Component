"use strict";

const todoList = {
  templateUrl: "todo.html",
  controller: function() {
    const vm = this;
    vm.list = [
      {task: "Go Running", completed: true},
      {task: "Go Walking", completed: false},
      {task: "Do Dishes", completed: false},
      {task: "Eat Dinner", completed: true},
      {task: "Make Dinner", completed: false},
      {task: "Cook Dinner", completed: true}
    ];

    vm.addItem = (item) => {
      vm.list.push({
        task: item.task,
        completed: false
      });
      vm.newItem = {};
    };

    vm.editItem = (index, item) => {
      vm.allowEdit = true;
      vm.tempItem = item.task;
      vm.tempIndex = index;
      console.log(vm.tempItem);
    }

    vm.removeItem = (index) => {
      vm.list.splice(index, 1);
    };

    vm.completeItem = (item) => {
      item.completed = true;
    };

    vm.updateItem = (index, item) => {
      vm.list.splice(index, 1, {
        task: item,
        completed: false
      });
      vm.allowEdit = false;
    }
  }
}









angular.module("TodoList").component("todoList", todoList);