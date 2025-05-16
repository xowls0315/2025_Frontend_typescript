type NextProps = { isPass: boolean };

const Next = ({ isPass }: NextProps) => {
  return (
    <button
      className={`${
        isPass ? "bg-red-400" : "bg-slate-200"
      } py-5 px-40 rounded-3xl mt-[60px]`}
    >
      다음
    </button>
  );
};

export default Next;
