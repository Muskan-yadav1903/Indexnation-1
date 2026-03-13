import { useEffect } from "react";

export default function Cursor() {

  useEffect(() => {

    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");

    let scrolling;

    const moveCursor = (e) => {

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      cursor.style.opacity = "1";
    };

    const handleScroll = () => {

      cursor.style.opacity = "0";

      clearTimeout(scrolling);

      scrolling = setTimeout(() => {
        cursor.style.opacity = "1";
      }, 150);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
    </>
  );
}