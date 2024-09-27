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
import pone from '../Assets/Production/1.png';
import ptwo from '../Assets/Production/2.png';
import pthree from '../Assets/Production/3.png';
import pfour from '../Assets/Production/4.png';
import pfive from '../Assets/Production/5.png';
import psix from '../Assets/Production/6.png';
import done from '../Assets/PR/1.png';
import dtwo from '../Assets/PR/2.png';
import dthree from '../Assets/PR/3.png';
import dfour from '../Assets/PR/4.png';
import sone from '../Assets/Seo/1.png';
import stwo from '../Assets/Seo/2.png';
import sthree from '../Assets/Seo/3.png';
import sfour from '../Assets/Seo/4.png';
import sfive from '../Assets/Seo/5.png';
import mone from '../Assets/Perfomance/1.png';
import mtwo from '../Assets/Perfomance/2.png';
import mthree from '../Assets/Perfomance/3.png';
import mfour from '../Assets/Perfomance/4.png';
import mfive from '../Assets/Perfomance/5.png';
import msix from '../Assets/Perfomance/6.png';
import smone from '../Assets/SocialMedia/1.png';
import smtwo from '../Assets/SocialMedia/2.png';
import smthree from '../Assets/SocialMedia/3.png';
import smfour from '../Assets/SocialMedia/4.png';
import smfive from '../Assets/SocialMedia/5.png';
import smsix from '../Assets/SocialMedia/6.png';
import dfive from '../Assets/PR/5.png';
import dsix from '../Assets/PR/6.png';














const Works = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('Branding');

  // Function to render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Branding':
        return (
          <div className="row top-space font-h">
            <div className="row">
              <div className="col-lg-6">
                <div className="details-work">
                  <h3 className='details-text'>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
                </div>
              </div>
            </div>
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
                  <h4 className='similiar-title'>2. Branding the backbone of smart construction</h4>
                  <p className='similiar-sub'>We helped craft a brand story that speaks for itself, for Haida BIM, a company offering engineering software support for construction businesses.</p>
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
                <img src={a} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>5. Crafting the soul of the brand</h4>
                  <p className='similiar-sub'>We helped Dubai-based brand, Automate My Biz craft their brand story that speaks their truth.</p>
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
          </div>
        );
      case 'SEO':
        return (
          <div className="row top-space font-h">
            <div className="row">
              <div className="col-lg-6">
                <div className="details-work">
                  <h3 className='details-text'>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={sfour} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1. Launching Kairali TMT Online</h4>
                  <p className='similiar-sub'>We partnered with one of South India’s biggest steel brands to increase their online presence. Explore how we helped drive organic traffic from 1k to 2 lakh+! </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={sfive} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2.  Strategies that put you on top.</h4>
                  <p className='similiar-sub'>We helped Skin Bae, a brand that sells premium and authentic Korean skincare products, rank higher than industry leaders like Amazon, Nykaa, and more. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={sone} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>  3. SEO strategies that rank you on the first page!</h4>
                  <p className='similiar-sub'>Our SEO strategies made a difference for Abu Dhabi-based home care provider Infinity Care. Our strategies reduced bounce rates and generated 200+ leads in just 2 months!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={sthree} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4. SEO expertise that drives results!</h4>
                  <p className='similiar-sub'>Discover how our SEO experts generated 1M+ revenue within 10 months for BOSQ, a premium workspace solutions brand! Our strategies delivered organic 500+ sales-quality leads.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={stwo} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>5. 200+ leads in 2 months!</h4>
                  <p className='similiar-sub'>Our SEO strategies made a difference for Abu Dhabi-based home care provider Infinity Care. Our strategies reduced bounce rates and generated 200+ leads in just 2 months!</p>
                </div>
              </div>
            </div>


          </div>
        );
      case 'Social Media':
        return (
          <div className="row top-space font-h">
            <div className="row">
              <div className="col-lg-6">
                <div className="details-work">
                  <h3 className='details-text'>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={smone} className='similar-image' alt="Social Media work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1. Scroll-stopping Design Creatives!</h4>
                  <p className='similiar-sub'>We crafted unique and captivating design creatives for Organic Habits, an organic and health-oriented food company, and Care n Cure, an online pharmacy. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={smtwo} className='similar-image' alt="Social Media work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2. A community of 50+ happy clients!</h4>
                  <p className='similiar-sub'>Explore how we delivered show-stopping creative solutions to over 50+ clients from multiple industries.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={smthree} className='similar-image' alt="Social Media work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>3. Campaigning for change with Femisafe.</h4>
                  <p className='similiar-sub'>Our captivating and strong campaigns for Femisafe for Women’s Day were dearly loved and recognized!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={smfour} className='similar-image' alt="Social Media work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4. Reeling views in.</h4>
                  <p className='similiar-sub'>We helped a UAE-based Visa assistance company gain over 25+M organic views with our reel concepts!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={smfive} className='similar-image' alt="Social Media work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>5. Killer posts that help you scale!</h4>
                  <p className='similiar-sub'>We partnered with Kiddiebus, a platform for English education for kids to help increase their brand reach. With over 90% increase in engagement, our strategies help you scale.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={smsix} className='similar-image' alt="Social Media work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>6. Design Creatives that speak for themselves.</h4>
                  <p className='similiar-sub'>Our design creatives we crafted for The Visa Guy and Liro was a huge hit online!</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Production':
        return (
          <div className="row top-space font-h">
            <div className="row">
              <div className="col-lg-6">
                <div className="details-work">
                  <h3 className='details-text'>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={pone} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Personal project using Bavaria</h4>
                  {/* <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={ptwo} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Photography for our client Berry&Co</h4>
                  {/* <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={pthree} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Website photography for our client Alkameez</h4>
                  {/* <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={pfour} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Product photography for Berry&Co</h4>
                  {/* <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={pfive} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Product photography for social media of a skincare brand</h4>
                  {/* <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={psix} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>photoshoot done for social media of a skin care brand.</h4>
                  {/* <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p> */}
                </div>
              </div>
            </div>
          </div>
        );
      case 'Creative':
        return (
          <div className="row top-space font-h">
            <div className="row">
              <div className="col-lg-6">
                <div className="details-work">
                  <h3 className='details-text'>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={six} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1. Collaborating with TCS</h4>
                  <p className='similiar-sub'>We partnered up with Tata Consultancy Services (TCS) for the design and copy for their TCS Sustainathon 2024.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={one} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2. Partnering with Kairali TMT</h4>
                  <p className='similiar-sub'>See how we partnered up with South India’s most popular steel company, Kairali TMT for an ad. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={five} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>3.  Boosting brand awareness for mr.alfred</h4>
                  <p className='similiar-sub'>We helped boost brand visibility and ROI for a vacation rental management software solution, mr.alfred.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={two} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4.  Driving results with Med7 Online.  </h4>
                  <p className='similiar-sub'>See how our creative team partnered with Med7 Online, an online pharmacy delivery in the UAE , to increase their brand visibility.</p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
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
            </div> */}


          </div>
        );
      case 'Performance Marketing':
        return (
          <div className="row top-space font-h">
            <div className="row">
              <div className="col-lg-6">
                <div className="details-work">
                  <h3 className='details-text'>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mfive} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1.  Skyrocketing sales with Walkaroo!</h4>
                  <p className='similiar-sub'>We helped Walkaroo, one of India’s popular footwear brands, scale their revenue to ₹10M+ in just 6 months!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mone} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2.  Scaling revenue to ₹ 2M+ !</h4>
                  <p className='similiar-sub'>We teamed with Skin Bae, a leading skincare brand offering Korean skincare, to scale their revenue and increase ROAS by 4 times!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mtwo} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>3.  Increasing ROAS for care n cure.</h4>
                  <p className='similiar-sub'>Explore how we helped Qatar-based online pharmacy, Care n Cure increase their ROAS. </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mthree} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mfour} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={msix} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4. Achieving new milestones with Sika Car Services!</h4>
                  <p className='similiar-sub'>We teamed up with Qatar based Sika Car Services, a car service company to scale their revenue and increase their online presence!</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Web development & UI/UX':
        return (
          <div className="row top-space font-h">
            <div className="row">
              <div className="col-lg-6">
                <div className="details-work">
                  <h3 className='details-text'>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={popees} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1. Revamping Popees</h4>
                  <p className='similiar-sub'>We partnered with one of Kerala’s best known brands, Popees to boost their online presence and brand visibility</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={truth} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2. Vamping up Truthcare Pharmacy.</h4>
                  <p className='similiar-sub'>Our web development and UI/UX services helped give Truthcare Pharmacy a new and improved online presence.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={organic} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>3.  Choosing healthy and organic with Organic Habits</h4>
                  <p className='similiar-sub'>We helped organic and health-oriented company, Organic Habits to establish their online presence. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={wild} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4. Serving the goodness of nuts with Wild Tree.</h4>
                  <p className='similiar-sub'>We vamped up the online presence of Wild Tree, a UAE-based food company dealing in nuts and snacks.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={lady} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>5. Baking with Lady Loafella!</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={disha} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>6. Styling an online presence for Disha Creationz!</h4>
                  <p className='similiar-sub'>We collaborated with Disha Creationz, a clothing brand to increase their brand visibility and engagement.</p>
                </div>
              </div>
            </div>




          </div>
        );
      case 'Digital PR':
        return (
          <div className="row top-space font-h">
            <div className="row">
              <div className="col-lg-6">
                <div className="details-work">
                  <h3 className='details-text'>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dfour} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1. Onam with Aditya Birla Capital</h4>
                  <p className='similiar-sub'>We partnered up with Aditya Birla Capital to create an Onam campaign in collaboration with actress and influencer Devika Sanjay!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dfive} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2. 20+ Creators for Francis Alukkas</h4>
                  <p className='similiar-sub'>We partnered with one of South India’s most popular jewellery brands to increase their brand awareness. With 2.1+ M views and 5M+ engagements, we create campaigns that foster meaningful relationships.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dsix} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>3. Partnering with Swiggy Instamart</h4>
                  <p className='similiar-sub'>We teamed up with Swiggy Instamart, popular instant delivery choice, for an influencer campaign in Chennai and Coimbatore.</p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={done} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dtwo} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4. Creating the Buzz for MyG Kannur.</h4>
                  <p className='similiar-sub'>Our influencer campaign for the launch of MyG Kannur created all the buzz with 5M+ engagements online! </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dthree} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>5. Enjoying the festivities with Reliance!</h4>
                  <p className='similiar-sub'>We partnered with Reliance Trends and Smart Bazaar and made the festival time even more brighter! With 2M+ views and 5M+ engagements, we do it like no other.</p>
                </div>
              </div>
            </div>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='career-page font-h'>
      <div className="container-main">
        <div className="header-service-common">
          <h2 className='header-page-name-small'>works</h2>
          <h2 className='header-page-name-common'>Discover Our Full Suite of Creative and Digital Services</h2>
        </div>
        <div className="tabs-main">
          <h3 className={activeTab === 'Branding' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Branding')}>Branding</h3>
          <h3 className={activeTab === 'SEO' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('SEO')}>SEO</h3>
          <h3 className={activeTab === 'Social Media' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Social Media')}>Social Media</h3>
          <h3 className={activeTab === 'Production' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Production')}>Production</h3>
          <h3 className={activeTab === 'Creative' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Creative')}>Creative</h3>
          <h3 className={activeTab === 'Performance Marketing' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Performance Marketing')}>Performance Marketing</h3>
          <h3 className={activeTab === 'Web development & UI/UX' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Web development & UI/UX')}>Web development & UI/UX</h3>
          <h3 className={activeTab === 'Digital PR' ? 'tab-text-active' : 'tab-text'} onClick={() => setActiveTab('Digital PR')}>Digital PR</h3>
        </div>
        <div className="brand-details">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
export default Works;