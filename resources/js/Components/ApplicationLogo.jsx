
export default function ApplicationLogo({variant = "default", props}) {
  let style;
  switch (variant) {
    case "navbar":
      style = { width: "40px", height: "40px" }; // Ukuran lebih kecil untuk navbar
      break;
    case "login":
      style = { width: "150px", height: "150px" }; // Ukuran besar untuk halaman login
      break;
    default:
      style = { width: "75px", height: "75px" }; // Ukuran default
  }
    return (
      <img
      {...props}
      src="/image/narita.png"
      alt="Logo"
      style={style}
      />
    );
}
