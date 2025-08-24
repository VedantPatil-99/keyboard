import IconPlaceholder from "./IconPlaceholder";

const FirstRow = () => {
  return (
    <div className="flex">
      <div className="btn me-1.5 h-[46px] w-20 !rounded-tl-2xl text-xs">
        esc
      </div>

      <div className="grid h-auto w-fit grid-cols-12 place-content-center gap-1.5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="btn h-[46px] w-[46px]"></div>
        ))}
      </div>
      <div className="btn ms-1.5 h-[46px] w-[46px] !rounded-tr-2xl">
        <IconPlaceholder />
      </div>
    </div>
  );
};

export default FirstRow;
