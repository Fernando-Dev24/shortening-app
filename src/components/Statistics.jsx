import React from 'react';
/* Sources */
import BrandIcon from '../images/icon-brand-recognition.svg';
import DetailedRecords from '../images/icon-detailed-records.svg';
import FullyCustomized from '../images/icon-fully-customizable.svg';

export const Statistics = () => {
   return (
      <section className="statistics__container container">
         <h2>Advanced Statistics</h2>
         <p className="statistics__intro">Track how your links are perfoming across the web with our advanced statistics dashboard.</p>
         <section className="statistics__grid">
            <article className="statistic">
               <img
                  src={BrandIcon}
                  alt="Statistic Icon"
                  className="statistic__icon"
               />
               <h3>Brand Recognition</h3>
               <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
            </article>
            <article className="statistic">
               <img
                  src={DetailedRecords}
                  alt="Statistic Icon"
                  className="statistic__icon"
               />
               <h3>Detailed Records</h3>
               <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </article>
            <article className="statistic">
               <img
                  src={FullyCustomized}
                  alt="Statistic Icon"
                  className="statistic__icon"
               />
               <h3>Fully Customizable</h3>
               <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </article>
         </section>
      </section>
   );
};