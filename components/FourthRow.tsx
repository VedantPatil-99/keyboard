import IconPlaceholder from "./IconPlaceholder";

const FourthRow = () => {
  return (
    <div className="mt-1.5 flex">
      <div className="btn me-1.5 h-[46px] w-23 text-xs">caps lock</div>
      <div className="grid h-auto w-fit grid-cols-11 place-content-center gap-1.5">
        {[...Array(11)].map((_, i) => (
          <div key={i} className="btn h-[46px] w-[46px]">
            <IconPlaceholder />
          </div>
        ))}
      </div>
      <div className="btn ms-1.5 h-[46px] w-22 text-xs">return</div>
    </div>
  );
};

export default FourthRow;
