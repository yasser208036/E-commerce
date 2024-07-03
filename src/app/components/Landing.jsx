import Landing_image from "../elements/landing_image";
export default function Landing() {
  return (
    <div className="curved">
      <div className="landing-container flex flex-col-reverse md:flex-row container items-center justify-between">
        <div className="px-2 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-violet-700 to-blue-600 inline-block text-transparent bg-clip-text mb-3">
            Shop now and enjoy exclusive discounts!
          </h1>
          <p className="text-l md:text-xl text-gray-600 max-w-[650px]">
            Welcome to our Store , your destination for top-quality products and
            unbeatable deals. Discover the latest trends and essentials, all at
            competitive prices with fast, reliable delivery. Enjoy a seamless
            shopping experience and exceptional customer service every step of
            the way.
          </p>
        </div>
        <div className="w-64 md:w-[400px] max-w-[400px]">
          <Landing_image />
        </div>
      </div>
    </div>
  );
}
