function getEvenNumbersSorted(arr) {
  const evenNumbers = arr.filter((num) => num % 2 === 0);

  evenNumbers.sort((a, b) => a - b);

  return evenNumbers;
}

const arrr = [1, 4, 3, 2, 6, 3, 11];
console.log(getEvenNumbersSorted(arrr));

function removeDuplicates(numbers) {
  let uniqueNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (uniqueNumbers.indexOf(numbers[i]) === -1) {
      uniqueNumbers.push(numbers[i]);
    }
  }

  return uniqueNumbers;
}

console.log(toUnic(arrr));

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.endsWith(".")) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

const sentence = "this is a test sentence. for the king. omry. rajuan";
console.log(capitalizeWords(sentence));

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : "[]";
}

function addTask(taskDescription) {
  let tasks = loadTasks();

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    task: taskDescription,
  };

  tasks.push(newTask);

  saveTasks(tasks);
}

function removeTask(taskId) {
  let tasks = loadTasks();

  tasks = tasks.filter((task) => task.id !== taskId);

  saveTasks(tasks);
}
