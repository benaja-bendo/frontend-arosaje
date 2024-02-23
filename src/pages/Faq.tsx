import React, {FC, useState} from 'react';
import Category from "../components/Category/Category";
import QAToggleItem from "../components/QAToggleItem/QAToggleItem";


export const Faq: FC = () => {
 return <div className="">
    <h1 className="text-5xl font-bold text-center">Frequently Asked Questions</h1>
     <Category/>
     <hr className="my-8"/>
     <p className="text-3xl font-medium">Questions : </p>
     <div className="m-3">
       <QAToggleItem
        question=" ⬇️ Do we ship plants?"
        answer="Due to the risk of shipping plants in France's climate, we do not ship plants."
      />
    </div>
     
     
     <hr className="my-8"/>
     <div className="">
        <h2 className="text-2xl font-bold text-gray-800 py-2.5">Please Note</h2>
        <p>
        Orders are processed in the order they are received. Products are limited, and availability is listed on the site. 
        We will do our best to keep the product availability as up-to-date as possible, adding new products as they are received in the shop. 
        Sometimes our inventory is off and we will contact you should something not be available in your order. 
        Check back regularly for product updates!
        <hr className="my-8"/>
        <p className="font-medium">Pour toutes questions, veuillez contacter hello@plantshop.com</p>
        </p>
     </div>

    </div>;
};

