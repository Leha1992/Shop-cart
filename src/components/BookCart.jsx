import React from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

const BookCard = (book) => {  
  const {title, author, image, price, addToCart,addCount} = book
  return (
    <Card>
    <Image src={image}/>
    <Card.Content>
    <Card.Header>{title}</Card.Header>
    <Card.Description>{author}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {price}
      </a>
    </Card.Content>
    <Button 
    onClick={addToCart.bind(this, book) }
    style={{backgroundColor: 'lightblue'}}
    > Добавить в корзину {addCount ? addCount: null}</Button>
  </Card>
  )
}
  
export default BookCard