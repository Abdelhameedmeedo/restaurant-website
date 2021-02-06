import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Sadikan from './elsadikan.jpg'
//import './sass/home.scss'
import './tryhome.css'
const HomePage = ()=>{
    return(
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="cont p1">
                            <p>متاح لدينا جميع انواع المـأكولات الشرقية السريعة واللذيذة،ومتاح لدينا طلب الوجبات إما داخل المطعم أو خارجه ،وبأسعار مناسبة </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="cont">
                            <img src={Sadikan} title="مطعم الصديقان"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="cont">
                            <span>الموقع : </span>
                            <p>تجنبا للتوهان للوصول الى موقع مطعم الصديقان عليك بمتابعة خط السير على خرائط جوجل </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="cont anchor">
                            <a href="https://www.google.com/maps/dir/26.568182,31.7081448/%D9%85%D8%B7%D8%B9%D9%85+%D8%A7%D9%84%D8%B5%D8%AF%D9%8A%D9%82%D8%A7%D9%86+%D8%A8%D8%B3%D9%88%D9%87%D8%A7%D8%AC%E2%80%AD%E2%80%AD/@26.565745,31.7115293,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x144f5f29f960d3a3:0x495e66d60d14114f!2m2!1d31.7104513!2d26.5633081">اضغط هنا لعرضها على الخريطة</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="cont">
                            <span>للطلب : </span>
                            <p>لطلب أي من الأصناف  <Link to="classification">اضغط هنا</Link></p>
                            <i class="fab fa-facebook-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage