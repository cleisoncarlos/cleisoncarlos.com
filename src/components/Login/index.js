import React from 'react'
import Form from '../Form'
import Lottie from "lottie-react";
import animateMail from "../../lottie/flying-plane.json";

import left from "../../lottie/orange-circuit-left.json";
import rigth from "../../lottie/orange-circuit-right.json";

export default function Login() {
  return (


    <div className="mx-10 flex justify-center">
        <div >

          <Lottie animationData={animateMail} className='lg:w-1/2 md:w-2/3' />

          <h1 className="text-3xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Form />

        </div>
      </div>
      )
}
