import { Link } from "react-router-dom";
import { mainColors } from "../../../utils/colors";
import styled from "styled-components";
import React from "react";

const HomeRightStyled = styled.section`
  max-width: 1248px;
  padding: 5%;
  width: 65%;

  @media (min-width: 992px) {
    padding: 108px 5%;
  }

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

export function HomeRight() {
  return (
    <HomeRightStyled
      className="overflow-scroll text-center w-100 d-flex flex-column aling-items-center d-lg-flex flex-lg-row gap-5 gap-lg-0"
      id="right-home"
    >
      <Link className="col-12 col-lg-6 h-50" to={"/project/sanar"}>
        <div style={{ color: mainColors.blackLetters }}>
          <img src="./home-picture-1.png" alt="Project Sanar" />
          <h4 className="font-varela-round" style={{ paddingTop: "22px" }}>
            Rebranding for all Sanar's Landing Pages - Click to see more!
          </h4>
          <div>2023</div>
        </div>
      </Link>
      <Link className="col-12 col-lg-6 h-50" to={"/project/shopping-center"}>
        <div style={{ color: mainColors.blackLetters }}>
          <img
            src="./home-picture-2.png"
            alt="Project navigation for shopping centers"
          />
          <h4 className="font-varela-round" style={{ paddingTop: "22px" }}>
            Navigation app for shopping centers - Click to see more!
          </h4>
          <div>2024</div>
        </div>
      </Link>
    </HomeRightStyled>
  );
}

// CÓDIGO ABAIXO COMENTADO PARA MEXER NOVAMENTE PARA ADICIONAR ANIMAÇÕES NO FINAL DO PROJETO

// function ProjetoQuadradoCinza({ children }: React.PropsWithChildren) {
//   return (
//     <div
//       className="col-6 me-4 p-4"
//       style={{ position: "relative", height: "75%", backgroundColor: "grey" }}
//     >
//       {children}
//     </div>
//   );
// }

// function ProjetoSanarSvg1() {
//   return (
//     <div
//       style={{
//         height: "60%",
//         right: "15%",
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         // margin: "auto",
//         top: "20%",
//         width: "100%",
//         // width: "fit-content",
//         // width: "200px",
//       }}
//     >
//       <div
//         className="h-100 w-100"
//         style={{ display: "inline-block", maxWidth: "100%" }}
//       >
//         <svg
//           fill="none"
//           viewBox="0 0 2016 1730"
//           height="80%"
//           width="80%"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <mask id="path-1-inside-1_1004_1514" fill="white">
//             <path d="M769 1381H1247V1676H769V1381Z"></path>
//           </mask>
//           <path d="M769 1381H1247V1676H769V1381Z" fill="black"></path>
//           <path
//             d="M769 1381H1247V1676H769V1381Z"
//             fill="url(#paint0_linear_1004_1514)"
//           ></path>
//           <path
//             d="M1246 1381V1676H1248V1381H1246ZM770 1676V1381H768V1676H770Z"
//             fill="white"
//             fillOpacity="0.2"
//             mask="url(#path-1-inside-1_1004_1514)"
//           ></path>
//           <rect width="2016" height="1381" rx="32" fill="black"></rect>
//           <path
//             d="M0 32C0 14.3269 14.3269 0 32 0H1984C2001.67 0 2016 14.3269 2016 32V1178H0V32Z"
//             fill="white"
//             fillOpacity="0.08"
//           ></path>
//           <rect x="51" y="51" width="1914" height="1076" fill="black"></rect>
//           <defs>
//             <linearGradient
//               id="paint0_linear_1004_1514"
//               x1="1008"
//               y1="1381"
//               x2="1008"
//               y2="1676"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="white" stopOpacity="0.09"></stop>
//               <stop offset="0.540927" stopColor="white" stopOpacity="0"></stop>
//               <stop offset="0.935944" stopColor="white" stopOpacity="0"></stop>
//               <stop
//                 offset="0.957396"
//                 stopColor="white"
//                 stopOpacity="0.06"
//               ></stop>
//               <stop
//                 offset="0.973486"
//                 stopColor="white"
//                 stopOpacity="0.1"
//               ></stop>
//               <stop
//                 offset="0.991681"
//                 stopColor="white"
//                 stopOpacity="0.18"
//               ></stop>
//               <stop offset="1" stopColor="white" stopOpacity="0.24"></stop>
//             </linearGradient>
//             <linearGradient
//               id="paint1_linear_1004_1514"
//               x1="1008"
//               y1="1676"
//               x2="1008"
//               y2="1696"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop offset="0.94" stopOpacity="0"></stop>
//               <stop offset="1" stopOpacity="0.4"></stop>
//             </linearGradient>
//             <linearGradient
//               id="paint2_linear_1004_1514"
//               x1="769"
//               y1="1686"
//               x2="1247"
//               y2="1686"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopOpacity="0.3"></stop>
//               <stop offset="0.02" stopColor="white" stopOpacity="0.12"></stop>
//               <stop offset="0.03" stopColor="white" stopOpacity="0.14"></stop>
//               <stop offset="0.06" stopOpacity="0.1"></stop>
//               <stop offset="0.94" stopOpacity="0.1"></stop>
//               <stop offset="0.97" stopColor="white" stopOpacity="0.14"></stop>
//               <stop offset="0.98" stopColor="white" stopOpacity="0.12"></stop>
//               <stop offset="1" stopOpacity="0.2"></stop>
//             </linearGradient>
//           </defs>
//           <foreignObject
//             className="mockup-screen"
//             style={{ position: "relative", pointerEvents: "all" }}
//             x="49"
//             y="49"
//             width="1918"
//             height="1080"
//           >
//             <div
//               className="wrapper"
//               style={{ borderRadius: "0px", overflow: "hidden" }}
//             >
//               <div className="scrollable-container-mockup">
//                 <img
//                   src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66e0c883b03499000282ef78/rBqctMB2T8NJj3mj.png"
//                   alt=""
//                   data-zoomable=""
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     display: "block",
//                     objectPosition: "left top",
//                     maxHeight: "unset",
//                   }}
//                 />
//               </div>
//             </div>
//           </foreignObject>
//           <rect x="769" y="1676" width="478" height="20" fill="black"></rect>
//           <rect
//             x="769"
//             y="1676"
//             width="478"
//             height="20"
//             fill="url(#paint1_linear_1004_1514)"
//           ></rect>
//           <rect
//             x="769"
//             y="1676"
//             width="478"
//             height="20"
//             fill="url(#paint2_linear_1004_1514)"
//           ></rect>
//           <circle
//             cx="1009"
//             cy="26"
//             r="8"
//             fill="white"
//             fillOpacity="0.16"
//           ></circle>
//         </svg>
//       </div>
//     </div>
//   );
// }
