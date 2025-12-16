import React, { useState } from "react";
import styled from "styled-components"
import productsData from "../data/productsData";

const MyImages = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

    
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */}

      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImages;

// import React, { useState } from "react";
// import styled from "styled-components";

// const MyImages = ({ imgs = [{ url: "" }] }) => {
//   const [mainImage, setMainImage] = useState(imgs[0]);

//   return (
//     <Wrapper>
//       <div className="main-screen">
//         <img src={mainImage.url} alt={mainImage.filename} />
//       </div>
//       <div className="gallery">
//         {imgs.map((image, index) => (
//           <figure key={index}>
//             <img
//               src={image.url}
//               alt={image.filename}
//               onClick={() => setMainImage(image)}
//               className={image.url === mainImage.url ? "active" : ""}
//             />
//           </figure>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .main-screen {
//     width: 100%;
//     height: 500px;
//     margin-bottom: 2rem;

//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//   }

//   .gallery {
//     display: flex;
//     justify-content: center;
//     gap: 1rem;

//     figure {
//       margin: 0;

//       img {
//         width: 100px;
//         height: 100px;
//         object-fit: cover;
//         cursor: pointer;
//         transition: transform 0.3s ease;

//         &.active {
//           border: 2px solid ${({ theme }) => theme.colors.btn};
//           transform: scale(1.1);
//         }
//       }
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .main-screen {
//       height: 300px;
//     }

//     .gallery {
//       flex-wrap: wrap;

//       figure {
//         img {
//           width: 80px;
//           height: 80px;
//         }
//       }
//     }
//   }
// `;

// export default MyImages;