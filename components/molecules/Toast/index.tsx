import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/Provider";

type ToastProps = {
  type: "success" | "error";
  message: string;
};

function Toast({ type, message }: ToastProps) {
  const { dispatch } = useContext(AppContext);

  //flush error
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "RESET_ERROR" });
    }, 5000);
  }, [dispatch]);

  return (
    <div className='fixed sm: top-4 md: bottom-3 w-screen flex justify-center'>
      <div
        className={`flex justify-center items-center text-center p-3  h-fit w-80 bg-slate-700 text-slate-200 border-l-4 border-2 rounded-md shadow-lg transition-all ease-in-out delay-300 ${
          type === "success" ? "border-l-green-600" : "border-l-red-700"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default Toast;
