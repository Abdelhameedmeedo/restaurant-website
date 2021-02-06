import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Catagories from './catagories';
import Navbar from './NavBar';
import HomePage from './home'
import Footer from './Footer'
class App extends Component{
    //function to appear pop-up form
  buying = ()=>{
      //ctreate pop-up parent div
    let popUp = document.createElement('div');
      //add class to pop-up parent
    popUp.className = 'pop-up';
      //append pop-up parentinto the body-page
    document.body.appendChild(popUp);
      //create pop-up container
    let popContaier = document.createElement('div');
      //add class to the pop-up container
    popContaier.className = 'container';
      //append pop-up container into the pop-up parent 
    popUp.appendChild(popContaier);
      //create lable-1 for the first input
    let label1 = document.createElement('label');
      //add text to the label-1
    label1.innerText = "الصنف";
      //append label-1 into pop-up container
    popContaier.appendChild(label1);
      //create input-1 
    let input1 = document.createElement('input');
      //decide the input type
    input1.type = 'text';
      //add placeholder for user
    input1.placeholder = "ادخل الاصناف المطلوبة";
      //append input-1 into pop container
    popContaier.appendChild(input1);
      //create label-2 
    let label2 = document.createElement('label');
      //add text label-2
    label2.innerText = "العدد";
      //append label-2 into pop container
    popContaier.appendChild(label2);
      //create input-2
    let input2 = document.createElement('input');
      //decide inpute type
    input2.type = "text";
      //add placeholder for user
    input2.placeholder = "اكتب عدد الاصناف المطلوبة بالترتيب";
      //append input-2 into pop container
    popContaier.appendChild(input2);
      //create address label
    let label3 = document.createElement('label');
      //add label-3 taxt
    label3.innerText = "العنوان";
      //append label-3 into pop container
    popContaier.appendChild(label3);
      //create address input
    let addressPopUP = document.createElement('input');
      //decide input address type
    addressPopUP.type = "text";
      //add placeholder for user
    addressPopUP.placeholder = "اكتب عنوان المنزل مثلا";
      //append address input into pop container
    popContaier.appendChild(addressPopUP);
      //create label input number
    let label4 = document.createElement('label');
      // add text to label number
    label4.innerText = "رقم الهاتف";
      // append label-4 into pp container
    popContaier.appendChild(label4);
      //create input number
    let inputNumber = document.createElement('input');
      //decide input-number type
    inputNumber.type = "number";
      //add placeholder for user
    inputNumber.placeholder = "ادخل رقم الهاتف";
      //append input-number into pop container
    popContaier.appendChild(inputNumber);
      /////////  create close button ////////////////////
      //create span button
    let closeBtn = document.createElement('span');
      //add textnode   to btn
    let btnText = document.createTextNode("x");
      //add class to btn
    closeBtn.className = "btn-close";
      //append btn-text into closeBtn
    closeBtn.appendChild(btnText);
      //append closebtn into pop container
    popContaier.appendChild(closeBtn);
      //call the remove-pop-up function to close the pop-up form
    this.removePopUp();
      ///////////////// buttons (submit / cancle) ////////////////////////// 
      //create delete bbutton  
    let btnDelete = document.createElement('button');
      //add text to delete button
    btnDelete.innerText = "إلغاء";
      //add class to delete button
    btnDelete.className = "btn-del";
      //append delete button into pop container
    popContaier.appendChild(btnDelete);
      //create submit btuuon
    let btnSubmit = document.createElement('button');
      //add text to submit button
    btnSubmit.innerText = "إرسال";
      //add class to submit button
    btnSubmit.className = "btn-sub";
      //append submit button into pop container
    popContaier.appendChild(btnSubmit);
  }
    //function to close the pop-up form
  removePopUp = ()=>{
    document.addEventListener('click',(e)=>{
      if(e.target.className == "btn-close"){
          //delete the parent of node
        e.target.parentNode.remove();
          //delete the pop up 
        document.querySelector('.pop-up').remove();
      }
    })
  }

  //////////////////// complaints form (الشكاوى)////////////////////////////////
  complaints = ()=>{
      //create pop-up overlay cmoplaint
    let comOverlay = document.createElement('div');
      //add class to popup
    comOverlay.className = "com-overlay";
      //append overlay into the page(body)
    document.body.appendChild(comOverlay);
      //create overlay container
    let overlayContainer = document.createElement('div');
      //add class to overlay container
    overlayContainer.className = "container";
      //append overlay container into com-overlay
    comOverlay.appendChild(overlayContainer);
      //create header for complaint form
    let header = document.createElement('h1');
      //add text to header
    header.innerText = "الشكاوى";
      //append header into overlay container
    overlayContainer.appendChild(header);
      //create label for first input
    let firstLabel = document.createElement('label');
      //add text to label
    firstLabel.innerText = "خاص بالصنف";
      //append label into overlay container
    overlayContainer.appendChild(firstLabel);
      //create first input
    let firstInput = document.createElement('input');
      //decide input type
    firstInput.type = "text";
      //add placeholder for user
    firstInput.placeholder = "اي شئ خاص بالصنف او الطلب...";
      //append input into overlay container
    overlayContainer.appendChild(firstInput);
      //create second label
    let secondLabel = document.createElement('label');
      //add text to label
    secondLabel.innerText = "خاص بالموظف";
      //append second label into overlay container
    overlayContainer.appendChild(secondLabel);
      //create second input
    let secondInput = document.createElement('input');
      //decide type of input
    secondInput.type = "text";
      //add placeholder for user
    secondInput.placeholder = "تعامل الموظف او التأخير مثلا...";
      //append second input into overlay contianer
    overlayContainer.appendChild(secondInput);
    ///////////////// create buttons (submit / cancel) ////////////////
      //create submit button
    let subBtn = document.createElement('button');
      //add class to sub-btn
    subBtn.className = "com-sub";
      //add text to sub-btn
    subBtn.innerText = "إرسال";
      //append sub-btn into overlay container
    overlayContainer.appendChild(subBtn);
      //create delete button
    let delBtn = document.createElement('button');
      //add class to del-btn
    delBtn.className = "com-del";
      //add text to del-btn
    delBtn.innerText = "إلغاء";
      //append del-btn into overlay container
    overlayContainer.appendChild(delBtn);
    ///////////// create close button //////////////
      //create close button
    let complaintClose = document.createElement('span');
      //add text to span
    complaintClose.innerText = "x";
      //add class to span
    complaintClose.className = "com-close";
      //append span into overlay container
    overlayContainer.appendChild(complaintClose);
      //call removeroverLayComplaint function
    this.removeroverLayComplaint();
  }
  /////// remove overlay complaint function /////////////
  removeroverLayComplaint = ()=>{
    document.addEventListener('click',(e)=>{
      if(e.target.className == "com-close"){
        e.target.parentNode.remove();
        document.querySelector('.com-overlay').remove();
      }
    })
  }
  //////////// Rating form //////////////////
  ratingForm = ()=>{
      //create rating overlay
    let ratingOverlay = document.createElement('div');
      //add class yo rating overlay
    ratingOverlay.className = "rating-overlay";
      //append rating overkay into page
    document.body.appendChild(ratingOverlay);
      //create rating container
    let ratingContainer = document.createElement('div');
      //add class to rating container
    ratingContainer.className = "container";
      //append rating container into rating overlay
    ratingOverlay.appendChild(ratingContainer);
      //craeting rating hearder
    let ratingHeader = document.createElement('h2');
      //add text to rating hreader
    ratingHeader.innerText = "تقييمك لنا";
      //apppend rating header into rating overlay
    ratingContainer.appendChild(ratingHeader);
      //create rating name
    let rating1 = document.createElement('h3');
      //add text to rating header
    rating1.innerText = "ضعيف";
      //append rating into rating overlay
    ratingContainer.appendChild(rating1);
      //create rating name
    let rating2 = document.createElement('h3');
      //add text to rating header
    rating2.innerText = "جيد";
      //append rating into rating overlay
    ratingContainer.appendChild(rating2);
      //create rating name
    let rating3 = document.createElement('h3');
      //add text to rating header
    rating3.innerText = "ممتاز";
      //append rating into rating overlay
    ratingContainer.appendChild(rating3);
      //create input header 1
    let inputHeader1 = document.createElement('h5');
      //add text to input header 1
    inputHeader1.innerText = "تعامل الموظفين : ";
      //append input header into rating container
    ratingContainer.appendChild(inputHeader1);
      //create input (rating -radio)
    let inputRating1 = document.createElement('input');
      //decide input type
    inputRating1.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating1);
      //create input 2(rating -radio)
    let inputRating2 = document.createElement('input');
      //decide input type
    inputRating2.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating2);
      //create input 3(rating -radio)
    let inputRating3 = document.createElement('input');
      //decide input type
    inputRating3.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating3);
      //create input header 2
    let inputHeader2 = document.createElement('h5');
      //add text to input header 2
    inputHeader2.innerText = "اخطاء الطلبية       : ";
      //append input header into rating container
    ratingContainer.appendChild(inputHeader2);
      //create input 4(rating -radio)
    let inputRating4 = document.createElement('input');
      //decide input type
    inputRating4.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating4);
      //create input 5(rating -radio)
    let inputRating5 = document.createElement('input');
      //decide input type
    inputRating5.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating5);
      //create input 6(rating -radio)
    let inputRating6 = document.createElement('input');
      //decide input type
    inputRating6.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating6);
      //create input header 3
    let inputHeader3 = document.createElement('h5');
      //add text to input header 3
    inputHeader3.innerText = "مدى اعجابك بالخدمة : ";
      //append input header into rating container
    ratingContainer.appendChild(inputHeader3);
      //create input 7(rating -radio)
    let inputRating7 = document.createElement('input');
      //decide input type
    inputRating7.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating7);
      //create input 8(rating -radio)
    let inputRating8 = document.createElement('input');
      //decide input type
    inputRating8.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating8);
      //create input 9(rating -radio)
    let inputRating9 = document.createElement('input');
      //decide input type
    inputRating9.type = "radio";
      //append input rating into rating container
    ratingContainer.appendChild(inputRating9);
    ///////// create close button for rating form ////////
      //create rating button
    let ratingButton = document.createElement('span');
      //add text to rating button
    ratingButton.innerText = "x";
      //add class to rating button
    ratingButton.className = "rating-btn";
      //append rating button into rating container
    ratingContainer.appendChild(ratingButton);
      //call removeRatingForm
    this.removeRatingForm();
  }
  /////////// remove rating form function //////////
  removeRatingForm = ()=>{
    document.addEventListener('click',(e)=>{
      if(e.target.className == "rating-btn"){
          //remove node 
        e.target.parentNode.remove();
          //remove rating-overlay form
        document.querySelector('.rating-overlay').remove();
      }
    })
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Navbar complaintForm = {this.complaints} ratingForm = {this.ratingForm}/>
            <HomePage/>
            <Catagories buying = {this.buying}/>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );  
  }
  
}

export default App;
