import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import vid from "../../images/live-fashion-show.mp4";
import Glitch from "../../components/glitch";
import Footer from "../../components/footer";
import { textReveal, titleReveal } from "./Animations";
import useLocoScroll from "../../hooks/useLocoScroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let subtitle = useRef(null);
  let desc = useRef(null);
  let readmore = useRef(null);
  let title = useRef(null);
  let service1 = useRef(null);
  let service2 = useRef(null);
  let service3 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLocoScroll();

  useEffect(() => {
    textReveal([subtitle, desc, readmore]);
    titleReveal(title);
  }, []);

  // useEffect(() => {
  //   gsap.utils.toArray(".panel").forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "bottom center",
  //       scroller: ".page",
  //       pin: true,
  //       scrub: 1,
  //       pinSpacing: false,
  //       // pinType: "fixed",
  //     });
  //   });
  // }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".third",
          start: "center bottom",
          scroller: ".page",
        },
      })
      .from(".left-pane1 .div h1", {
        opacity: 0,
        duration: 1,
        x: -20,
        ease: "Power4.easeInOut",
      })
      .from(".left-pane1 .div p", {
        opacity: 0,
        duration: 1,
        y: 30,
        ease: "Power4.easeInOut",
      })
      .from(".stack", {
        width: "0%",
        opacity: 0,
        duration: 1,
        delay: -0.6,
        ease: "Expo.easeInOut",
        stagger: {
          amount: 0.2,
        },
      })
      .from(".stack h1", {
        opacity: 0,
        duration: 1,
        x: -20,
        ease: "Power4.easeInOut",
      });
  }, []);

  useEffect(() => {
    gsap.from(".left-pane2 .caption", {
      duration: 2,
      opacity: 0,
      x: -30,
      ease: "Expo.easeInOut",
      scrollTrigger: {
        trigger: ".left-pane2",
        start: "center bottom",
        scroller: ".page",
      },
    });
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".fourth",
          start: "center bottom",
          scroller: ".page",
        },
      })
      .from(".top h1", {
        duration: 1,
        opacity: 0,
        y: -30,
        ease: "Power4.easeInOut",
      })
      .from([service1, service2, service3], {
        duration: 2,
        opacity: 0,
        y: -20,
        ease: "Expo.easeInOut",
        stagger: {
          amount: 1,
        },
      });
  }, []);

  return (
    <>
      <div className="page">
        <section className="homePage">
          <div className="first panel">
            <video autoplay="autoplay" muted loop>
              <source
                src="https://cdn.shopify.com/s/files/1/0515/3633/0928/files/preview-02.mp4?v=1628514285"
                type="video/mp4"
              />
            </video>
            <div class="text">
              <div>
                <p ref={(el) => (subtitle = el)} class="subtitle">
                  The Authority In
                </p>
                <h1 ref={(el) => (title = el)} class="title">
                  <span>
                    Digital <br /> Culture
                  </span>
                </h1>
                <p ref={(el) => (desc = el)} class="desc">
                  <b>HALIMA.</b> is the cultural phenomenon surrounding <br />{" "}
                  Branding and Digital culture.
                </p>
                <Link
                  ref={(el) => (readmore = el)}
                  to="/discover"
                  class="readmore"
                >
                  Explore our work
                </Link>
              </div>
            </div>
          </div>

          <div className="second panel">
            <div className="text">
              <p>
                Halima. is a full-service creative studio crafting beautiful
                digital experiences & products.
              </p>
              <p className="abt">
                <Link to="./about">ABOUT US</Link>
              </p>
            </div>
          </div>

          <div className="container">
            <div className="wrapper">
              <div className="third panel">
                <div className="left-pane">
                  <Link to="/" className="left-pane1">
                    <div className="div">
                      <h1>Get Involved</h1>
                      <p>Ready to take the next step to grow your brand?</p>
                    </div>
                  </Link>

                  <div className="left-pane2">
                    <div className="caption">
                      <h1>
                        The <span>digital agency</span> to grow your business
                        into a global brand.
                      </h1>

                      <Link
                        ref={(el) => (readmore = el)}
                        to="/discover"
                        class="readmore"
                      >
                        Explore-more
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="right-pane">
                  <div className="stack stack-div1">
                    <h1>Branding</h1>
                  </div>
                  <div className="stack stack-div2">
                    <h1>E-commerce</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="wrapper">
              <div className="fifth panel">
                <Glitch />
              </div>
            </div>
          </div>

          {/* <div className="">
          <HFS />
        </div> */}

          <div className="container">
            <div className="wrapper">
              <div className="fourth panel">
                <div className="top">
                  <h1>
                    HALI<span>MA.</span>
                  </h1>
                </div>
                <div className="down">
                  <div ref={(el) => (service1 = el)} className="avail-services">
                    <h4>FREE SHIPMENT</h4>
                    <p>
                      for softwares over $2000 to the US, Canada and Australia
                    </p>
                  </div>
                  <div ref={(el) => (service2 = el)} className="avail-services">
                    <h4>COLD UI/UX</h4>
                    <p>from our Nigerian and Australian Designers</p>
                  </div>
                  <div ref={(el) => (service3 = el)} className="avail-services">
                    <h4>SECURE PAYMENT</h4>
                    <p>Visa, Mastercard, Amex, Paypal, Paystack, Discover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <div class="reachout_outer">
        <Link to="/discover" class="reach_out btn">
          Discover
          <span class="btnarw">
            <span></span>
          </span>
        </Link>
      </div>
    </>
  );
}
