

const Archivs = () => {
  console.log("render");
  return (
    <div className="py-20 px-4 lg:px-0">
      <div className="max-w-[1440px] min-h-80 mx-auto flex items-center justify-between flex-wrap">
        <div className="relative lg:w-[620px]">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fHww"
            alt=""
            className="object-cover rounded"
          />
        </div>
        <div className="mt-2 lg:mt-0 lg:w-[810px]">
          <h1 className="text-3xl font-bold text-[#172BAA] mb-2">
            Best Quality HeadPhone
          </h1>
          <p className="text-sm text-color-black text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            adipisci suscipit laborum excepturi sequi minima assumenda
            dignissimos. Nesciunt voluptates, laboriosam beatae dicta blanditiis
            ex, asperiores veniam sit iure ab quos. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Aut libero veniam totam dolor quidem
            modi nostrum dignissimos ipsam asperiores, adipisci ea culpa
            voluptatibus assumenda sequi odit sint odio eius. Voluptatem?
          </p>
          <button className="px-4 py-2 bg-color-orange text-white rounded mt-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Archivs;
