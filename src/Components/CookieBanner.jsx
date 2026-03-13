import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShow(true);
  }, []);

  const allowAll = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={styles.banner}>
      
      <div style={styles.left}>
        <h3 style={{fontFamily: "Inter, sans-serif" ,marginBottom:"10px"}}>This website uses cookies</h3>
        <p style={styles.text}>
          We use cookies to personalise content and analyse our traffic.
          By clicking “Allow all”, you agree to our cookie policy.
        </p>
      </div>

      <div style={styles.buttons}>
        <button style={styles.allowBtn} onClick={allowAll}>
          Allow all
        </button>

        <button style={styles.selectBtn} onClick={() => setShow(false)}>
          Allow selection
        </button>
      </div>

    </div>
  );
}

const styles = {

  banner:{
    position:"fixed",
    bottom:"0",
    left:"0",
    width:"100%",
    background:"#44ACFF",
    color:"white",
    padding:"30px 40px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    zIndex:"999999"
  },

  left:{
    maxWidth:"700px"
  },

  text:{
  fontFamily: "Inter, sans-serif",
    fontSize:"14px",
    lineHeight:"1.6",
    opacity:"0.9"
  },

  buttons:{
    display:"flex",
    flexDirection:"column",
    gap:"12px"
  },

  allowBtn:{
  fontFamily: "Inter, sans-serif",
    background:"#1E3ECF",
    border:"none",
    padding:"14px 40px",
    color:"white",
    borderRadius:"6px",
    cursor:"pointer",
    fontWeight:"600"
  },

  selectBtn:{
  fontFamily: "Inter, sans-serif",
    background:"#e6e6e6",
    border:"none",
    padding:"14px 40px",
    borderRadius:"6px",
    cursor:"pointer"
  }

};