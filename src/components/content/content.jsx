import React from 'react';
import ContentBar from './contentBar/ContentBar';
import ShopContainer from './shop/shopContainer/ShopContainer';
import bunner from '../../assets/img/bunner.png'

class Content extends React.Component {

    render() {
        return (
            <div className="content">
                    <div className="bunner">
                        <a href="#"><img src={bunner} /></a>
                    </div>

                    <ContentBar />
                    <ShopContainer />
                    
                </div>
        );
    }
}

export default Content;