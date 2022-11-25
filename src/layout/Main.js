import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/sharedSection/Footer';
import Header from '../components/Pages/sharedSection/Header';
import LeftSiteNav from '../components/Pages/sharedSection/LeftSiteNav';
import RightSiteNav from '../components/Pages/sharedSection/RightSiteNav';

const Main = () => {
    return (
        <div className="text-center">
            <Header></Header>
            <Container >
                    <Row>
                        <Col lg='2' className='d-lg-block d-none'><LeftSiteNav></LeftSiteNav></Col>
                        <Col lg='7'><Outlet></Outlet></Col>
                        <Col lg='3'><RightSiteNav></RightSiteNav></Col>
                    </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;