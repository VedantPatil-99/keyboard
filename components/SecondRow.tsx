import IconPlaceholder from "./IconPlaceholder";

const SecondRow = () => {
  return (
    <div className="mt-1.5 flex">
      <div className="grid h-auto w-fit grid-cols-13 place-content-center gap-1.5">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="btn h-[46px] w-[46px]">
            <IconPlaceholder />
          </div>
        ))}
      </div>
      <div className="btn ms-1.5 h-[46px] w-20 text-xs">delete</div>
    </div>
  );
};

export default SecondRow;
