const apiKey = 'aL_p75zY6cU7nfg-uZrqgRqLz-LYjjQP2E3CAlPfnIJPmCw76MGZp2KwX7ct6-ZQXu_S9gzwnu64GqyhPnMbM_47zyUia0G1_1Y3jiItXMXRk6EZS6q0Xz3KYYiSWnYx';
const Yelp = {
  searchBusiness(term, location, sortBy){
    const businessURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=';

    return fetch(businessURL + term + '&location=' + location + '&sort_by=' + sortBy, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response =>  {
      return response.json()
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
      return [];
    })
  },

  searchReview(business_id){
    const reviewURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${business_id}/reviews`;

    return fetch(reviewURL, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if(jsonResponse.reviews) {
        return jsonResponse.reviews.map(review => ({
          id: review.id,
          userImageSrc: review.user.image_url,
          name: review.user.name,
          text: review.text,
          rating: review.rating,
          url: review.url
        }));
      }
      return [];
    })
  }
};
export default Yelp;
