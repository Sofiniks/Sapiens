import React, { useState } from 'react';
import {useMediaQuery} from 'react-responsive';
import styles from './MyHomepage.module.scss'
import {textCut} from '../../fixtures/helpers'
import {Link} from 'react-router-dom';
import CarLogo from '../../assets/img/car-icon.png'
import Info from '../../assets/img/info.png'



const MyHomepage = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const carInfo = [
      {title: 'Policy number:', info: 'AOL123456789'},
      {title: 'Starts:', info: '22/12/2020 00:00'},
      {title: 'Ends:', info: '21/12/2020 23:59'}
    ]

    const [formInputs,setFormInputs] = useState([
      {
        label: 'Change car details and usage',
        desc: 'Insure a new car or change details e.g. business use, mileage or registration number.',
        value: 'Change car details',
        selected: false,
        id: 1
      },
      {
        label: 'Change driver',
        desc: 'Change driver details e. g. occupation, marital status or convictions.',
        value: 'Change driver',
        selected: false,
        id: 2
      },
      {
        label: 'Add a driver',
        desc: "Add a new driver (we can't insure drivers under 21 at the start of your policy).",
        value: 'Add driver',
        selected: false,
        id: 3
      },
      {
        label: 'Change or add cover',
        desc: 'You can change your voluntary excess and add/edit your additional cover options.',
        value: 'Change cover',
        selected: false,
        id: 4
      },
      {
        label: 'Change address',
        desc: 'Change your address remember a change of address may affect your premium.',
        value: 'Change address',
        selected: false,
        id: 5
      },
      {
        label: 'Change payment details',
        desc: 'Change direct debit, credit/debit card, PayPal or Amazon Pay details that we store for you.',
        value: 'Change payment',
        selected: false,
        id: 6
      }
    ])

    const infoList = carInfo.map((item, index) => {
      return (
        <li key={index}>
          <h5>{item.title}</h5>
          <p>{item.info}</p>
        </li>
      )
    })

    const inputList = formInputs.map((item) => {
      return (
        <div className={styles.homepage_form_input} key={item.id} style={item.selected ? {border: '0.5px solid green'} : undefined}>
          <label htmlFor={item.label}>{item.label}</label>
          <p className={styles.desc}>{item.desc}</p>
          <div className={styles.fake_input}>
            <input type="radio" name="changes" value={item.value} id={item.label} onChange={(e) => handleChecked(e, item.id)}/>
           <span className={styles.checkmark}></span>
          <p>{item.selected ? 'Selected' : 'Unselected'}</p> 
          </div>
          
        </div>
      )
    })

    const handleChecked = (e, id) => {
      if(e.target.checked === true) {
        const newFormInputs = [...formInputs].map(item => {
        if(item.id === id) {
          return { 
          label: item.label,
          desc: item.desc,
          value: item.value,
          selected: true,
          id: item.id
        }
        }
        return { 
          label: item.label,
          desc: item.desc,
          value: item.value,
          selected: false,
          id: item.id
        }
      })
      setFormInputs(newFormInputs)
      }
    }

    return (
        <div className={styles.homepage}>
         <div className={styles.homepage_container}>
            <h1>Change your car insurance policy</h1>
            <div className={styles.homepage_main}>
              <div className={styles.homepage_car}>
                <div className={styles.homepage_car_heading}>
                  <div className={styles.homepage_car_heading_img}>
                    <img src={CarLogo} alt="car"/>
                  </div>
                  <div className={styles.homepage_car_heading_title}>
                    <h3>DG20 TOC</h3>
                    <p>{!isMobile ? '2019 Volkswagen, Tiguan SE Nav 4Motion TSI 150 DSG Line...' : textCut('2019 Volkswagen, Tiguan SE Nav 4Motion TSI 150 DSG Line...', 28)}</p>
                  </div>
                </div>
                <div className={styles.homepage_car_info}>
                    <ul>{infoList}</ul>
                </div>
              </div>
              <h2>Making changes to your policy</h2>
            <div className={styles.homepage_info}>
              <div className={styles.homepage_info_img}>
                <img src={Info} alt="info"/>
              </div>
              <div className={styles.homepage_info_text}>
                <h3>Remember, we don't charge admin fees to make changes to your policy</h3>
                <p>Any changes you make will be processed automatically. This may affect
                  the price of your cover or whether we can still insure you. Please see 
                  our <Link className="link" to="/">Important Information Document</Link> for more details.
                </p>
              </div>
            </div>

            <div className={styles.homepage_form_item}>
              <form className={styles.homepage_form}>
                <h4 className={styles.homepage_form_heading}>What change would you like to make?</h4>
                <div className={styles.homepage_form_input_container}>
                  {inputList}
                </div>
                <h4>When would you like this change to start? (DD/MM/YYYY)</h4>
                <p className={styles.homepage_date}>Changes starting today will be effective immediately. Future changes will be effective from 00:00 on the date you select.</p>
                <div className={styles.homepage_form_input_date}>
                  <input type="date"/>
                
                </div>
                <div className={styles.homepage_form_button}>
                  <button type="submit" >Continue</button>
                </div>
              </form>
            </div>

            </div>
         </div>
        </div>
    )
}

export default MyHomepage
