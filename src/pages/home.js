import React from "react";
import '../component/sofa.png';
import bg from '../component/sofa.png';
import Lampu from '../component/lampu.png' 
import { right } from "@popperjs/core";

export default class Home extends React.Component{
    render(){
        return(
            <div className="bg-gray-100 bg">    
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block text-gray-400 text-base subpixel-antialiased tracking-wider font-medium">Why Should ?</span>
                        <span className="block text-8xl">Mebel</span>
                        <span className="block text-gray-400 text-base subpixel-antialiased tracking-wide font-medium">had reliable 20 years, sold over 3 continents 48 countries, <br/>the interior design with high quality price lunge.</span>
                        <br/>
                        <hr className='border-t-4'/>
                    </h2>
                    <div className="flex flex-row-reverse ml-64">                  
                        <img src={bg} alt="sofa" className="box-border w-full" style={{marginRight : "-50px"}}/>
                    </div>
                </div>
            </div>
        )
    }
}