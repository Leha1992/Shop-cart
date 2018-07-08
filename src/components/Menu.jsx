import React  from 'react'
import { Menu, List, Button, Image, Popup } from 'semantic-ui-react'

const CartList = ({title, image, id, removeFromCart}) => {
  return (
    <List selection verticalAlign='middle'>
    <List.Item key={id}>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color='red'>Удалить</Button>
      </List.Content>
      <Image avatar src={image}/>
      <List.Content>{title}</List.Content>
    </List.Item>
    </List>
  )
}

const TopMenu = ({totalPrice, count, items, removeFromCart}) => {
  return (
  <Menu style={{backgroundColor: 'lightblue'}} >
    <Menu.Item name='browse'>
      Магазин книг
    </Menu.Item>
    <Menu.Menu position='right'>
    <Menu.Item name='signup'>
      Итого &nbsp;<b>{totalPrice}</b>&nbsp; руб
    </Menu.Item>
    <Popup
      trigger={ <Menu.Item name='help'>Корзина &nbsp;<b>{count}</b>
    </Menu.Item>}
      content={items.map(book => <CartList 
        removeFromCart={removeFromCart}
        key={book.id} id={book.id} 
        title={book.title} 
        image={book.image}/>)}
      on='click'
      position='top right'
    />
    </Menu.Menu>
  </Menu>
  )
}

export default TopMenu;