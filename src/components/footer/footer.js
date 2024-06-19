import Logo from "../Logo/logo";

export default function Footer() {
  return (
    <>
      <div className="relative w-full h-80 ">
        <svg
          className="absolute  w-full h-full -z-10 inset-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f1faee"
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,90.7C384,107,480,149,576,181.3C672,213,768,235,864,213.3C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className=" flex flex-col pt-20 items-center   ">
          <Logo />
          <p>© 2024 bookLearner.com. All rights reserved.</p>
          <p>Discover, Read, and Learn</p>
        </div>
      </div>
    </>
  );
}
