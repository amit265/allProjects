import React from 'react'
import InspirationalQuotes from './InspirationalQuotes'
import { quotes } from '../utils/constants';

const Inspiration = () => {
  return (
    <section className="sm:min-h-[60vh] py-8">
         <h2 className="text-4xl pt-8 font-semibold font-mono mb-4 text-center">
          Inspiring Quotes
        </h2>
            <div className="sm:w-10/12 mx-auto flex items-center justify-center ">
          <InspirationalQuotes quotes = {quotes}/>
        </div>
    </section>
  )
}

export default Inspiration
