import { Trash2 } from "lucide-react";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ITodo } from "@/redux/taskSlice";
import { cn } from "@/lib/utils";

interface ITaskProps {
  todo: ITodo;
}

const TaskCard = ({ todo }: ITaskProps) => {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": todo.priority === "Low",
              "bg-yellow-500": todo.priority === "Medium",
              "bg-red-500": todo.priority === "High",
            })}
          ></div>
          <h1>{todo.title}</h1>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Button variant={"link"} className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="text-sm text-gray-400">{todo.description}</p>
    </div>
  );
};

export default TaskCard;
