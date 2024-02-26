import { TailSpin } from "react-loader-spinner";

export const Loader = ({ visible = false }) => {
  return (
    <div className="fixed z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <TailSpin
        height="80"
        width="80"
        color="#F5F5F5"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={visible}
      />
    </div>
  );
};
