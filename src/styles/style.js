import InfluenceIndex from "../Components/InfluenceIndex"

const $style = {
// styles.js
  // --- DISPLAY TEXT 1 ---
  displayText1Bold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "72px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  displayText1Semibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "72px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  displayText1Regular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "72px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  displayText1Light: {
    fontFamily: "Inter, sans-serif",
    fontSize: "72px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- DISPLAY TEXT 2 ---
  displayText2Bold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "56px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  displayText2Semibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "56px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  displayText2Regular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "56px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  displayText2Light: {
    fontFamily: "Inter, sans-serif",
    fontSize: "56px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- H1 ---
  h1Bold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  h1Semibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  h1Regular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  h1Light: {
    fontFamily: "Inter, sans-serif",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- H2 ---
  h2Bold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  h2Semibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  h2Regular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  h2Light: {
    fontFamily: "Inter, sans-serif",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- H3 ---
  h3Bold: {
    fontFamily: "Inter, sans-serif",
    margin: "10px",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  h3Semibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  h3Regular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  h3Light: {
    fontFamily: "Inter, sans-serif",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- H4 ---
  h4Bold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  h4Semibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  h4Regular: {
    fontFamily: "Inter, sans-serif",
    margin: "5px",
    color: "#F6F6F6",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "100",
    
    lineHeight: "120%",
  },
  h4Light: {
    fontFamily: "Inter, sans-serif",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- BODY LARGE ---
  bodyLargeBold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  bodyLargeSemibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  bodyLargeRegular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  bodyLargeLight: {
    fontFamily: "Inter, sans-serif",
    color: "#CACACD", 
    margin: "12px",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- BODY REGULAR / BUTTON ---
  bodyRegularBold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  bodyRegularSemibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  bodyRegularRegular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  bodyRegularLight: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- BODY SMALL ---
  bodySmallBold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  bodySmallSemibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  bodySmallRegular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  bodySmallLight: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },

  // --- CAPTION ---
  captionBold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },
  captionSemibold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
  },
  captionRegular: {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  },
  captionLight: {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },


  // ----Buttons Color ------
   primaryButton: {
  fontFamily: "Inter, sans-serif",
    backgroundColor: "#2F80ED",
    color: "#FFFFFF",
    margin: "10px",
    // left: "10px",
    padding: "14px 20px",
    borderRadius: "40px",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    
  },
   readMore: {
    color: "#2F80ED",
    marginBottom: "30px",
    cursor: "pointer",
    fontWeight: "500",
  },

  lightcolor: {
  fontFamily: "Inter, sans-serif",
    margin: "5px",
    color: "#F6F6F6",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  //   // marginTop: "30px",
    color: "#CACACD", 
    // background: "#CACACD",
  },


// ------ navbar------

navbar: {
  position: "fixed",  
  top: "20px",
  left: "20px",
  right: "20px",
  width: "calc(100% - 40px)",
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 70px",
  background: "rgba(0, 0, 0, 0.4)",  
  borderRadius: "50px",
  backdropFilter: "blur(6px)",        
  zIndex: 1000,
  flexWrap: "wrap",
},

logo: {
  width: "64px",
  height: "auto",
  minWidth: "50px",
},
navList: {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  flex: 1,
  justifyContent: "flex-end",
  flexWrap: "wrap",
},


// ------- home page ------
  heroImage: {
    position: "relative",
    width: "100%",
    height: "660px",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.65)",
  },


  heroContent: {
    position: "absolute",
    top: "60%",
    left: "120px",
    transform: "translateY(-50%)",
    color: "#ffffff",
    maxWidth: "950px",
    right: "120px",
  },

  DisplayText1Bold: {
    fontFamily: "Inter, sans-serif",
    fontSize: "52px",
    fontWeight: "bold",
    lineHeight: "1.2",
    marginBottom: "30px",
    color: "#ffffff",
    wordWrap: "break-word",
    overflow: "hidden",
  },
  

 

// ---- TRUST SECTION ----

trustSection: {
  // background: "var(--Black, #111)",
  // backgroundColor: "#0B0B0B",
  color: "#111",
  padding: "90px 60px",
  width: "100%",
  // height: "auto",
},

trustContainer: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "75px",
  flexWrap: "wrap",
  width: "100%",
},

trustLeft: {
  flex: 1,
  minWidth: "300px",
  maxWidth: "600px",
  width: "100%",
},

trustRight: {
  flex: 1,
  width: "100%",
  minWidth: "300px",
  height: "350px",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden", 
},

handshake: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  maxWidth: "720px",
  borderRadius: "10%",
},

trustList: {
  marginTop: "40px",
  padding: 0,
  listStyle: "none",
  
},

trustListItem: {
  display: "flex",
  alignItems: "center",
  margin: "15px 0",
  color: "#3C3C43",
  gap: "15px",
  marginBottom: "12px",
  
},

trustCheck: {
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  backgroundColor: "#2F80ED",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  fontSize: "14px",
  
},


// -----Clients ----------

clientsSection: {
  backgroundColor: "#111",
  padding: "90px 0",
},

clientsContainer: {
  width: "85%",
  margin: "0 auto",
  textAlign: "center",
},

clientsHeading: {
   fontFamily: "Inter, sans-serif",
  color: "#3C3C43",
  fontSize: "32px",
  fontWeight: "300",
  lineHeight: "1.4",
  marginBottom: "80px",
},

blueText: {
  fontFamily: "Inter, sans-serif",
  color: "#176FCE",
  fontWeight: "700",


  // fontfamily: "Inter",
fontsize: "38.246px",
fontstyle: "normal",
// fontweight: "700",
lineheight: "120%", /* 45.896px */
},

logoRowWrapper: {
  overflow: "hidden",
  width: "100%",
  marginBottom: "40px",
},

logoTrack: {
  display: "flex",
  gap: "100px",
  width: "max-content",
},

logoWrapper: {
  filter: "grayscale(100%)",
  opacity: "0.6",
},

clientLogo: {
  height: "35px",
  objectFit: "contain",
},
  

 /* ================= Provide ================= */

  whatSection: {
    backgroundColor: "#fff",
    padding: "60px 0",
  },

  whatContainer: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
  },

  whatTitle: {
    fontSize: "54px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "18px",
  },

  whatSubtitle: {
    fontSize: "15px",
    color: "#9ca3af",
    maxWidth: "720px",
    margin: "0 auto",
    lineHeight: "1.7",
  },

  DisplayTextcolor: {
    fontFamily: "Inter, sans-serif",
    fontSize: "62px",
    // fontWeight: "bold",
    lineHeight: "1.2",
    // marginBottom: "8px",
    color: "#111",
  },
   h4Regularcolor: {
    fontFamily: "Inter, sans-serif",
    // margin: "5px",
    color: "#3C3C43",
    fontSize: "18px",
    fontStyle: "normal",
    // fontWeight: "100px",
    lineHeight: "120%",
  },

  
  

  /* ===== Core Button ===== */

  coreButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "35px",
    marginBottom: "90px",
  },

  coreButton: {
    background: "linear-gradient(145deg, #2563eb, #1e40af)",
    color: "#ffffff",
    padding: "14px 36px",
    borderRadius: "50px",
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.35s ease",
    boxShadow: "0 8px 20px rgba(37, 99, 235, 0.35)",
  },

  /* ===== Big Rounded Card Section ===== */

  bigCardSection: {
    background: "linear-gradient(135deg, #9CBBDD 0%, #8AA5C8 100%)",
    borderRadius: "40px",
    padding: "80px 100px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",

  },

  card1: {
    backgroundColor: "#0f0f14",
    padding: "24px",
    // width: "58px",
    // height: "45px",
    borderRadius: "20px",
    border: "1px solid #1a1a22",
    textAlign: "left",
    transition: "all 0.4s ease",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "280px",
  },

  cardIcon1: {
    width: "58px",
    height: "45px",
    borderRadius: "14px",
    backgroundColor: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#22c55e",
    fontSize: "22px",
    marginBottom: "22px",
  },

 
  learnBtn: {
    width: "100%",
    // padding: "16px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#3C3C43",
    color: "#d1d5db",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
    display: "flex",
    padding: "12px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "9.095px",
    alignSelf: "stretch",
    fontWeight: "500",
  },

// ------sector--------

sectorsSection:{
  backgroundColor:"#fff",
  padding:"90px 120px",
  display:"flex",
  justifyContent:"center"
},

container:{
  maxWidth:"1200px",
  width:"100%",
  textAlign:"center"
},

grid:{
  display:"grid",
  gridTemplateColumns:"repeat(4,1fr)",
  gap:"20px"
},

card:{
  background:"#CACACD",
  padding:"16px",
  borderRadius:"8px",
  textAlign:"left",
  minHeight:"180px",
  display:"flex",
  flexDirection:"column",
  margin:"0 4px"
},

iconBox:{
  width:"32px",
  height:"32px",
  backgroundColor:"#176FCE",
  borderRadius:"4px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  marginBottom:"14px"
},

icon:{
  width:"18px",
  height:"18px",
  filter:"invert(1)"
},

 h4Boldcolor: {
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    color: "var(--Black, #111)",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "1.3",
    marginBottom: "6px",
    textAlign: "left"
  },

  h4Lightcolor: {
    fontFamily: "Inter, sans-serif",
    fontSize: "13px",
    color: "#757095",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "1.4",
    textAlign: "left"
  },

cardText:{
  fontSize:"13px",
  color:"#6b7280",
  lineHeight:"1.6"
},

moreCard:{
  backgroundColor:"#3faa4b",
  fontFamily: "Inter, sans-serif",
  borderRadius:"8px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  color:"#fff",
  fontSize:"14px",
  fontWeight:"600",
  minHeight:"200px",
  flexDirection:"column"
},

moreNumber:{
  fontFamily: "Inter, sans-serif",
  fontSize:"20px",
  marginBottom:"4px",
  textAlign:"center"
},

  // ---------- STRATEGY PAGE UNIQUE STYLES ----------

strategySection: {
  backgroundColor: "#fff",
  padding: "100px 20px",
},

strategyContainer: {
  maxWidth: "1200px",
  margin: "0 auto",
},

strategyTopRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "60px",
  gap: "40px",
},

strategySmallTitle: {
  fontSize: "14px",
  color: "#555",
  marginBottom: "10px",
},

strategyMainTitle: {
  fontSize: "52px",
  fontWeight: "700",
  lineHeight: "1.2",
},

strategyTopDescription: {
  fontFamily: "Inter, sans-serif",
  maxWidth: "450px",
  fontSize: "15px",
  color: "#444",
  lineHeight: "1.6",
},

strategyGrid: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
},

strategyCard: {
  backgroundColor: "#fff",
  borderRadius: "20px",
  padding: "25px",
  display: "flex",
  gap: "30px",
  alignItems: "flex-start",
  border: "1px solid #ddd",
},

strategyCardImage: {
  width: "160px",
  height: "180px",
  borderRadius: "20px",
  objectFit: "cover",
},

strategyCardTitle: {
  fontSize: "22px",
  fontFamily: "Inter, sans-serif",
  color: "#2563eb",
  fontWeight: "700",
  marginBottom: "15px",
},

// trustCheck: {
//   width: "22px",
//   height: "22px",
//   borderRadius: "50%",
//   backgroundColor: "#2F80ED",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#FFFFFF",
//   fontSize: "14px",


// width: 10.376px;
// height: 7.655px;
// aspect-ratio: 61/45;
// },


// ---- InfluenceIndex ---------

 influenceSection: {
    background: "#BCD1E8",
    padding: "80px",
    borderRadius: "25px",
    width: "90%",
    margin: "100px auto",
  },

  influenceHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "50px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  influenceSmall: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "10px",
  },

  influenceTitle: {
    fontSize: "42px",
    fontWeight: "700",
    color: "#111",
  },

  influenceTextBox: {
    maxWidth: "420px",
  },

  influenceText: {
    fontSize: "15px",
    color: "#333",
    marginBottom: "10px",
  },

  influenceHighlight: {
  fontFamily: "Inter, sans-serif",
    color: "#1f6feb",
    fontWeight: "600",
  },

  influenceCardBox: {
    background: "#F6F6F6",
    borderRadius: "20px",
    padding: "50px",
    display: "grid",
    fontFamily: "Inter, sans-serif",
    /* grid layout managed by responsive CSS */
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "40px",
  },

  influenceCard: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "#111",
  },

  icon2: {
    width: "36px",
    height: "36px",
    background: "#2E5B9A",
    borderRadius: "8px",
    marginBottom: "10px",
  },

   h4Lightcolor: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "200",
    lineHeight: "120%",
    color: "#2E2F34"
  },






  // -------- Expansion Grid Section --------

expansionSection: {
  backgroundColor: "#F6F6F6",
  padding: "120px 20px",
},

expansionContainer: {
  maxWidth: "1000px",
  margin: "0 auto",
  textAlign: "center",
},

// expansionTitle: {
//   fontFamily: "Inter, sans-serif",
//   fontSize: "48px",
//   fontWeight: "700",
//   color: "#111",
//   lineHeight: "1.2",
//   marginBottom: "20px",
// },

expansionSubtitle: {
  fontFamily: "Inter, sans-serif",
  fontSize: "15px",
  color: "#666",
  maxWidth: "760px",
  margin: "0 auto 60px",
  lineHeight: "1.6",
},

expansionImageWrapper: {
  width: "100%",
  borderRadius: "38px",
  overflow: "hidden",
  // outline: "2px solid #057dcd",
  // backgroundColor: "#2F80ED"
},

expansionImage: {
  width: "100%",
  height: "520px",
  objectFit: "cover",
  borderRadius: "28px",
},
  



/* PERFORMANCE SECTION */

performanceSection:{
  background:"#F6F6F6",
  padding:"100px 90px"
},

performanceContainer:{
  maxWidth:"1200px",
  margin:"0 auto",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  gap:"60px"
},

performanceLeft:{
  flex:1,
  maxWidth:"520px"
},

performanceTitle:{
  fontFamily:"Inter, sans-serif",
  fontSize:"44px",
  fontWeight:"700",
  lineHeight:"1.2",
  // marginBottom:"10px",
  color:"#111"
},

performanceText:{
  fontFamily:"Inter, sans-serif",
  fontSize:"15px",
  lineHeight:"1.6",
  color:"#555",
  marginBottom:"20px"
},


/* RIGHT CARD */

performanceCard:{
  flex:1,
  height:"400px",
  width: "260px",
  background:"#fff",
  borderRadius:"20px",
  position:"relative",
  padding:"20px"
},

/* IMAGE STYLE */

performanceImg:{
  /* fluid sizing: width controlled by parent/card */
  width:"100%",
  height:"auto",
  objectFit:"cover",
  // borderRadius:"6px",
  position:"relative",
  zIndex:"2"
},

/* LEFT IMAGE */

imageBoxLeft:{
  position:"absolute",
  left:"40px",
  bottom:"50px"
},

blueBg:{
  position:"absolute",
  left:"-8px",
  bottom:"18px",
  width:"100%",
  height:"100%",
  background:"#7EA6D8",
  zIndex:"1"
},

/* RIGHT IMAGE */

imageBoxRight:{
  position:"absolute",
  right:"70px",
  top:"40px"
},

greenBg:{
  position:"absolute",
  right:"-8px",
  bottom:"-10px",
  width:"100%",
  height:"100%",
  background:"#9CD3A8",
  zIndex:"1"
},







/* ===== RESOLVED CASES ===== */

casesSection:{
  background:"#2E2F34",
  padding:"100px 20px",
  textAlign:"center"
},

casesContainer:{
  maxWidth:"1000px",
  margin:"0 auto"
},

casesSubtitle:{
  fontFamily:"Inter, sans-serif",
  fontSize:"15px",
  color:"#bfc3c9",
  marginBottom:"40px"
},


/* CARD */

caseCard:{
  display:"flex",
  borderRadius:"20px",
  overflow:"hidden",
  marginBottom:"30px"
},


/* LEFT BOX */

caseLeft:{
  flex:"1",
  background:"#9FB2C7",
  padding:"60px",
  textAlign:"left",

  display:"flex",
  flexDirection:"column",
  justifyContent:"center"
},
bodyLargeLightcolor: {
    fontFamily: "Inter, sans-serif",
    color: "#3C3C43", 
    margin: "12px",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "120%",
  },
  h2Boldcolor: {
    fontFamily: "Inter, sans-serif",
    color: "#111",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
  },

caseButton:{
  fontFamily:"Inter, sans-serif",
  width:"140px",
  padding:"10px 14px",
  borderRadius:"25px",
  border:"1px solid #666",
  background:"#fff",
  cursor:"pointer"
},


/* IMAGE */

caseRight:{
  flex:"1"
},

caseImage:{
  width:"100%",
  height:"100%",
  objectFit:"cover"
},


/* SLIDER CONTROLS */

sliderControls:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"20px"
},

arrowIcon:{
  width:"34px",
  height:"34px",
  cursor:"pointer"
},

dotsWrapper:{
  display:"flex",
  gap:"8px"
},

dot:{
  width:"8px",
  height:"8px",
  borderRadius:"50%",
  background:"#777"
},

activeDot:{
  width:"8px",
  height:"8px",
  borderRadius:"50%",
  background:"#fff"
},




// ----- Partners ----------

partnersSection: {
  background: "#111",
  padding: "90px 0",
},

partnersContainer: {
  width: "85%",
  margin: "0 auto",
  textAlign: "center",
},

partnersHeading: {
  fontFamily: "Inter, sans-serif",
  fontSize: "28px",
  color: "#555",
  marginBottom: "60px",
  fontWeight: "400",
},

partnerBlue: {
  fontFamily: "Inter, sans-serif",
  color: "#176FCE",
  fontWeight: "600",
},

partnerRowWrapper: {
  overflow: "hidden",
  width: "100%",
  marginBottom: "40px",
},

partnerTrack: {
  display: "flex",
  gap: "100px",
  width: "max-content",
},

partnerLogoWrapper: {
  filter: "grayscale(100%)",
  opacity: "0.6",
},

partnerLogo: {
  height: "35px",
  objectFit: "contain",
},







// CONTACT SECTION

contactSection:{
  background:"#f3f3f3",
  padding:"100px 20px"
},

contactContainer:{
  maxWidth:"1100px",
  margin:"0 auto",
  textAlign:"center"
},

// contactTitle:{
//   fontSize:"42px",
//   fontWeight:"700",
//   color:"#333",
//   marginBottom:"10px"
// },

contactSubtitle:{
  fontFamily: "Inter, sans-serif",
  color:"#777",
  marginBottom:"50px"
},

contactCard:{
  display:"flex",
  gap:"40px",
  background:"#fff",
  padding:"40px",
  borderRadius:"14px",
  border:"1px solid #ddd"
},

/* LEFT FORM */

contactFormSide:{
  flex:"1",
  textAlign:"left"
},

contactFormTitle:{
  fontSize:"20px",
  fontWeight:"600",
  marginBottom:"10px"
},

contactText:{
  fontFamily: "Inter, sans-serif",
  fontSize:"14px",
  color:"#666",
  marginBottom:"20px"
},

nameRow:{
  display:"flex",
  gap:"10px"
},

inputHalf:{
  fontFamily: "Inter, sans-serif",
  flex:"1",
  padding:"12px",
  borderRadius:"6px",
  border:"1px solid #ddd",
  marginBottom:"10px"
},

inputFull:{
  fontFamily: "Inter, sans-serif",
  width:"100%",
  padding:"12px",
  borderRadius:"6px",
  border:"1px solid #ddd",
  marginBottom:"10px"
},

textarea:{
  fontFamily: "Inter, sans-serif",
  width:"100%",
  padding:"12px",
  borderRadius:"6px",
  border:"1px solid #ddd",
  marginBottom:"15px"
},

submitBtn:{
  fontFamily: "Inter, sans-serif",
  width:"100%",
  padding:"12px",
  background:"#2f6fbd",
  color:"#fff",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer"
},

/* RIGHT QR AREA */

qrWrapper:{
  flex:"1",
  position:"relative",
  borderRadius:"12px",
  overflow:"hidden",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center"
},

qrBackground:{
  position:"absolute",
  width:"100%",
  height:"100%",
  objectFit:"cover",
  top:"0",
  left:"0"
},

qrCode:{
  width:"250px",
  position:"relative",
  zIndex:"2",
  marginBottom:"20px"
},

qrTitle:{
  fontFamily: "Inter, sans-serif",
  position:"relative",
  zIndex:"2",
  color:"#F6F6F6",
  fontWeight:"600",
  marginBottom:"5px"
},

qrText:{
  fontFamily: "Inter, sans-serif",
  position:"relative",
  zIndex:"2",
  color:"#F6F6F6",
  fontWeight: "400",
  fontSize:"12px"
},




/* FOOTER */

footerSection:{
  background:"#1f2228",
  padding:"110px 20px 40px",
  color:"#ccc"
},

footerContainer:{
  width:"85%",
  margin:"0 auto"
},

/* NEWSLETTER */

newsletterTitle:{
  textAlign:"center",
  fontSize:"40px",
  fontWeight:"600",
  color:"#e5e5e5",
  marginBottom:"40px",
  fontFamily:"Inter, sans-serif"
},

subscribeBox:{
  fontFamily:"Inter, sans-serif",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"18px",
  marginBottom:"60px"
},

subscribeInput:{
  fontFamily:"Inter, sans-serif",
  width:"300px",
  padding:"15px 22px",
  borderRadius:"50px",
  border:"1px solid #232428",
  outline:"none",
  fontSize:"14px",
  background:"#232428"
},

subscribeBtn:{
  fontFamily:"Inter, sans-serif",
  display:"flex",
  alignItems:"center",
  gap:"8px",
  padding:"14px 28px",
  borderRadius:"50px",
  border:"none",
  background:"#2f6fbd",
  color:"#fff",
  fontSize:"14px",
  cursor:"pointer"
},

subscribeArrow:{
  width:"16px",
  height:"16px"
},

footerDivider:{
  height:"1px",
  background:"#3a3d44",
  margin:"70px 0"
},

/* GRID */

footerGrid:{
  display:"grid",
  gridTemplateColumns:"2fr 1fr 1fr 1fr",
  gap:"50px"
},

footerLogo:{
  width:"120px",
  marginBottom:"18px"
},

footerText:{
  fontFamily:"Inter, sans-serif",
  fontSize:"14px",
  color:"#aaa",
  lineHeight:"1.6",
  marginBottom:"20px"
},

socialIcons:{
  display:"flex",
  gap:"12px",
  marginBottom:"20px"
},

iconCircle:{
  width:"38px",
  height:"38px",
  // borderRadius:"50%",
  // background:"#2c2f36",
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
},

icon:{
  width:"25px",
  height:"25px"
},

/* LANGUAGE */

languageBox:{
  display:"flex",
  alignItems:"center",
  gap:"8px"
},

languageIcon:{
  width:"18px",
  height:"18px"
},

languageText:{
  fontFamily:"Inter, sans-serif",
  fontSize:"13px",
  color:"#bbb"
},

/* LINKS */

footerHeading:{
  fontFamily:"Inter, sans-serif",
  color:"#fff",
  fontSize:"15px",
  marginBottom:"14px",
  fontWeight:"600"
},

footerLink:{
  fontFamily:"Inter, sans-serif",
  fontSize:"14px",
  color:"#aaa",
  marginBottom:"8px",
  cursor:"pointer"
},

/* BOTTOM */

footerBottom:{
  fontFamily:"Inter, sans-serif",
  marginTop:"70px",
  paddingTop:"20px",
  borderTop:"1px solid #3a3d44",
  display:"flex",
  justifyContent:"space-between",
  flexWrap:"wrap",
  fontSize:"13px",
  color:"#888"
},

footerBottomcolor:{
  fontFamily:"Inter, sans-serif",
},

bottomLinks:{
  fontFamily:"Inter, sans-serif",
  display:"flex",
  gap:"18px",
  flexWrap:"wrap"
},

bottomLinksfont:{
  fontFamily:"Inter, sans-serif",
},

};

export default $style;