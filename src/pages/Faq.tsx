import React, {FC, useState} from 'react';
import Category from "../components/Category/Category";
import QAToggleItem from "../components/QAToggleItem/QAToggleItem";


export const Faq: FC = () => {
 return <div className="">
    <h1 className="text-5xl font-bold text-center"
        style={{margin: "18px"}}>Frequently Asked Questions</h1>
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
        <h2 className="text-2xl font-bold text-gray-800 py-2.5">Note</h2>
        <p>
        Les commandes sont traitées dans l'ordre de leur réception. Les produits sont limités et la disponibilité est indiquée sur le site. Nous ferons de notre mieux pour maintenir la disponibilité des produits aussi à jour que possible, en ajoutant de nouveaux produits au fur et à mesure de leur réception dans la boutique. Parfois, notre inventaire est épuisé et nous vous contacterons si quelque chose n'est pas disponible dans votre commande. Revenez régulièrement pour les mises à jour des produits !
        <hr className="my-8"/>
        <p className="font-medium">Pour toutes questions, veuillez contacter hello@plantshop.com</p>
        </p>
     </div>

    </div>;
};

