import React from 'react';

class SideBar extends React.Component {

  state = {

  }

  handleChecked = (e) => {
    console.log(e.target.name)
  }

  render() {
    return (
      <div className="slide_cat">
        <div className="slide_cat__title">
          Категории
                        </div>
        <div className="slide_cat__box">
          <label className="main_checkbox">
            <input type="checkbox" checked="checked" />
            <span className="checkmark"></span>
            Все
                            /</label>
          <label className="main_checkbox">
            <input onChange={this.handleChecked} type="checkbox" name='shop' />
            <span className="checkmark"></span>
            Магазины
                            </label>
          <label className="main_checkbox">
            <input onChange={this.handleChecked} type="checkbox" name='food' />
            <span className="checkmark"></span>
            Еда
                            </label>
          <label className="main_checkbox">
            <input onChange={this.handleChecked} type="checkbox" name='auto' />
            <span className="checkmark"></span>
            Авто
                            </label>
          <label className="main_checkbox">
            <input onChange={this.handleChecked} type="checkbox" name='services' />
            <span className="checkmark"></span>
            Сверауслуг
                            </label>
        </div>
      </div>
    );
  }
}

export default SideBar;