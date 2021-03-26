import React, {useState, useRef} from 'react'
import {useMediaQuery} from 'react-responsive';
import MyHomepage from '../components/MyHomepage'
import styles from '../styles/pages/Home.module.scss'
import Arrow from '../assets/img/arrow.svg'

const Home = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const [translateValue, setTranslateValue] = useState(0);
    const fullSliderRef = useRef(0);
    const sliderElementRef = useRef(0);
    const sliderContainerRef = useRef(0);
    console.log(translateValue)

    const [menu, setMenu] = useState([
        {title: 'My homepage', active: true, id: 1},
        {title: 'My details', active: false, id: 2},
        {title: 'How to claim', active: false, id: 3}
    ])

    const handleMenu = id => {
        const newMenu = [...menu].map(item => {
            if(item.id === id) {
              return {title: item.title, active: true, id: item.id}  
            }else {
              return {title: item.title, active: false, id: item.id} 
            }
        })
        setMenu(newMenu)
        
    }

    const arrowPrevHandler = () => {
        setTranslateValue(translateValue - (sliderElementRef.current.clientWidth + 140));
    };

    const arrowNextHandler = () => {
        setTranslateValue(translateValue + (sliderElementRef.current.clientWidth + 140));
    };


    const menuList = menu.map((item, index) => {
        return (
            <li 
                key={item.id}
                style={item.active ? {borderBottom: '3px solid #0054a2', color: '#0054a2'} : undefined}  
                onClick={() => handleMenu(item.id)} 
                ref={sliderElementRef}
                >
                {item.title}
            </li>
        )
    })
    return (
        <div className={styles.home}>
            <div className={styles.home_menu}>
                <div className={styles.home_container} >
                {
                    isMobile ? <>
                    <span>{translateValue === 0 ? null : <img src={Arrow} alt="arrow" style={{transform: 'rotate(180deg)'}} onClick={arrowPrevHandler}/>}</span>
                        <div className={styles.home_list} ref={sliderContainerRef}>
                        <ul ref={fullSliderRef} style={{transform: `translateX(-${translateValue}px)`}}>
                            {menuList}
                        </ul>  
                        </div>
                    <span>{sliderElementRef.current && (translateValue + sliderElementRef.current.clientWidth) >= sliderContainerRef.current.clientWidth ? null : <img src={Arrow} alt="arrow" onClick={arrowNextHandler}/>}</span>
                    </>
                    :
                    <ul>
                        {menuList}
                    </ul> 
                }
                    
                </div>
            </div>
           <div className={styles.home_container}>
            {menu[0].active ? <MyHomepage/> :
            menu[1].active ? <div>My details</div> :
            menu[2].active ? <div>How to claim</div> :
            null
            }
           </div>
        </div>
    )
}

export default Home
