import React from 'react'
import { CardHeader } from '@material-ui/core';
import{Navbar ,Form ,FormLabel} from 'react-bootstrap'
export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">OUR STORE</Navbar.Brand>
                {/* <Form inline className="mr-auto">
                    <FormLabel column="sm"  >cart (0) </FormLabel>
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        </>
    )
}