import IconPlaceholder from "./IconPlaceholder";

const SixthRow = () => {
  return (
    <div className="mt-1.5 flex">
      <div className="grid h-auto w-fit grid-cols-3 place-content-center gap-1.5">
        {[...Array(3)].map((_, i) =>
          i === 0 ? (
            <div
              key={i}
              className="btn h-[46px] w-[46px] !rounded-bl-2xl text-xs"
            >
              fn
            </div>
          ) : (
            <div key={i} className="btn h-[46px] w-[46px]">
              <IconPlaceholder />
            </div>
          ),
        )}
      </div>
      <div className="btn ms-1.5 h-[46px] w-16 text-xs">cmd</div>
      <div className="btn ms-1.5 h-[46px] w-64 text-xs"></div>
      <div className="btn mx-1.5 h-[46px] w-16 text-xs">cmd</div>
      <div className="grid h-auto w-fit grid-cols-3 place-content-center gap-1.5 text-center">
        {[...Array(3)].map((_, i) =>
          i === 2 ? (
            <div
              key={i}
              className="relative grid grid-cols-1 grid-rows-2 gap-0 rounded-md shadow-md shadow-neutral-600/50 hover:shadow-none"
            >
              <div className="btn-arrow-up absolute h-[23px] w-[46px]">
                &#9652;
              </div>
              <div className="btn-arrow-down absolute bottom-0 h-[23px] w-[46px]">
                &#9662;
              </div>
            </div>
          ) : (
            <div key={i} className="btn h-[46px] w-[46px] text-lg">
              &#9666;
            </div>
          ),
        )}
      </div>
      <div className="btn ms-1.5 h-[46px] w-[46px] !rounded-br-2xl text-center text-lg">
        &#9656;
      </div>
    </div>
  );
};

export default SixthRow;
