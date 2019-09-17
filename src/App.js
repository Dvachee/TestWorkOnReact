import React from 'react';
import './App.scss';
import ava_30x30x2 from './assets/img/ava_30x30x2.png'
import logo from './assets/img/logo.svg';
import side_car from './assets/img/side_car.svg'
import Content from './components/content/content';
import SideBar from './components/slideBar/slideBar';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/reducers/app-reducer';
import InitialPreloader from './assets/common/InitialPreloader/initialPreloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <InitialPreloader /> 
    }

    return (
      <div className="wrapper">
          <div className="toolbar">
              <div className="toolbar_line">
                  <div className="container">
                      <div className="toolbar_line__support">
                          <span>Служба техподдержки:</span> 8 800 500-40-20
                      </div>
                      <div className="toolbar_line__right">
                          <div className="line_right__valute">
                              <div className="dropdown">
                                  <button className="line_right__valute___dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      
                                      <div className="valute">
                                          <span></span> 1,500 <small>₽</small>
                                      </div>
                                      <span>Вывести</span>
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <a className="dropdown-item" href="#">14,500 <small>₽</small></a>
                                      <a className="dropdown-item" href="#">700 <small>$</small></a>
                                      <a className="dropdown-item" href="#">450 <small>€</small></a>
                                      <div className="dropdown-divider"></div>
                                      <a className="dropdown-item" href="#">550 <small>LB</small></a>
                                  </div>
                              </div>
                          </div>
  
                          <div className="line_right__profile">
                              <div className="dropdown">
                                  <button className="dropdown-toggle line_right__profile___dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <img className="profile_avatar" src={ava_30x30x2} />
                                      <div className="profile_name">Артем</div>
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <a className="dropdown-item" href="#">Профиль</a>
                                      <a className="dropdown-item" href="#">Настройки</a>
                                      <a className="dropdown-item" href="#">Выход</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="toolbar_menu">
                  <div className="container">
                      <a href="index.html" className="toolbar_menu__logo"><img src={logo} /></a>
                      <div className="toolbar_menu__right">
                          <a href="index.html" className="act">Заведения</a>
                          <a href="cashback.html">Кэшбэк</a>
                      </div>
  
                      <div className="toolbar_menu__dropdown">
                          <div className="dropdown">
                              <button className="toolbar_menu__dropdown___button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="fas fa-bars"></i>
                                  </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <a className="dropdown-item act" href="index.html">Заведения</a>
                                  <a className="dropdown-item" href="cashback.html">Кэшбэк</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="inner">
              <div className="container">
                  <div className="side">
                      <div className="side_card">
                          <div className="side_card__title">
                              Информация о карте
                          </div>
                          <div className="side_card__name">
                              Артем Райм
                          </div>
                          <div className="side_card__number">
                              <img src={side_car}/> 000 000 432
                          </div>
                      </div>
  
                      <SideBar />
                  </div>
              <Content />
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const mapDispatchToProps = {
  initializeApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
