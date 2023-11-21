import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Button = ({ children, backgroundColor, onClick }) => {
  return (
    <button
      className="text-white"
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Alert = ({ children }) => {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-neutral-900 opacity-80 ">
      <div className="bg-yellow-200 w-[40vw] rounded-3xl"> {children}</div>
    </div>
  );
};

const DeleteButton = () => {
  return (
    <Button
      onClick={() => {
        toast.success("Deleted successfully ");
      }}
      backgroundColor="red"
    >
      Delete
    </Button>
  );
};

export default function DialogBox() {
  return (
    <>
      <Alert>
        <h1>Are you sure want to delete your account?</h1>
        <div className="flex justify-center mt-4">
          <Link to="/">
            <DeleteButton />
          </Link>

          <Link to="/">
            <Button backgroundColor="blue">Cancel</Button>
          </Link>
        </div>
      </Alert>
    </>
  );
}
