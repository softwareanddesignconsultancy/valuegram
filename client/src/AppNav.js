import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from './redux';

import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, UncontrolledDropdown} from 'reactstrap';

import grailsLogo from './images/lozol.png';

const NavDropdownItem = props => {
    return <DropdownItem tag='li'><NavLink>{props.children}</NavLink></DropdownItem>
}

const renderCategoriesRow = (category) =>{
    return(
        <DropdownItem tag='li'><NavLink href={"/category/"+category.slug}>{category.name}</NavLink></DropdownItem>
    );

}

const AppNav = ({collapse, toggle}) => {
    const dispatch = useDispatch();
    const categories =  useSelector((state) => state.category);
   

    useEffect(() => {
        dispatch(fetchCategory());
      }, []);





    return (
        <Navbar style={{backgroundColor: '#000', borderRadius: 0}} dark expand='lg' className='navbar-static-top'>

            <NavbarBrand href="/">
                <img src={grailsLogo} width="100" alt="Grails"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>

            <Collapse isOpen={collapse} navbar>
                <Nav className="ml-auto nav" navbar>

                <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret nav>
                            Category
                        </DropdownToggle>
                        <DropdownMenu right tag='ul'>{categories.category.map(renderCategoriesRow)}</DropdownMenu>
                    </UncontrolledDropdown>
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret nav>
                            Pricing
                        </DropdownToggle>
                        <DropdownMenu right tag='ul'>
                            <NavDropdownItem>Hello</NavDropdownItem>
                            <NavDropdownItem>Domains</NavDropdownItem>
                            <NavDropdownItem>Services</NavDropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                </Nav>
            </Collapse>
        </Navbar>
    );

};

export default AppNav;
