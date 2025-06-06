import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const CounterBox = ({ end, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(end), 100); // animate to end after mount
    return () => clearTimeout(timer);
  }, [end]);

  return (
    <div className="th-counterup counter-box style2">
      <div className="inner">
        <div className="content">
          <h3 className="counter">
            <Odometer value={count} format="(,ddd)" duration={2000} />
            <span className="counter-number">+</span>
          </h3>
          <p className="counter-box_text">{text}</p>
        </div>
      </div>
    </div>
  );
};

const CounterSection = () => (
  <div className="bg-theme"
       // style={{ backgroundImage: "url('assets/img/bg/counter_bg_2.jpg')" }}
  >
    <div className="container">
      <div className="counter-sec style2">
        <CounterBox end={250} text="Projects Completed" />
        <CounterBox end={30} text="Experienced Team Members" />
        <CounterBox end={350} text="Satisfied Customers" />
        <CounterBox end={25} text="Years of Excellence" />
      </div>
    </div>
  </div>
);

export default CounterSection;
