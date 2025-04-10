import logoGif from "../assets/imgs/logos/logoGif.gif";

function LogoGif() {
  return (
    <div className="relative w-24 h-24 mb-4">
      <img
        src={logoGif}
        alt="Animated Logo"
        className="w-full h-full object-contain mx-auto"
      />
    </div>
  );
}

export default LogoGif;
