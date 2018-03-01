import React from 'react';
import './BusinessPopUp.css';

// TODO need to render from BusinessList

export default class BusinessPopUp extends React.Component {

  renderReviewList() {
    return this.props.reviews.map(review => {
      console.log("review", review);
      return <li className="review-list"
                 key={review.id}>

                 <div className="user-container">
                   <div className="user-image-container">
                     <img className="user-photo" src={review.userImageSrc} alt=''/>
                   </div>
                   <h3>{review.name}</h3>
                 </div>

                 <div className="review-container">
                   <h3>I gave <span>{this.props.business.name}</span>, {review.rating} stars!</h3>
                   <p>{review.text}</p>
                   <p className="check-mine">Check my review <a href={review.url}>here</a></p>
                 </div>

             </li>
    });
  }

  resetPopUp() {
    console.log("close pop up and turn popup state to false ")
    this.props.closePopUp(this.props.popUpStatus)
  }


  render() {
    console.log("rendering BusinessPopUp", this.props.reviews, this.props.business);
    if(!this.props.reviews || !this.props.business) {
      return null;
    }

    return(
      <div className="PopUp">
        <button id="btn-close" onClick={() => this.resetPopUp()}>X</button>
        <div className="PopUp-inner">
          <div className="image-container">
            <img src={this.props.business.imageSrc} alt=''/>
          </div>
          <h2>{this.props.business.name}</h2>

          <div className="Popup-Business-information">
            <div className="Popupup-Business-reviews">
              <h3> {this.props.business.category} <span> | </span>
                    {this.props.business.rating} stars <span> | </span>
                    {this.props.business.reviewCount} reviews
              </h3>
            </div>
            <div className="Popup-Business-address">
              <p>{this.props.business.address} {this.props.business.city} {this.props.business.state} {this.props.business.zipCode}</p>
            </div>
          </div>
          <ul>
            {this.renderReviewList()}
          </ul>
        </div>
      </div>
    )
  }
}
