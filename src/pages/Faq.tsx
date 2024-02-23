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
        question=" ⬇️ Notre service client est-il joignable par téléphone ?"
        answer="Notre service clients est uniquement joignable via le formulaire de contact et ne dispose pas de ligne téléphonique."
      />
    </div>
     
     
     <hr className="my-8"/>
     <div className="">
        <h2 className="text-2xl font-bold text-gray-800 py-2.5">À noter</h2>
        <p>
        Nous tenons à vous rappeler de faire preuve de prudence lors de vos interactions. Comme dans toute communauté en ligne, il est important de rester vigilant(e) et de signaler toute activité suspecte. Certaines personnes peuvent ne pas avoir des intentions honnêtes, et votre vigilance contribue à maintenir un environnement sûr pour tous les membres. N'hésitez pas à nous informer si vous rencontrez des comportements inappropriés ou des activités douteuses. Ensemble, nous pouvons garantir une expérience positive pour l'ensemble de la communauté.        <hr className="my-8"/>
        <p className="font-medium">Si vous avez des questions, veuillez nous contacter à l'adresse hello@plantshop.com.




</p>
        </p>
     </div>

    </div>;
};

