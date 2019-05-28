import React, { Component, Text } from 'react';
import { CardFooter, Col, Row, Progress, Button } from 'reactstrap';
import Widget04 from '../Widgets/Widget04';

import roomsData from './RoomsData'

function RoomRow(props) {
  const room = props.room
  const roomLink = `/rooms/${room.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'primary ' :
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

  constructor(props) {
    super(props);
    this.state = {normalButton:'true',
                selectButton:'none'};
  }

  render() {

    const roomList = roomsData.filter((room) => room.id < 10) //gösterilecek veri adedi

    return (
      <div className="animated fadeIn">
        <CardFooter>
          <Row className="text-center">
            <Col sm={12} md className="mb-sm-2 mb-0">
              <Button size="lg" block outline color="success" style={{display:this.state.normalButton}}>Boş : 12</Button>
              <Button size="lg" className="btn-brand mr-1 mb-1" color="success" style={{display:this.state.selectButton}}>
                <i className="fa fa-thumbs-up"></i>
                <span style={{ fontSize: 15 }}>Boş : 12 </span>
              </Button>
            </Col>
            <Col sm={12} md className="mb-sm-2 mb-0">
              <Button size="lg" className="btn-brand mr-1 mb-1" color="warning" style={{display:this.state.visible}}>
                <i class="fa fa-hourglass-half"></i>
                <span style={{ fontSize: 15 }}>Temizleniyor : 4 </span></Button>
            </Col>
            <Col sm={12} md className="mb-sm-2 mb-0">
              <Button size="lg" className="btn-brand mr-1 mb-1" color="danger"><i class="fa fa-lock"></i>
                <span style={{ fontSize: 15 }}>Dolu : 6 </span></Button>
            </Col>
            <Col sm={12} md className="mb-sm-2 mb-0">
              <Button size="lg" className="btn-brand mr-1 mb-1" color="primary"><i class="fa fa-phone"></i>
                <span style={{ fontSize: 15 }}>Rezerve : 2  </span></Button>
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
