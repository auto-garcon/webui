import React from 'react'

import Modal from './Modal'
import GoogleLogin from 'react-google-login'

export default class GoogleModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }
    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        const DEVID = "1020443801830-kjm2qo4ujk27smhn9n7l7j33ojlaecpt.apps.googleusercontent.com"
        const PRODID = "1020443801830-prp10hjgd1r8pc6pue3br9mkjphn1qic.apps.googleusercontent.com"
        const PRODAPI = "https://autogarcon.live/api/users/newuser"
        const DEVAPI = "http://localhost:4567/api/users/newuser"
        const isOpen = true;

        function responseGoogle(response) {
            //console.log(response);
            fetch(DEVAPI, {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
              },
              body: JSON.stringify(response)
            })
            .then(res => console.log(res))
            .then(data => console.log(data))
            .catch(err => console.log("FAILED", err));
            
        }
        return (
            
            <div>
                <Modal
                    show={this.state.isOpen}
                    onClose={this.toggleModal}
                >
                    <GoogleLogin
                        clientId={DEVID}
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </Modal>
            </div>
        )
    }
    
}
