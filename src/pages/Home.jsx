import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Cta from "../components/Cta";
import WWA from '/who_we_are.png'


function  Home(){
    return(
        <Layout>

            {/* Hero Section */}
            
            <section className="hero-section parent" data-aos="fade-up" data-aos-easing="ease-in-out">
                <div className="hero-content">
                    <h1>Your Trusted Partner in Wealth Management</h1>
                    <p>Discover purpose-driven investing with Yun Capital Management, where disciplined strategies and global opportunities deliver measurable growth.</p>
                    <Link to='/contact-us' className='action-butt'>Schedule a Consultation <span className="icon">➜</span></Link>
                </div>
            </section>

             {/* Who we are Section  */}
            <section className="home-about parent" data-aos="fade-up" data-aos-easing="ease-in-out">
                <img src={WWA} alt="who we are image" />
                <div className="who-we-are-content">
                <h2>Who We Are</h2>
                <p>At Yun Capital Management, we are committed to creating diversified portfolios that prioritize risk control and sustainable growth. Led by Jung Yun, with over 20 years of global finance experience, our team sources investments from around the world to ensure stability and impact, no matter the economic climate.</p>
                </div>
            </section>

            {/* Services Section */}
          
            <section className="services-section parent"  id="services" data-aos="fade-up" data-aos-easing="ease-in-out">
                <h2>Our Services</h2>

                <div className="services">
            
                    <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <h2>Purpose-Driven Portfolios</h2>
                        <p>
                        Invest in opportunities that align with your values, from clean energy to education, while achieving strong returns.
                        </p>
                        <Link to='/purpose-driven-investment' className="learn-more">Learn More</Link>
                    </div>

                    <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <h2>Risk Management</h2>
                        <p>
                        Our conservative strategies protect your capital through rigorous analysis and diversified investments.
                        </p>
                        <Link to='#' className="learn-more">Learn More</Link>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <h2>Global Investing</h2>
                        <p>
                        Access high-growth opportunities worldwide, tailored to your financial goals and risk tolerance.
                        </p>
                        <Link to='#' className="learn-more">Learn More</Link>
                    </div>
                    <div className="card extra" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <h2>Sustainable Income Strategies</h2>
                        <p>Generate consistent income through ethical investments, such as ESG-focused dividends and green bonds.</p>
                        <Link to='#' className="learn-more">Learn More</Link>
                    </div>
                </div>
            </section>

            {/* Why choosw us */}

            <section className="why-choose-us-section parent" data-aos="fade-up" data-aos-easing="ease-in-out">
                <div>
                    <h2>Why Choose Us?</h2>
                    <div className="grid">
                <div className="item">
                    <i>✓</i>
                    <h3>Proven Expertise</h3>
                    <p>Decades of experience in global finance, led by an industry veteran.</p>
                </div>
                <div className="item">
                    <i>🛡️</i>
                    <h3>Risk-First Philosophy</h3>
                    <p>A conservative approach that safeguards your investments.</p>
                </div>
                <div className="item">
                    <i>🌍</i>
                    <h3>Global Perspective</h3>
                    <p>Access to diverse, high-growth opportunities worldwide.</p>
                </div>
                <div className="item">
                    <i>🤝</i>
                    <h3>Client-Centric Focus</h3>
                    <p>Tailored portfolios designed for long-term success.</p>
                </div>
                </div>
            </div>
            </section>

            {/* testimonial section */}
            <section className="testimonials-section parent" data-aos="fade-up" data-aos-easing="ease-in-out">
                <div className="testimonial-header">
                    <h2>What Our Clients Say</h2>
                </div>
                <Carousel/>
            </section> 


            {/* CTA section */}
            <Cta>
                <p className="cta-home-header">Join Yun Capital Management to build a portfolio that reflects your values and secures your future.</p>
            </Cta>

        </Layout>
    )
}

export default Home