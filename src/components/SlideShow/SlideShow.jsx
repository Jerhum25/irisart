import "./SlideShow.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SlideShow() {
  return (
    <div className="slideShowContainer">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 768,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 767,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          // tablet: {
          //   breakpoint: {
          //     max: 1024,
          //     min: 464,
          //   },
          //   items: 2,
          //   partialVisibilityGutter: 30,
          // },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img alt="studio"
          description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
          headline="w3js.com - web front-end studio"
          src="./assets/images/studio.jpg"
        />
        <img alt="iris"
          description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
          headline="w3js.com - web front-end studio"
          src="https://images.unsplash.com/photo-1743234120977-cb000845fa3f?q=80&w=3995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img alt="iris"
          description="React Carousel with Server Side Rendering Support – Part 2"
          headline="w3js.com - web front-end studio"
          src="https://images.unsplash.com/photo-1743234120803-c1459d2179c5?q=80&w=4016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img alt="iris"
          description="React Carousel with Server Side Rendering Support – Part 1"
          headline="w3js.com - web front-end studio"
          src="https://images.unsplash.com/photo-1736012685132-227addb515fc?q=80&w=4008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img alt="iris"
          description="React Carousel with Server Side Rendering Support – Part 2"
          headline="w3js.com - web front-end studio"
          src="https://images.unsplash.com/photo-1743234250432-81a516e59ada?q=80&w=3911&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img alt="iris"
          description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
          headline="w3js.com - web front-end studio"
          src="https://images.unsplash.com/photo-1483519173755-be893fab1f46?q=80&w=3908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        {/* <img alt="iris"
          description="React Carousel with Server Side Rendering Support – Part 2"
          headline="w3js.com - web front-end studio"
          src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/489405834_9287913354668802_1776896350749173300_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=XRqFNQ0jB9UQ7kNvwGx8WVI&_nc_oc=Adkg4qmFlvWiZarZXERwwY4_fa21otMw8pNMi2FHvQuAA6U_RgBhsXw6acApJR2cQI9DUvIkFd8xlu-wInj_mUEI&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=cvjL-9Xyc1ld7pDLMNFiGA&oh=00_AfLGDgHXwXToEx_eeZCsvmj1on8ltNUF7-4Fkl2uD46Cxg&oe=6823FE8C"
        /> */}
        {/* <img alt="iris"
          description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
          headline="w3js.com - web front-end studio"
          src="https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/488827114_9287913364668801_7471830444370133943_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=HgquokEGTmMQ7kNvwGyuxWa&_nc_oc=Adl5JleJnyydOVDwaLPF7CQ0FYAhBM_I5C0NLk1914X57-m-f8oMNSjcNe3pKcRbRNmPS-tPJhKguAI7p5QMP8f5&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=0EXv9BlCmbkgeqHrkrEhZQ&oh=00_AfLrtcjCqIDTsKir1UgpNpPUYDEP2wxG7agrtHl0VOlItw&oe=68240AB9"
        /> */}
      </Carousel>
      <h2>"Votre regard, une œuvre d’art"</h2>
      <a className="cta" href="#currentOffers">Nos offres du moment</a>
    </div>
  );
}

export default SlideShow;
