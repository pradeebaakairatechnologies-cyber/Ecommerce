import React from 'react';
import './Traditions.css';

// Assets
import peanutsIcon from '../assets/tradition-peanuts.png';
import jaggeryIcon from '../assets/tradition-jaggery.png';
import heritageIcon from '../assets/tradition-heritage.png';

const Traditions = () => {
    return (
        <section className="traditions-section">
            <div className="traditions-container">
                <h2 className="traditions-title" data-aos="fade-up">Our Sweet Traditions</h2>
                
                <div className="traditions-grid">
                    {/* Traditional Column */}
                    <div className="tradition-item" data-aos="fade-up" data-aos-delay="100">
                        <div className="tradition-icon-wrap">
                            <img src={peanutsIcon} alt="Traditional Sweets" />
                        </div>
                        <div className="tradition-content">
                            <h3>Traditional</h3>
                            <p>
                                From humble beginnings in a small town to a beloved household name, 
                                we have been crafting traditional Indian delicacies with love and expertise for generations. 
                                Each sweet tells a story of heritage, flavor, and sweet memories shared across families.
                            </p>
                        </div>
                    </div>

                    {/* Purity Column */}
                    <div className="tradition-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="tradition-icon-wrap">
                            <img src={jaggeryIcon} alt="Purity" />
                        </div>
                        <div className="tradition-content">
                            <h3>Purity</h3>
                            <p>
                                Crafted with purity and tradition, our sweets are made with our finest cattle ghee, 
                                ensuring each bite is a taste of pure bliss. We take pride in our 
                                <span className="purity-highlight"> "No Preservatives, No White Sugar, and No Liquid Glucose" </span> 
                                promise specifically in our peanut candy.
                            </p>
                        </div>
                    </div>

                    {/* Social Responsibility Column */}
                    <div className="tradition-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="tradition-icon-wrap">
                            <img src={heritageIcon} alt="Social Responsibility" />
                        </div>
                        <div className="tradition-content">
                            <h3>Social Responsibility</h3>
                            <p>
                                We not only delight taste buds but also nurture minds. 
                                By establishing educational foundations and supporting local initiatives, 
                                we embody a commitment to uplift the community and pave the way for a brighter, 
                                more sustainable future for the generations to come.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Traditions;
