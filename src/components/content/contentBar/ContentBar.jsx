import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setType } from '../../../Redux/reducers/type-reducer';


class ContentBar extends React.Component {

  state = {
    options: [
      {
        name: 'Выберите...',
        value: null,
      },
      {
        name: 'Избранные',
        value: 'Избранные',
      },
      {
        name: 'Новые',
        value: 'Новые',
      },
      {
        name: 'Все',
        value: 'Все',
      },
    ],
    value: '?',
    type: null
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    debugger
    switch (event.target.value) {
      case "Избранные":
        this.props.setType('Избранные');
        break;
      case "Новые":
        this.props.setType('Новые');
        break;
      case "Все":
        this.props.setType('Все');
        break;
      default:
        return undefined;
     }
  };

  render() {
    const { options, value } = this.state;
    return (
      <div className="content_bar">
        <div className="content_bar__title">
          <h2>Заведения</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
        </div>
        <div className="content_bar__sorting">
          Сортировка:
          <select onChange={this.handleChange} value={value}>
            {options.map(item => {
              switch (item.name) {
                case 'Избранные':
                  return (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  );
                case 'Новые':
                  return (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  );
                case 'Все':
                  return (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  );
                default:
                  return (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  );
              }
            }
            )}
          </select>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    type: state.type.type
  }
}

export default connect(mapStateToProps, { setType })(ContentBar);