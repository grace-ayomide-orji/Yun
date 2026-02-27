import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Cta from "../components/Cta";
import BIF from '../assets/bif.png'
import RWP from '../assets/rwp.png'
import SG from '../assets/sg.jpg'
import EIG from '/p_invest.png'

function Investment(){
    return(
        <Layout>
            {/* hero section */}
            <section className="hero-section-small parent investment-section">
                <div className="relative z-[100] hero-section-small-content">
                    <h1>Purpose-Driven Investment</h1>
                    <p>Wealth with Impact</p>
                    <Link to='/contact-us' className='action-butt'>Schedule a Consultation <span className="icon">➜</span></Link>
                </div>
            </section>
            
            {/* <!-- Philosophy Section --> */}
            <section className="philosophy parent" data-aos="fade-up" data-aos-easing="ease-in-out">
                <h2>Our Philosophy</h2>
                <p>At Yun Capital Management, we believe that investments should do more than generate returns—they should align with your values and contribute to a sustainable future. Our Purpose-Driven Investment approach combines disciplined financial strategies with a commitment to creating positive impact. By prioritizing risk control and diversification, we craft portfolios that deliver measurable growth while staying true to your goals and principles.</p>
            </section>

            {/* <!-- What is Purpose-Driven Investing --> */}
            <section className="what-is parent" data-aos="fade-up" data-aos-easing="ease-in-out">
                <h2>What is Purpose-Driven Investing?</h2>
                <p>Purpose-driven investing means selecting opportunities that not only offer strong financial potential but also reflect ethical, sustainable, and socially responsible practices. We source investments from around the globe, focusing on businesses and sectors that drive innovation, environmental stewardship, and economic stability. Our conservative strategy ensures these investments are protected from market volatility, providing both peace of mind and long-term value.</p>
            </section>

            {/* <!-- Investment Approach --> */}
            <section className="investment-approach parent" data-aos="fade-up" data-aos-easing="ease-in-out">
                <h2>Our Investment Approach</h2>
                <div className="item">
                    <h3>Global Diversification</h3>
                    <p>We invest in both traditional and non-traditional assets to ensure resilience across economic conditions.</p>
                </div>
                <div className="item">
                    <h3>Risk Management</h3>
                    <p>Our conservative approach prioritizes capital preservation, using rigorous analysis to mitigate risks.</p>
                </div>
                <div className="item">
                    <h3>Impact Focus</h3>
                    <p>We target opportunities in sectors like clean technology, healthcare, and education.</p>
                </div>
                <div className="item">
                    <h3>Tailored Solutions</h3>
                    <p>Each portfolio is customized to reflect your financial objectives and values.</p>
                </div>
                <div className="item" >
                    <h3>Long-Term Value Creation</h3>
                    <p>We focus on investments that deliver sustainable, enduring returns, aligning with your vision for lasting wealth.</p>
                </div>
            </section>

            {/* <!-- Featured Strategies --> */}
            <section className="strategies parent" data-aos="fade-up" data-aos-easing="ease-in-out">
                <h2>Featured Investment Strategies</h2>
                <div className="grid">
                    <div className="card">
                        <img src={SG} alt="Sustainable Growth" />
                        <div className="card-content">
                            <h3>Sustainable Growth Portfolios</h3>
                            <p><strong>Focus</strong>: Investments in companies driving environmental and social progress.</p>
                            <p><strong>Benefits</strong>: Long-term growth with reduced exposure to volatile sectors.</p>
                            <p><strong>Example</strong>: Supporting firms innovating in carbon-neutral technologies.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={BIF} alt="Balanced Impact" />
                        <div className="card-content">
                            <h3>Balanced Impact Funds</h3>
                            <p><strong>Focus</strong>: A mix of traditional and alternative assets, emphasizing ethical governance.</p>
                            <p><strong>Benefits</strong>: Diversification with a focus on stability and purpose.</p>
                            <p><strong>Example</strong>: Backing healthcare initiatives that improve access.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={RWP} alt="Wealth Preservation" />
                        <div className="card-content">
                            <h3>Resilient Wealth Preservation</h3>
                            <p><strong>Focus</strong>: Conservative investments supporting stable, purpose-driven sectors.</p>
                            <p><strong>Benefits</strong>: Security during downturns with steady growth.</p>
                            <p><strong>Example</strong>: Investing in municipal bonds funding education.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={EIG} alt="Ethical Income Generation" />
                        <div className="card-content">
                            <h3>Ethical Income Generation</h3>
                            <p><strong>Focus</strong>: Investments in stable, ethical assets that generate consistent income.</p>
                            <p><strong>Benefits</strong>: Reliable cash flow with alignment to sustainable values.</p>
                            <p><strong>Example</strong>: Investing in green bonds supporting renewable energy projects.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- CTA Section --> */}
            <Cta>
                 <h2 className="cta-home-header investment-cta-header">Ready to Get Started?</h2>
            </Cta>
             
        </Layout>
    )
}

export default Investment