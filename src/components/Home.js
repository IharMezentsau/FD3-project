import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { NavLink } from 'react-router-dom';

import './Home.scss';

const content = [
    {
        title: 'Mobile',
        link: '/mobiles',
        description:
            'Mobile phones',
        button: 'Go to mobiles',
        image: './img/The-Slider-Phone-Is-Back-In-2019-But-With-A-Notch-This-Time.jpg',
    },
    {
        title: 'Notebook',
        link: '/notebooks',
        description:
            'Notebooks',
        button: 'Go to notebooks',
        image: './img/MSI-slider-s20.jpg',
    }
];

class Home extends React.PureComponent {

    render() {
        return (
            <Slider className="slider-wrapper" autoplay={2000} infinite={false}>
                {content.map((item, index) => (
                    <div key={index} className="slider-content"
                         style={{ background: `url('${item.image}') no-repeat center center` }}>
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <NavLink to={item.link} exact><button>{item.button}</button></NavLink>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Home;