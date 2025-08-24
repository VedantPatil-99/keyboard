import IconPlaceholder from "./IconPlaceholder";

const FifthRow = () => {
  return (
    <div className="mt-1.5 flex">
      <div className="btn me-1.5 h-[46px] w-[116px] text-xs">shift</div>
      <div className="grid h-auto w-fit grid-cols-10 place-content-center gap-1.5">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="btn h-[46px] w-[46px]">
            {/* <IconPlaceholder /> */}
          </div>
        ))}
      </div>
      <div className="btn ms-1.5 h-[46px] w-[116px] text-xs">shift</div>
    </div>
  );
};

export default FifthRow;
