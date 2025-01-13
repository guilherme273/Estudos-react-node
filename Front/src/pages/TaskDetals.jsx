/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskDetals() {
  localStorage.clear();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="space-y-4 w-[500px]">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className="text-xl font-bold text-slate-600">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default TaskDetals;
