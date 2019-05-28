import React, { Component } from 'react';
import { CardFooter, Col, Row, Progress } from 'reactstrap';
import Widget04 from '../Widgets/Widget04';

import roomsData from './RoomsData'

function RoomRow(props) {
  const room = props.room
  const roomLink = `/rooms/${room.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <Col sm="6" md="2">
      <Widget04 icon="icon-people" color={getBadge(room.status)} header={room.name} value="50" invert>{room.registered}</Widget04>
    </Col>
  )
}

class Users extends Component {

  render() {

    const roomList = roomsData.filter((room) => room.id < 10)

    return (
      <div className="animated fadeIn">
        <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Uygun</div>
                    <strong>12 Oda (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Temizleniyor</div>
                    <strong>2 Oda (10%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Rezervasyon</div>
                    <strong>5 Oda (30%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Dolu</div>
                    <strong>4 Oda (20%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                </Row>
              </CardFooter>

         {//icon-lock  icon-like icon-phone icon-emotsmile
         } 
         <br></br>
        <Row>
          {roomList.map((room, index) =>
            <RoomRow key={index} room={room} />
          )}
        </Row>
      </div>
    )
  }
}

export default Users;
