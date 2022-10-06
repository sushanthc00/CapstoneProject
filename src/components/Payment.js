import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



function Payment(){



    const onToken = (token)=>{

        console.log(token);

    }



    return(

        <div className="pay">

            <StripeCheckout

            token={onToken}

            name="Card Payment"

            currency="Inr"

            stripeKey="pk_test_51LpQqaSEphoRBgPcga4DrtiflRYLQUtTMp6SneWRv0raDk6gfRJ0QcrgMVOjWSblGC3ZdrLqUg1YJsJIzYIBG6bh00EVEHL9p3"

          />  

        </div>

    )



}



export default Payment;