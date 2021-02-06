import React from 'react';
//import './sass/catagories.scss'
import './trycatag.css'
const Catagories = (props)=>{
    return(
        <div className="classifi">
            <div className="container">
                <caption>الاصناف</caption>
                <table>
                    <tr>
                        <th>النوع</th>
                        <th>السعر</th>
                        <th>اطلب</th>
                    </tr>
                    <tr>
                        <td>كبدة</td>
                        <td>6</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                    <tr>
                        <td>حواوشي</td>
                        <td>2.5</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                    <tr>
                        <td> كريب لحمة مفرومة</td>
                        <td>20</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                    <tr>
                        <td>كريب فراخ بانية</td>
                        <td>20</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                    <tr>
                        <td>كريب شاورما لحمة</td>
                        <td>20</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                    <tr>
                        <td>كريب شاورما فراخ</td>
                        <td>25</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                    <tr>
                        <td>طاجن كبدة</td>
                        <td>15</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                    <tr>
                        <td>طاجن فراخ</td>
                        <td>20</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                    <tr>
                        <td>برجر</td>
                        <td>20</td>
                        <td> <span onClick={()=>props.buying()}>اضغط هنا</span> </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Catagories