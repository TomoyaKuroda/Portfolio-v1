import { useContext } from "react";
import { Context } from "../contexts/context";

const useLoading = () => {
  const [state, setState] = useContext(Context);

  function updateLoading() {
    setState(state => ({ ...state, loading: false }));
  }

  return {
    updateLoading,
    loading: state.loading
  };
};

export default useLoading;
