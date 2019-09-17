import React from 'react';
import yandex_taxi from '../../../../../assets/img/Logo_yandex_taxi.png';
import lavash_logo from '../../../../../assets/img/lavash_logo.png';
import mcdonalds_logo from '../../../../../assets/img/mcdonalds_logo.png';
import Ikealogo from '../../../../../assets/img/Ikea-logo.png';
import logotipdns from '../../../../../assets/img/logotip-dns.png';
import fitservicelogo from '../../../../../assets/img/fitservice-logo.png';
import ЯндексЕда from '../../../../../assets/img/Иконка_Яндекс.Еды.png';
import sto_logo from '../../../../../assets/img/sto_logo.jpg';
import toyshop_logo from '../../../../../assets/img/toyshop_logo.jpg'
import KFC from '../../../../../assets/img/KFC-logo.png';
import deliveryclub_logo from '../../../../../assets/img/deliveryclub_logo.png';
import ladalogo from '../../../../../assets/img/lada-logo.png';
import s from './ShopItem.module.scss';
const ShopItem = (props) => {
  let ava = null;

  switch (props.logo){
    case 'KFC':
      ava = KFC;
      break
    case 'TAXI':
      ava = yandex_taxi;
      break
    case 'LAVASH':
      ava = lavash_logo;
      break
    case 'MAC':
      ava = mcdonalds_logo;
      break
    case 'IKEA':
      ava = Ikealogo;
      break
    case 'DNS':
      ava = logotipdns;
      break
    case 'FIT':
      ava = fitservicelogo;
      break
    case 'YANDFOOD':
      ava = ЯндексЕда;
      break
    case 'STO':
      ava = sto_logo;
      break
    case 'TOY':
      ava = toyshop_logo;
      break
    case 'DELIVERY':
      ava = deliveryclub_logo;
      break
    case 'LADA':
      ava = ladalogo;
      break
  }

  let like = () => {
    props.like(props.id)
  }

  let dislike = () => {
    props.dislike(props.id)
  }

  let prDef = (event) => {
    event.preventDefault();
  }
  
  return (
    <div className="col-xl-4">
      <a onClick={prDef} href="#" className="shop_item">
        <div className="shop_item__title">
          <h3> {props.name} </h3>
          <div className="shop_item__title___right">
            {props.favorite 
            ? 
            <button onClick={dislike} className={s.like + " " + s.like_active}>
            <i className="fas fa-heart"></i>
            </button> 
            : 
            <button onClick={like} className={s.like}>
              <i className="fas fa-heart"></i>
            </button>
          }
          </div>
        </div>
        <div className="shop_item__center">
          <div className="shop_item__center___avatar">
            <div className="shop_avatar">
              <img src={ava} />
              <span> {props.Rating} </span>
            </div>
          </div>
          <div className="shop_item__center___text">
            <p> {props.description} </p>
          </div>
        </div>
        <div className="shop_item__bonus">
          <h3> {props.bonus} <small>%</small></h3>
          <span>Бонусов</span>
        </div>
      </a>
    </div>
  );
}

export default ShopItem;