import IconPlaceholder from "./IconPlaceholder";

const ThirdRow = () => {
  return (
    <div className="mt-1.5 flex">
      <div className="btn me-1.5 h-[46px] w-20 text-xs">tab</div>
      <div className="grid h-auto w-fit grid-cols-13 place-content-center gap-1.5">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="btn h-[46px] w-[46px]">
            {/* <IconPlaceholder /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdRow;
