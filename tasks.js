
function defaultTasks() {
    return [
        { title: "Apprendre Git", done: true },
        { title: "Corriger les TP", done: false },
        { title: "Réviser JavaScript", done: false },
        { title: "Préparer le projet", done: false }
    ];
}

function addTask(tasks, title) {
    const clean = title.trim();

    if (clean === "") {
        return tasks;
    }

    tasks.push({ title: clean, done: true });
    return tasks;
}

function toggleTask(tasks, index) {
    if (tasks[index]) {
        tasks[index].done = !tasks[index].done;
    }
    return tasks;
}

function removeTask(tasks, index) {
    tasks.splice(index, 1);
    return tasks;
}

if (typeof module !== "undefined") {
    module.exports = {
        defaultTasks,
        addTask,
        toggleTask,
        removeTask
    };
}