const Events = () => {
  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Svfs2fk/business-women-signature-document.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mt-16">
            <h2 className="mx-auto leading-10 text-3xl">
              <span className="text-[#ff6600] font-medium text-5xl">
                Innovate to Educate
              </span>{" "}
              <br /> Explore Upcoming Events Near You
            </h2>
            <p className="my-5 w-3/4 mx-auto">
              Get ready to embark on a journey of knowledge and discovery with
              our upcoming educational event! We are thrilled to bring you a
              thought-provoking and enriching experience that is designed to
              empower you
            </p>
            <button className=" px-6 py-3 rounded-xl text-white font-medium text-lg bg-[#ff6600] hover:bg-orange-600 hover:text-white ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
