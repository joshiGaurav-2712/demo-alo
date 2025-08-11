import React, { useEffect } from "react";
import "./style.css";
import Ad1 from "../../../public/ad1.mp4";
import Ad2 from "../../../public/ad2.mp4";
import Ad3 from "../../../public/ad3.mp4";

export const ElementDefault = () => {
  useEffect(() => {
    let deliveryintervalId = null;

    function initDeliveryInfo() {
      setTimeout(() => {
        const deliveryInfoElements = document.querySelectorAll(
          ".troopod_delivery_info"
        );
        const deliveryInfoLength = 4; // Updated to match the actual number of elements

        if (deliveryInfoElements.length === deliveryInfoLength) {
          let currentIndex = 0;

          if (deliveryintervalId) {
            clearInterval(deliveryintervalId);
          }

          const showNextItem = function () {
            const currentItem = deliveryInfoElements[currentIndex];
            const nextIndex = (currentIndex + 1) % deliveryInfoElements.length;
            const nextItem = deliveryInfoElements[nextIndex];

            if (currentItem && nextItem) {
              currentItem.classList.remove("active");
              nextItem.classList.add("active");
              currentIndex = nextIndex;
            }
          };

          deliveryInfoElements.forEach((el) => el.classList.remove("active"));
          deliveryInfoElements[0]?.classList.add("active");

          deliveryintervalId = setInterval(showNextItem, 3000);
        } else {
          initDeliveryInfo();
        }
      }, 500);
    }

    initDeliveryInfo();
  }, []);

  useEffect(() => {
    const nav = document.getElementById("stickyNav");
    const navOffset = nav.offsetTop;

    window.addEventListener("scroll", () => {
      if (window.scrollY > navOffset) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
  }, []);

  useEffect(() => {
    function setActiveBreadcrumb() {
      const hash = window.location.hash;
      document.querySelectorAll(".breadcrum").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === hash);
      });
    }

    window.addEventListener("DOMContentLoaded", setActiveBreadcrumb);
    window.addEventListener("hashchange", setActiveBreadcrumb);
  }, []);

  return (
    <div className="element-default">
      <div className="body">
        <div className="section">
          <div className="strong-free-shipping">FREE SHIPPING OVER $75</div>
        </div>

        <img
          className="background"
          alt="Background"
          src="/img/background.svg"
        />

        <div className="div">
          <div className="link-go-to-access">
            <div className="get-rewards-with">GET REWARDS WITH</div>

            <div className="alo-access-logo" />
          </div>

          <button className="button">
            <div className="sign-in">SIGN IN</div>
          </button>
        </div>

        <div className="main">
          {/* Hero Section - Ad Aesthetic Continuity */}
          <section className="hero-section hero-ad-matched" data-section="hero">
            <div className="hero-container editorial-layout">
              {/* Minimal breadcrumb (not prominent) */}
              <nav className="breadcrumb-subtle">
                <a href="/footwear">Footwear</a> / Sunset
              </nav>

              {/* Editorial-style gallery matching ad visuals */}
              <div className="product-gallery editorial-style">
                <div className="main-image">
                  <video
                    src={Ad3}
                    autoPlay={true}
                    loop
                    muted={true}
                    onClick="this.muted = !this.muted"
                    playsInline={true}
                    class="video"
                  ></video>
                </div>
                <div className="detail-grid">
                  <img src="./img_grid1.jpg" alt="Premium suede close-up" />
                  <img src="./img_grid2.jpg" alt="Sleek profile" />
                  <img src="./img_grid3.jpg" alt="Sleek profile" />
                </div>
              </div>

              <div className="product-info minimal-premium">
                {/* Match ad's "INTRODUCING" language */}
                <p className="intro-text">INTRODUCING</p>
                <h1 className="product-title">alo SUNSET</h1>

                {/* Premium narrative, not sales copy */}
                <p className="product-story">
                  The sleek silhouette that transitions effortlessly from studio
                  to street. Premium suede meets recovery foam technology.
                </p>

                {/* Price without emphasis */}
                <div className="price-section">
                  <p className="price-subtle">₹20,800</p>
                  <p className="price-note">(Excluding taxes & duties)</p>
                </div>

                {/* Color indicator */}
                <div className="color-selection">
                  <span className="color-label">Black</span>
                  <span className="color-count">2 Colors</span>
                </div>

                {/* Minimal trust indicators */}
                <div className="trust-minimal">
                  <span>Complimentary Shipping</span> ·{" "}
                  <span>30-Day Returns</span>
                </div>

                {/* Clean size selector */}
                <div className="size-selector-minimal">
                  <label className="size-label">Size</label>
                  <div className="size-buttons">
                    <button className="size-btn">5W</button>
                    <button className="size-btn">5.5W</button>
                    <button className="size-btn">6W</button>
                    <button className="size-btn selected">6.5W</button>
                    <button className="size-btn">7W</button>
                    <button className="size-btn">7.5W</button>
                  </div>
                  <p className="fit-note">Runs small - size up recommended</p>
                </div>

                {/* CTA matching ad sophistication */}
                <div className="cta-section">
                  <button className="btn-primary-minimal">ADD TO BAG</button>
                  <button className="btn-wishlist-minimal">
                    <span>♡</span> ADD TO WISHLIST
                  </button>
                </div>

                {/* Very subtle social proof */}
                <p className="subtle-validation">
                  Join 500+ who made the switch
                </p>

                {/* Delivery info */}
                <div className="delivery-info-minimal">
                  <div className="delivery-item">
                    <span className="delivery-icon">🚚</span>
                    <span>Same-Day Delivery available - see at checkout</span>
                  </div>
                  <div className="delivery-item">
                    <span className="delivery-icon">↩</span>
                    <span>Free Returns & Exchanges</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="stickyNav" class="nav-container">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  alignItems: "center",
                  width: "100%",
                  padding: "10px 10px",
                  background: "#FFF",
                }}
              >
                <a href="#labdiamonds" className="breadcrum">
                  Accessories
                </a>
                <a href="#naturalvslab" className="breadcrum">
                  Shoes
                </a>
                <a href="#about" className="breadcrum">
                  Women
                </a>
                <a href="#reviews" className="breadcrum">
                  Reviews
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 2: VERSATILITY SHOWCASE - Continue Ad's Lifestyle Story */}
          <section className="style-versatility" data-section="versatility">
            <div className="versatility-container">
              <h2 className="section-title-editorial">
                FROM PILATES TO POST-STUDIO PLANS
              </h2>
              <p className="section-subtitle">
                One sneaker. Every moment of your day.
              </p>

              {/* Timeline-style layout showing day progression */}
              <div className="day-timeline">
                <div className="moment">
                  <span className="time">6:00 AM</span>
                  <img
                    src="/img/image-by-cindymello-containing-woman-sit-shoe-white-chair.png"
                    alt="Morning Pilates"
                  />
                  <p>MORNING FLOW</p>
                </div>

                <div className="moment">
                  <span className="time">10:00 AM</span>
                  <img
                    src="/img/image-by-hoiinni-containing-girl-stand-door-wear-building.png"
                    alt="Coffee Meeting"
                  />
                  <p>COFFEE MEETING</p>
                </div>

                <div className="moment">
                  <span className="time">2:00 PM</span>
                  <img src="/img/dd.png" alt="Afternoon Errands" />
                  <p>CITY ERRANDS</p>
                </div>

                <div className="moment">
                  <span className="time">7:00 PM</span>
                  <img src="/img/ce.png" alt="Evening Dinner" />
                  <p>DINNER DATE</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: MATERIAL FOCUS - Premium Texture Story */}
          <section className="material-focus" data-section="materials">
            <div className="material-container">
              {/* Autoplay video of suede texture (like ad) */}
              <div className="texture-showcase">
                <video
                  className="texture-video"
                  autoplay
                  muted
                  loop
                  playsInline
                >
                  <source src={Ad3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Material Details Section with improved layout */}
              <div className="material-details-wrapper">
                <div className="material-section-header">
                  <h2 className="material-main-title">
                    PREMIUM SUEDE CONSTRUCTION
                  </h2>
                </div>

                <div className="material-content-container">
                  <div className="material-grid">
                    <div className="material-point">
                      <span className="label">UPPER</span>
                      <span className="value">Buttery-soft suede</span>
                    </div>
                    <div className="material-point">
                      <span className="label">INSOLE</span>
                      <span className="value">Recovery foam technology</span>
                    </div>
                    <div className="material-point">
                      <span className="label">DESIGN</span>
                      <span className="value">Sleek minimal silhouette</span>
                    </div>
                    <div className="material-point">
                      <span className="label">COMFORT</span>
                      <span className="value">All-day wearability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: LIFESTYLE TESTIMONIALS - Swiper Carousel */}
          <section
            className="lifestyle-testimonials"
            data-section="testimonials"
          >
            <div className="testimonials-container">
              <h2 className="testimonials-title">STYLED BY YOU</h2>

              <div className="swiper testimonials-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <article className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="quote-icon">"</div>
                        <p className="quote">
                          "Finally, a sneaker that keeps up with my day. Morning
                          yoga, client meetings, evening plans - one shoe,
                          endless possibilities."
                        </p>
                        <div className="customer-info">
                          <p className="username">@sophiechen</p>
                          <p className="location">Los Angeles</p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="swiper-slide">
                    <article className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="quote-icon">"</div>
                        <p className="quote">
                          "The suede is impossibly soft. I've never had a
                          sneaker that looks this elevated but feels this
                          comfortable."
                        </p>
                        <div className="customer-info">
                          <p className="username">@alexiskim</p>
                          <p className="location">New York</p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="swiper-slide">
                    <article className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="quote-icon">"</div>
                        <p className="quote">
                          "Perfect for my wellness lifestyle. From Pilates class
                          to coffee dates, these sneakers are my go-to. The
                          recovery foam is a game-changer."
                        </p>
                        <div className="customer-info">
                          <p className="username">@mariajones</p>
                          <p className="location">Miami</p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="swiper-slide">
                    <article className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="quote-icon">"</div>
                        <p className="quote">
                          "Alo's attention to detail is unmatched. The
                          minimalist design pairs perfectly with everything in
                          my wardrobe. Pure luxury."
                        </p>
                        <div className="customer-info">
                          <p className="username">@jenniferwu</p>
                          <p className="location">San Francisco</p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="swiper-slide">
                    <article className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="quote-icon">"</div>
                        <p className="quote">
                          "From studio to street seamlessly. The buttery suede
                          feels amazing and holds up beautifully. Best
                          investment I've made this year."
                        </p>
                        <div className="customer-info">
                          <p className="username">@taylorsmith</p>
                          <p className="location">Austin</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>

              {/* Subtle transition to reviews */}
              <div className="review-teaser">
                <p className="review-text">Loved by 527 customers worldwide</p>
                <a href="#reviews" className="subtle-link">
                  See all reviews →
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 5: TROOPOD - Shoppable Lifestyle Videos */}
          <section className="troopod-section" data-section="shoppable-videos">
            <div className="troopod-container">
              <h2 className="troopod-title">AS SEEN ON OUR COMMUNITY</h2>

              {/* Video carousel with lifestyle content */}
              <div className="swiper troopod-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="video-card">
                      <video autoPlay muted loop playsInline>
                        <source src={Ad1} type="video/mp4" />
                      </video>
                      <div className="video-caption">
                        <p className="username">@mariasantos</p>
                        <p className="caption-text">My everyday uniform</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="video-card">
                      <video autoPlay muted loop playsInline>
                        <source src={Ad2} type="video/mp4" />
                      </video>
                      <div className="video-caption">
                        <p className="username">@jennywong</p>
                        <p className="caption-text">Studio to street ready</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="video-card">
                      <video autoPlay muted loop playsInline>
                        <source src={Ad3} type="video/mp4" />
                      </video>
                      <div className="video-caption">
                        <p className="username">@alexchen</p>
                        <p className="caption-text">From gym to coffee date</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </section>

          {/* SECTION 6: PRODUCT COMPARISON - Find Your Perfect Fit */}
          <section className="product-comparison" data-section="comparison">
            <div className="comparison-container">
              <h2 className="comparison-title">FIND YOUR PERFECT FIT</h2>

              <table className="comparison-table minimal">
                <thead>
                  <tr>
                    <th></th>
                    <th className="highlighted">ALO SUNSET</th>
                    <th>ALO RUNNER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BEST FOR</td>
                    <td className="highlighted">
                      Pilates to post-studio plans
                    </td>
                    <td>Running & high-impact</td>
                  </tr>
                  <tr>
                    <td>MATERIAL</td>
                    <td className="highlighted">Premium suede</td>
                    <td>Technical mesh</td>
                  </tr>
                  <tr>
                    <td>STYLE</td>
                    <td className="highlighted">Fashion-forward</td>
                    <td>Athletic performance</td>
                  </tr>
                  <tr>
                    <td>COMFORT</td>
                    <td className="highlighted">Recovery foam insole</td>
                    <td>Dual-density midsole</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="container-2">
            <div className="horizontal-border">
              <div className="text-wrapper-18">Shop the Look</div>
            </div>

            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="container-3">
                  <div className="group">
                    <div className="link">
                      <div className="unisex-half-crew">
                        Unisex Half-Crew
                        <br />
                        Understated Sock -<br />
                        White
                      </div>
                    </div>

                    <div className="text-wrapper-19">₹3,000</div>

                    <div className="overlap-group">
                      <img
                        className="overlay"
                        alt="Overlay"
                        src="/img/overlay.svg"
                      />
                    </div>
                  </div>

                  <div className="group-2">
                    <div className="link">
                      <p className="accolade-zip">
                        Accolade 1/4 Zip
                        <br />
                        Pullover - Athletic
                        <br />
                        Heather Grey
                      </p>
                    </div>

                    <div className="text-wrapper-20">₹12,700</div>

                    <div className="overlay-wrapper">
                      <img
                        className="overlay"
                        alt="Overlay"
                        src="/img/overlay-2.svg"
                      />
                    </div>
                  </div>

                  <div className="group-3">
                    <div className="link">
                      <div className="accolade-short">
                        Accolade Short -<br />
                        Athletic Heather
                        <br />
                        Grey
                      </div>
                    </div>

                    <div className="text-wrapper-21">₹6,300</div>

                    <div className="img-wrapper">
                      <img
                        className="overlay"
                        alt="Overlay"
                        src="/img/overlay-1.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="overlay-2">
                  <div className="overlay-3" />
                </div>
              </div>
            </div>

            <div className="details">
              <div className="slot-button">
                <div className="description">DESCRIPTION</div>

                <div className="icon">
                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-2.svg"
                  />
                </div>
              </div>
            </div>

            <div className="slot-button-wrapper">
              <div className="slot-button">
                <div className="fit">FIT</div>

                <div className="icon">
                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-2.svg"
                  />
                </div>
              </div>
            </div>

            <div className="details-2">
              <div className="slot-button">
                <div className="fabrication">FABRICATION</div>

                <div className="icon">
                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-2">
            <div className="heading-built-for">
              BUILT FOR EFFORTLESS
              <br />
              STYLE
            </div>

            <div className="container-4" />

            <div className="element-comfortable">
              01 COMFORTABLE PADDED COLLAR
            </div>

            <p className="text-wrapper-22">
              Transitional design for the girl-on-the-go
            </p>

            <div className="element-low-profile">02 LOW-PROFILE SILHOUETTE</div>

            <p className="text-wrapper-23">
              Soft, smooth surface and easy-to-wear shades
            </p>

            <div className="element-extra-wide-laces">03 EXTRA-WIDE LACES</div>

            <p className="text-wrapper-24">
              Comfort and refined function for all-day wear
            </p>

            <div className="element-fashion-forward">
              04 FASHION-FORWARD DETAILS
            </div>

            <p className="elevated-street">
              Elevated street style that draws inspiration from LA&#39;s iconic
              <br />
              Sunset Boulevard
            </p>
          </div>

          <div className="container-5">
            <div className="heading-compare">COMPARE FOOTWEAR</div>

            <div className="container-6">
              <div className="border-2">
                <div className="link-2">
                  <div className="ALO-sunset-sneaker">
                    ALO SUNSET
                    <br />
                    SNEAKER
                  </div>
                </div>

                <div className="paragraph">
                  <div className="designed-for">DESIGNED FOR</div>

                  <div className="text-wrapper-25">
                    Pilates to post-studio plans.
                  </div>
                </div>

                <div className="paragraph-2">
                  <div className="product-features">PRODUCT FEATURES</div>

                  <p className="low-profile">
                    Low-profile aesthetic,
                    <br />
                    recovery foam insole,
                    <br />
                    premium suede, fashion-
                    <br />
                    forward details.
                  </p>
                </div>

                <div className="link-3" />

                <div className="horizontal-border-2">
                  <div className="fit-feel">FIT &amp; FEEL</div>

                  <div className="text-wrapper-26">Sleek Feel</div>

                  <img
                    className="assets"
                    alt="Assets"
                    src="/img/assets-2faa96744e7fe74e2a90d22918299c1f1d-2fcfdf6b76e89e403cb87f-1.svg"
                  />

                  <div className="text-wrapper-27">Recovery Foam Insole</div>

                  <div className="assets-2" />

                  <div className="text-wrapper-28">Lightweight</div>

                  <div className="assets-3">
                    <div className="assets-wrapper">
                      <div className="assets-4">
                        <img
                          className="vector-4"
                          alt="Vector"
                          src="/img/vector-5.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="paragraph-3">
                  <div className="material">MATERIAL</div>

                  <div className="text-wrapper-29">Premium suede.</div>
                </div>
              </div>

              <div className="border-3">
                <div className="alo-runner-wrapper">
                  <div className="alo-runner">ALO RUNNER</div>
                </div>

                <div className="paragraph-4">
                  <div className="designed-for-2">DESIGNED FOR</div>

                  <p className="stability-and">
                    Stability and support on
                    <br />
                    street, trail, track, or sand.
                  </p>
                </div>

                <div className="paragraph-5">
                  <div className="product-features">PRODUCT FEATURES</div>

                  <p className="stabilizing-heel">
                    Stabilizing heel clip, dual-
                    <br />
                    density midsole, multi-terrain
                    <br />
                    outsole grip pods, and
                    <br />
                    reflective details.
                  </p>
                </div>

                <div className="link-4" />

                <div className="horizontal-border-3">
                  <div className="fit-feel">FIT &amp; FEEL</div>

                  <div className="text-wrapper-30">Lightweight</div>

                  <div className="assets">
                    <div className="assets-wrapper">
                      <div className="assets-4">
                        <img
                          className="vector-4"
                          alt="Vector"
                          src="/img/vector-6.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-wrapper-31">Extra-Firm Cushioning</div>

                  <div className="assets-5" />

                  <div className="text-wrapper-32">Flexible</div>

                  <img
                    className="assets-3"
                    alt="Assets"
                    src="/img/assets-2faa96744e7fe74e2a90d22918299c1f1d-2fed9c5fb62c164867816c.svg"
                  />
                </div>

                <div className="paragraph-6">
                  <div className="material-2">MATERIAL</div>

                  <p className="breathable-double">
                    Breathable double-layer
                    <br />
                    mesh upper is made with
                    <br />
                    70% recycled materials.
                  </p>
                </div>
              </div>

              <div className="border-4">
                <div className="link-2">
                  <div className="ALO-recovery-mode">
                    ALO RECOVERY
                    <br />
                    MODE
                  </div>
                </div>

                <div className="paragraph-4">
                  <div className="designed-for-2">DESIGNED FOR</div>

                  <p className="a-clean-modern">
                    A clean &amp; modern
                    <br />
                    streetwear look.
                  </p>
                </div>

                <div className="paragraph-5">
                  <div className="product-features">PRODUCT FEATURES</div>

                  <p className="ultra-cushioned">
                    Ultra-cushioned comfort
                    <br />
                    collar, seamless no-slip
                    <br />
                    interior support, and long-
                    <br />
                    lasting rubber soles.
                  </p>
                </div>

                <div className="link-5" />

                <div className="horizontal-border-3">
                  <div className="fit-feel">FIT &amp; FEEL</div>

                  <div className="text-wrapper-33">Cloud-Like Feel</div>

                  <div className="assets">
                    <div className="assets-wrapper">
                      <div className="assets-4">
                        <img
                          className="vector-5"
                          alt="Vector"
                          src="/img/vector-7.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-wrapper-34">High-Rebound</div>

                  <div className="assets-2" />

                  <div className="text-wrapper-35">Sleek Feel</div>

                  <img
                    className="assets-3"
                    alt="Assets"
                    src="/img/assets-2faa96744e7fe74e2a90d22918299c1f1d-2fcfdf6b76e89e403cb87f.png"
                  />
                </div>

                <div className="paragraph-7">
                  <div className="material">MATERIAL</div>

                  <div className="text-wrapper-36">
                    Made from vegan leather.
                  </div>
                </div>
              </div>

              <div className="border-5">
                <div className="recovery-slipper-wrapper">
                  <div className="recovery-slipper">RECOVERY SLIPPER</div>
                </div>

                <div className="paragraph">
                  <div className="designed-for">DESIGNED FOR</div>

                  <div className="text-wrapper-37">Sleek all-day recovery.</div>
                </div>

                <div className="paragraph-8">
                  <div className="product-features">PRODUCT FEATURES</div>

                  <p className="lightweight">
                    Lightweight &amp; cushioned
                    <br />
                    feel, high-rebound recovery
                    <br />
                    foam insole, soft faux fur
                    <br />
                    lining, and slip-resistant
                    <br />
                    rubber sole.
                  </p>
                </div>

                <div className="link-6" />

                <div className="horizontal-border-2">
                  <div className="fit-feel">FIT &amp; FEEL</div>

                  <div className="text-wrapper-33">Cloud-Like Feel</div>

                  <div className="assets">
                    <div className="assets-wrapper">
                      <div className="assets-4">
                        <img
                          className="vector-5"
                          alt="Vector"
                          src="/img/vector-8.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-wrapper-34">High-Rebound</div>

                  <div className="assets-2" />

                  <div className="text-wrapper-38">Cozy Fit</div>

                  <img
                    className="assets-3"
                    alt="Assets"
                    src="/img/assets-2faa96744e7fe74e2a90d22918299c1f1d-2f4431aabea2d34019b964.png"
                  />
                </div>

                <div className="paragraph-9">
                  <div className="material">MATERIAL</div>

                  <div className="text-wrapper-39">Premium suede exterior.</div>
                </div>
              </div>

              <div className="border-6">
                <div className="IT-slide-wrapper">
                  <div className="IT-slide">IT SLIDE</div>
                </div>

                <div className="paragraph">
                  <div className="designed-for">DESIGNED FOR</div>

                  <div className="text-wrapper-40">
                    Pre- and post-workout looks.
                  </div>
                </div>

                <div className="paragraph-10">
                  <div className="product-features">PRODUCT FEATURES</div>

                  <p className="padded-strap-non">
                    Padded strap, non-slip grip,
                    <br />
                    and single-density foam
                    <br />
                    sole.
                  </p>
                </div>

                <div className="link-7" />

                <div className="horizontal-border-2">
                  <div className="fit-feel">FIT &amp; FEEL</div>

                  <div className="text-wrapper-33">Cloud-Like Feel</div>

                  <div className="assets">
                    <div className="assets-wrapper">
                      <div className="assets-4">
                        <img
                          className="vector-5"
                          alt="Vector"
                          src="/img/vector-8.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-wrapper-41">Non-Slip</div>

                  <img
                    className="assets-6"
                    alt="Assets"
                    src="/img/assets-2faa96744e7fe74e2a90d22918299c1f1d-2fcc8069db3e514b0db9ff.png"
                  />

                  <div className="text-wrapper-42">Water Resistant</div>

                  <img
                    className="assets-3"
                    alt="Assets"
                    src="/img/assets-2faa96744e7fe74e2a90d22918299c1f1d-2f9ebf962cbf6e4e9182f2.png"
                  />
                </div>

                <div className="paragraph-11">
                  <div className="material-2">MATERIAL</div>

                  <div className="cloud-like-EVA">
                    Cloud-like EVA-injected
                    <br />
                    insole.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="heading-how-to">HOW TO STYLE IT</div>

          <div className="section-sunset" />

          <div className="paragraph-12">
            <div className="heading-style">STYLE INSPIRATION</div>

            <p className="text-wrapper-43">
              Shop our best looks, styled by you
            </p>
          </div>

          <div className="container-7">
            <div className="group-4">
              <div className="text-wrapper-44">@hoiinni</div>

              <div className="overlap-group-2">
                <img className="button-5" alt="Button" src="/img/button.svg" />

                <img
                  className="button-6"
                  alt="Button"
                  src="/img/button-1.svg"
                />

                <img
                  className="button-7"
                  alt="Button"
                  src="/img/button-2.svg"
                />
              </div>
            </div>

            <div className="group-5">
              <div className="text-wrapper-45">@cindymello</div>

              <div className="overlap-2">
                <img
                  className="button-8"
                  alt="Button"
                  src="/img/button-3.svg"
                />

                <img
                  className="button-9"
                  alt="Button"
                  src="/img/button-4.svg"
                />

                <img
                  className="button-10"
                  alt="Button"
                  src="/img/button-5.svg"
                />
              </div>
            </div>

            <div className="group-6">
              <div className="overlay-shadow-wrapper">
                <div className="overlay-shadow" />
              </div>

              <div className="button-11">
                <div className="overlay-shadow" />
              </div>
            </div>

            <div className="group-7">
              <div className="button-12">
                <div className="overlay-shadow" />
              </div>

              <div className="button-13">
                <div className="overlay-shadow" />
              </div>
            </div>

            <img className="group-8" alt="Group" src="/img/group-5-12.png" />

            <div className="button-wrapper">
              <div className="button-14">
                <div className="overlay-shadow" />
              </div>
            </div>

            <div className="group-9">
              <div className="button-15">
                <div className="overlay-shadow" />
              </div>

              <div className="button-16">
                <div className="overlay-shadow" />
              </div>
            </div>

            <div className="group-10">
              <div className="button-17">
                <div className="overlay-shadow" />
              </div>

              <div className="button-18">
                <div className="overlay-shadow" />
              </div>
            </div>

            <div className="group-11">
              <div className="button-19">
                <div className="overlay-shadow" />
              </div>

              <div className="button-20">
                <div className="overlay-shadow" />
              </div>
            </div>

            <div className="group-12">
              <div className="button-21">
                <div className="overlay-shadow" />
              </div>
            </div>

            <div className="group-13">
              <div className="button-22">
                <div className="overlay-shadow" />
              </div>

              <div className="button-23">
                <div className="overlay-shadow" />
              </div>
            </div>

            <div className="group-14">
              <div className="button-24">
                <div className="overlay-shadow" />
              </div>
            </div>
          </div>

          <div className="container-8">
            <div className="heading-reviews">REVIEWS</div>

            <div className="horizontal-border-4">
              <p className="text-wrapper-46">
                No reviews have been submitted yet.
              </p>
            </div>
          </div>
        </div>

        <section
          className="reviews-section delayed-reveal"
          data-section="reviews"
        >
          <div className="reviews-container">
            <div className="review-summary">
              <h2>CUSTOMER REVIEWS</h2>
              <div className="rating-overview">
                <span className="rating">4.8</span>
                <span className="stars">★★★★★</span>
                <span className="count">527 Reviews</span>
              </div>
            </div>

            <div className="review-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Verified Purchase</button>
              <button className="filter-btn">With Photos</button>
            </div>

            <div className="reviews-list">
              <article className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">Priya S.</span>
                  <span className="verified-badge">✓ Verified</span>
                  <span className="review-date">2 weeks ago</span>
                </div>
                <div className="review-rating">★★★★★</div>
                <p className="review-text">
                  Perfect for my lifestyle. I wear these from morning Pilates
                  through client meetings. The suede is luxurious and they're
                  surprisingly comfortable for all-day wear.
                </p>
              </article>

              <article className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">Maya K.</span>
                  <span className="verified-badge">✓ Verified</span>
                  <span className="review-date">1 month ago</span>
                </div>
                <div className="review-rating">★★★★★</div>
                <p className="review-text">
                  These are my go-to recovery shoes! The cloud-like cushioning
                  feels amazing after intense workouts. Quality is exceptional
                  and they pair beautifully with ALO sets.
                </p>
                <div className="review-photos">
                  <div className="photo-indicator">📷 2 photos</div>
                </div>
              </article>

              <article className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">Sarah M.</span>
                  <span className="verified-badge">✓ Verified</span>
                  <span className="review-date">3 weeks ago</span>
                </div>
                <div className="review-rating">★★★★★</div>
                <p className="review-text">
                  Finally found my holy grail recovery slides! The suede feels
                  premium and the memory foam is like walking on clouds. Worth
                  every penny for post-workout comfort.
                </p>
              </article>

              <article className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">Anisha R.</span>
                  <span className="verified-badge">✓ Verified</span>
                  <span className="review-date">2 days ago</span>
                </div>
                <div className="review-rating">★★★★★</div>
                <p className="review-text">
                  Love how versatile these are! Wear them to yoga class, running
                  errands, or just lounging at home. The quality and comfort
                  level is unmatched. ALO never disappoints!
                </p>
              </article>

              <article className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">Jessica L.</span>
                  <span className="verified-badge">✓ Verified</span>
                  <span className="review-date">1 week ago</span>
                </div>
                <div className="review-rating">★★★★☆</div>
                <p className="review-text">
                  Beautiful slides with amazing comfort. The suede is so soft
                  and the cushioning is perfect for recovery days. Only wish
                  they came in more color options. Highly recommend!
                </p>
                <div className="review-photos">
                  <div className="photo-indicator">📷 1 photo</div>
                </div>
              </article>

              <article className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">Kavya T.</span>
                  <span className="verified-badge">✓ Verified</span>
                  <span className="review-date">4 days ago</span>
                </div>
                <div className="review-rating">★★★★★</div>
                <p className="review-text">
                  These slides have become my daily essential! Perfect for
                  post-workout recovery and casual wear. The premium materials
                  and attention to detail is exactly what I expect from ALO.
                </p>
              </article>
            </div>

            <button className="load-more-btn">View All 527 Reviews</button>
          </div>
        </section>

        <footer className="footer">
          <p className="for-applicable">
            For applicable countries, duties &amp; taxes will be
            <br />
            automatically calculated and displayed during
            <br />
            checkout. Depending on the country, you will have
            <br />
            the option to choose DDP (Delivery Duty Paid) or
            <br />
            DDU (Delivery Duty Unpaid).
          </p>

          <p className="small-ALO-LLC">© 2025 ALO, LLC. All Rights Reserved.</p>

          <div className="overlap-3">
            <div className="small-link">
              <div className="text-wrapper-47">Terms</div>
            </div>

            <div className="small-link-2">
              <div className="text-wrapper-48">Privacy</div>
            </div>

            <div className="small-link-3">
              <div className="text-wrapper-49">Cookie Policy</div>
            </div>

            <div className="small-link-4">
              <div className="text-wrapper-50">Cookie</div>

              <div className="text-wrapper-51">Preferences</div>
            </div>
          </div>

          <div className="overlap-4">
            <div className="container-9">
              <div className="form">
                <p className="sign-up-for-our">
                  Sign up for our newsletter - enter your email
                  <br />
                  below
                </p>

                <div className="image-wrapper">
                  <div className="image-4">
                    <div className="image-fill">
                      <div className="vector-wrapper">
                        <img
                          className="vector-6"
                          alt="Vector"
                          src="/img/vector-10.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overlap-5">
                  <p className="text-wrapper-52">
                    Please enter a valid email address
                  </p>

                  <p className="that-didn-t-seem-to">
                    That didn&#39;t seem to work. Try again?
                  </p>

                  <div className="input-email">
                    <div className="container-10">
                      <div className="text-wrapper-53">Enter your email</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-11">
                <div className="overlap-6">
                  <p className="text-wrapper-54">
                    By entering your email address, you agree to our
                  </p>

                  <div className="link-privacy-policy">
                    <div className="mispelled">
                      <div className="text-wrapper-55">Privacy</div>

                      <div className="text-wrapper-56">Policy</div>
                    </div>
                  </div>

                  <p className="and-will-receive-ALO">
                    {" "}
                    and will receive ALO offers, promotions and other
                  </p>
                </div>

                <p className="text-wrapper-57">
                  commercial messages. You may unsubscribe at any time.
                </p>
              </div>
            </div>

            <div className="text-wrapper-58">Get the App</div>
          </div>

          <img
            className="list-item-link"
            alt="List item link"
            src="/img/list-item-link.svg"
          />

          <div className="container-12">
            <div className="text-wrapper-59">Follow Us</div>

            <img className="list-2" alt="List" src="/img/list.svg" />
          </div>

          <div className="container-13">
            <div className="language-ship-to">Language &amp; Ship To</div>

            <button className="container-wrapper">
              <div className="container-14">
                <div className="text-wrapper-60">India</div>

                <div className="border-7" />
              </div>
            </button>
          </div>

          <div className="details-slot-summary">
            <div className="text-wrapper-61">Customer Service</div>

            <div className="border-8" />
          </div>

          <div className="details-slot-summary-2">
            <div className="text-wrapper-62">My Account</div>

            <div className="border-8" />
          </div>

          <div className="details-slot-summary-3">
            <div className="text-wrapper-63">Information</div>

            <div className="border-8" />
          </div>
        </footer>

        <div className="sticky-cart">
          <button className="primary-cta">ADD TO BAG</button>
          <div className="slide-text-container">
            <div className="slide-texts">
              <div className="troopod_delivery_info">
                Complimentary Shipping
              </div>
              <div className="troopod_delivery_info">Premium Suede</div>
              <div className="troopod_delivery_info">30-Day Returns</div>
              <div className="troopod_delivery_info">Recovery Foam</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
