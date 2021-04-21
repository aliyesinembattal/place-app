import { Card, Col, Row } from 'antd';
import React from 'react';

const Index = ({ placeName }) => {
  return (
    <div>
      <Card style={{ width: 300 }}>
        <b>{placeName.toponymName}</b>
        <Row gutter={120} className="card-item">
          <Col sm={12}>Population</Col>
          <Col sm={12}>{placeName.population}</Col>
        </Row>
        <Row gutter={120} className="card-item">
          <Col sm={12}>Temperature</Col>
          <Col sm={12}>{placeName.temperature} °C</Col>
        </Row>
        <Row gutter={120} className="card-item">
          <Col sm={12}>Lat</Col>
          <Col sm={12}>{placeName.lat ? placeName.lat.toString().slice(0, 8) : 0}</Col>
        </Row>
        <Row gutter={120} className="card-item">
          <Col sm={12}>Lng</Col>
          <Col sm={12}>{placeName.lat ? placeName.lng.toString().slice(0, 8) : 0}</Col>
        </Row>
      </Card>
    </div>
  );
};

export default Index;
