import { AddTaskModal } from "@/components/task/AddTaskModal";
import TaskCard from "@/components/task/TaskCard";
import { useTodoSelector } from "@/hooks/useApp";

const Task = () => {
  const { todos } = useTodoSelector();
  return (
    <div className="max-w-6xl flex flex-col gap-8 mx-auto px-5 min-h-screen">
      <div className="flex justify-between items-center">
        <h1>Task</h1>
        <AddTaskModal />
      </div>
      {todos.map((todo, index) => (
        <TaskCard key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Task;
