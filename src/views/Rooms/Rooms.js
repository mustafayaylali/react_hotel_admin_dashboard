import React, { Component, Text } from 'react';
import { CardFooter, Col, Row, Progress, Button } from 'reactstrap';
import Widget04 from '../Widgets/Widget04';

import roomsData from './RoomsData'
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

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
      <Widget04 icon="icon-people" color={getBadge(room.status)} header={room.name} value="0" invert>{room.registered}</Widget04>
    </Col>
  )
}

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      statusName: 'All'
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick(status) {
    this.setState({
      statusName: status
    });
  }


  render() {
    var roomList;
    if (this.state.statusName == 'All') {
      roomList = roomsData.filter((room) => room.id < 10) //gösterilecek veri adedi
    } else {
      roomList = roomsData.filter((room) => room.id < 10 & room.status == this.state.statusName) //gösterilecek veri adedi
    }


    return (
      <div>
       
              <Button size="lg" style={{marginInlineStart:5}} className="btn-brand mr-1 mb-1" color="success" onClick={this._onButtonClick.bind(this, 'Active')}>
                <i className="fa fa-thumbs-up"></i>
                <span style={{ fontSize: 15 }}>Boş : 12 </span>
              </Button>
                      
              <Button size="lg" style={{marginInlineStart:15}} className="btn-brand mr-1 mb-1" color="warning" onClick={this._onButtonClick.bind(this, 'Pending')}>
                <i class="fa fa-hourglass-half"></i>
                <span style={{ fontSize: 15 }}>Temizleniyor : 4 </span></Button>
                      
              <Button size="lg" style={{marginInlineStart:15}} className="btn-brand mr-1 mb-1" color="danger" onClick={this._onButtonClick.bind(this, 'Banned')}>
                <i class="fa fa-lock"></i>
                <span style={{ fontSize: 15 }}>Dolu : 6 </span></Button>
            
            
              <Button size="lg" style={{marginInlineStart:15}} className="btn-brand mr-1 mb-1" color="primary" onClick={this._onButtonClick.bind(this, 'Inactive')}>
                <i class="fa fa-phone"></i>
                <span style={{ fontSize: 15 }}>Rezerve : 2  </span></Button>
          
           
              <Button size="lg" style={{marginInlineStart:15}} className="btn-brand mr-1 mb-1" color="secondary" onClick={this._onButtonClick.bind(this, 'All')}>
                <i class="fa fa-key"></i>
                <span style={{ fontSize: 15 }}>Hepsi : 16  </span></Button>

              {/*<h4>{this.state.date}  </h4 >*/}
                   
              <Progress multi style={{marginTop:10}}>
                <Progress bar color="danger" value="15"></Progress>
                <Progress bar color="primary" value="30"></Progress>
                <Progress bar color="warning" value="25"></Progress>
                <Progress bar color="success" value="30"></Progress>
              </Progress>
     

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
