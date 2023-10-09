const Checkout = () => {
  return (
    <div className="mt-44 px-10">
      <p className="font-semibold text-2xl">Payment Details</p>

      <div className="mt-8 w-1/2">
        <p className="text-xl">
          Complete your order by providing your payment details.
        </p>
        <label type="email" className="mt-4 mb-2 block text-sm font-medium">
          Email:
        </label>
        
          <input
            type="text"
            className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none"
            placeholder="Email..."
          />
       
        <label
          type="card-holder"
          className="mt-4 mb-2 block text-sm font-medium"
        >
          Card Details:
        </label>

        <input
          type="text"
          className="w-full rounded-md border mb-20 border-gray-200 px-4 py-3  text-sm shadow-sm outline-none "
          placeholder="Your name..."
        />

        <hr />
        <div className="mt-6 flex items-center justify-between">
          <p className="font-medium ">Total</p>
          <p className="text-2xl font-semibold ">$00.00</p>
        </div>

        <button className="mt-4 mb-8 w-full rounded-md bg-orange-600 px-6 py-3 font-medium text-white">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
