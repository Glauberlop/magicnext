import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import {Card} from "./types";

interface CardsResponse {
  cards:  Card[]
}

const mapFn = (card: Card ) => {
  return <>
  <h1>{card.name}</h1>
  <img src={card.imageUrl}></img>
  </>

  }

const Cards : NextPage <{response: CardsResponse}> = (props) => {
  const {response} = props
  const {cards} = response

  console.log(cards)

  return <>
    {cards.map(mapFn)}
  </>



}

export const getStaticProps: GetStaticProps = async () =>{
  const data = await fetch('https://api.magicthegathering.io/v1/cards?page=200')
  const response = await data.json()


  return {
    props: {
      response,
    },
  };
}


export default Cards
