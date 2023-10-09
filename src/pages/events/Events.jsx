const Events = () => {
  return (
    <div>
      <div
        className="hero h-full lg:h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Svfs2fk/business-women-signature-document.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mt-64 lg:mt-16">
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
            <button className=" px-6 py-3 mb-10 lg:mb-0 rounded-xl text-white font-medium text-lg bg-[#ff6600] hover:bg-orange-600 hover:text-white ">
              Get Started
            </button>
          </div>
        </div>
      </div>

      


      <div className="overflow-x-auto my-32 lg:my-20">
        <table className="table">
          {/* head */}
          <thead className="text-xl">
            <tr>
              <th>
                
              </th>
              <th>Speaker Name</th>
              <th>Designation</th>
              <th>Service Event</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/r6k6R03/author2.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Main Speaker
                </span>
              </td>
              <td>Training Programs</td>
              <th>
                <button className="btn btn-ghost hover:text-[#ff6600] hover:bg-white bg-[#ff6600] text-white ">Book Now</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/71c5mFJ/statistics1.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Assistant Speaker
                </span>
              </td>
              <td>Knowledge Symposiums

</td>
              <th>
                <button className="btn btn-ghost hover:text-[#ff6600] hover:bg-white bg-[#ff6600] text-white ">Book Now</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/JHmhkDJ/author1.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Main Speaker
                </span>
              </td>
              <td>Workshops and Webinars

</td>
              <th>
                <button className="btn btn-ghost hover:text-[#ff6600] hover:bg-white bg-[#ff6600] text-white  ">Book Now</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/ryqRNzf/educational.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Professional Speaker
                </span>
              </td>
              <td>Teaching Workshops</td>
              <th>
                <button className="btn btn-ghost hover:text-[#ff6600] hover:bg-white bg-[#ff6600] text-white ">Book Now</button>
              </th>
            </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Events;
