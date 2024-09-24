import React, { useState } from 'react';
import work from '../Assets/similiar-works.png';
import disha from '../Assets/Web/disha.png';
import lady from '../Assets/Web/lady.png';
import organic from '../Assets/Web/organic.png';
import popees from '../Assets/Web/popees.png';
import truth from '../Assets/Web/truth.png';
import wild from '../Assets/Web/wildtree.png';
import a from '../Assets/Branding/a.png';
import haida from '../Assets/Branding/haida.png';
import ice from '../Assets/Branding/ice.png';
import pink from '../Assets/Branding/pink.png';
import reel from '../Assets/Branding/reel.png';
import one from '../Assets/works/one.png';
import two from '../Assets/works/two.png';
import three from '../Assets/works/three.png';
import four from '../Assets/works/four.png';
import five from '../Assets/works/five.png';
import six from '../Assets/works/six.png';





const Works = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('Branding');

  // Function to render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Branding':
        return (
          <div className="row top-space">
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={work} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={haida} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={ice} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={pink} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={reel} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={a} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'SEO':
        return (
          <div className="row top-space">
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={work} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            {/* Add more SEO related content here */}
          </div>
        );
      case 'Social Media':
        return (
          <div className="row top-space">
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={work} className='similar-image' alt="Social Media work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Social Media: Engaging Audiences</h4>
                  <p className='similiar-sub'>Discover how we create engaging social media campaigns.</p>
                </div>
              </div>
            </div>
            {/* Add more social media related content here */}
          </div>
        );
      case 'Production':
        return (
          <div className="row top-space">
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={work} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            {/* Add more SEO related content here */}
          </div>
        );
      case 'Creative':
        return (
          <div className="row top-space">
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={one} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={two} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
						<div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={three} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
						<div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={four} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
						<div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={five} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
						<div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={six} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Web development & UI/UX':
        return (
          <div className="row top-space">
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={disha} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={lady} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={organic} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={popees} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={truth} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={wild} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Digital PR':
        return (
          <div className="row top-space">
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={work} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            {/* Add more SEO related content here */}
          </div>
        );
      // Add more cases for other tabs
      default:
        return null;
    }
  };

  return (
    <div className='career-page'>
      <div className="container-main">
        <div className="header-service-common">
          <h2 className='header-page-name-small'>works</h2>
          <h2 className='header-page-name-common'>Discover Our Full Suite of Creative and Digital Services</h2>
        </div>

        {/* Tabs */}
        <div className="tabs-main">
          <h3 className={activeTab === 'Branding' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Branding')}>Branding</h3>
          <h3 className={activeTab === 'SEO' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('SEO')}>SEO</h3>
          <h3 className={activeTab === 'Social Media' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Social Media')}>Social Media</h3>
          <h3 className={activeTab === 'Production' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Production')}>Production</h3>
          <h3 className={activeTab === 'Creative' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Creative')}>Creative</h3>
          <h3 className={activeTab === 'Web development & UI/UX' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Web development & UI/UX')}>Web development & UI/UX</h3>
          <h3 className={activeTab === 'Digital PR' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Digital PR')}>Digital PR</h3>
        </div>

        {/* Tab Content */}
        <div className="brand-details">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
export default Works;