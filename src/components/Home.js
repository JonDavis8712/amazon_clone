import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img 
            className='home__image'
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" />

            <div className="home__row">
             <Product
             id = '123123094'
             title ="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
             price = {29.99}
             image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
             rating = {5}
             link={'https://www.amazon.com/The-Lean-Startup-Eric-Ries-audiobook/dp/B005MM7HY8/ref=sr_1_1?hvadid=580711971259&hvdev=c&hvlocphy=9025843&hvnetw=g&hvqmt=e&hvrand=8360155410361422630&hvtargid=kwd-26937775299&hydadcr=21875_13324229&keywords=the+lean+startup&qid=1697660345&sr=8-1'}
             />
             <Product 
             id = '12310948920384'
             title = 'VIZIO V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible, Includes Remote Control - V51x-J6'
             price = {199.99}
             image =  'https://m.media-amazon.com/images/I/51d5Rc6DNML._AC_SL1500_.jpg'
             link={'https://www.amazon.com/VIZIO-Bluetooth-Subwoofer-Assistant-Compatible/dp/B08CGVTVMN/ref=sr_1_3?hvadid=557351940636&hvdev=c&hvlocphy=9025843&hvnetw=g&hvqmt=b&hvrand=7884571032700824768&hvtargid=kwd-27394742370&hydadcr=17955_13446674&keywords=vizio%2Bsound%2Bbar%2B5.1&qid=1697659866&sr=8-3&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&th=1'}
             rating = {4}
             />
            </div>
            <div className="home__row">
             <Product 
             id = '123123024'
             title = 'SHW 55-Inch Electic Standing Desk, 55 x 28 inch, Maple'
             price = {199.97}
             image = 'https://m.media-amazon.com/images/I/71Y8O3ZBq9L._AC_SL1500_.jpg'
             link={'https://www.amazon.com/SHW-55-Inch-Electric-Adjustable-Computer/dp/B07Q3TGL7M?th=1'}
             rating = {5}
             />
             <Product
             id = '1231094892038434'
             title = 'ZOTAC Gaming GeForce RTX 4090 Trinity OC White Edition DLSS 3 24GB GDDR6X 384-bit 21 Gbps PCIE 4.0'
             price = {1729.99}
             image = 'https://m.media-amazon.com/images/I/81uXGFOG5OL._AC_SL1500_.jpg'
             link={'https://www.amazon.com/ZOTAC-Graphics-IceStorm-Advanced-ZT-D40900Q-10P/dp/B0CCSSRLWY'}
             rating = {5}
             />
             <Product
             id = '123109489202138434'
             title = 'Projector 4K with Android TV, WiFi 6 Bluetooth, JBL, Dolby Audio, Auto Focus & Keystone, Native 1080P 4K'
             price = {599.98}
             image = 'https://m.media-amazon.com/images/I/81Gn0xWR8NL._AC_SL1500_.jpg'
             link={'https://www.amazon.com/Projector-YABER-K2s-Bluetooth-Supported/dp/B0BW39Y3GC/ref=asc_df_B0BW39Y3GC/?tag=hyprod-20&linkCode=df0&hvadid=663361371787&hvpos=&hvnetw=g&hvrand=5808278253093922296&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9025843&hvtargid=pla-2190202980857&psc=1&gclid=Cj0KCQjwhL6pBhDjARIsAGx8D5_Ma1toaIE6mFAp8WXScJBeXyAAu-_EdKIm2WAtgNHTJSiZASBo7VYaAjpIEALw_wcB'}
             rating = {5}
             />
            </div>
            <div className="home__row">
             <Product
             id = '1231094892021238434'
             title = 'CyberPowerPC Gamer Xtreme VR Gaming PC, Intel Core i9-13900KF 3.0GHz, GeForce RTX 4070 Ti 12GB, 16GB DDR5, 1TB NVMe PCIe SSD, WiFi Ready & Windows 11 Home (GXiVR8080A34), White'
             price = {2099.99}
             image = 'https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg'
             link={'https://www.amazon.com/CyberpowerPC-i9-13900KF-GeForce-Windows-GXiVR8080A34/dp/B0BS27LFQB'}
             rating = {5}
             />
            </div>
        </div>
    </div>
  )
}

export default Home