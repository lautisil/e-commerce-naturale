import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <h1>NaturAle</h1>  {/* Brand */}
        <Menu>
          <MenuButton>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Ofertas Semanales</MenuItem>
            <MenuItem>Productos</MenuItem>
            <MenuItem>Proximos en venta</MenuItem>
            <MenuItem>Carrito</MenuItem>
            <MenuItem>Perfil</MenuItem>
          </MenuList>
        </Menu>
        <CartWidget /> {/* Carrito */}
    </div>
    
  )
}

export default NavBar