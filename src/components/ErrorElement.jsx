import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  return <h4 className="font-bold text-4xl">there was an error</h4>;
};

export default ErrorComponent;
