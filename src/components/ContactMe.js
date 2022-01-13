import React from 'react';


// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
    contactMe: {
        fontFamily: 'Roboto Mono',
        padding: '10px',
        backgroundColor: '#f3e9c3',
        color: '#e4688f'
    },
    contactIcons: {
        maxHeight: '35px',
        maxEidth: '35px',
        marginTop: '5px',
        marginBottom: '5px',
        padding: '5px',
        borderRadius: '3px'
    },
    formButton: {

        backgroundColor: '#e4688f',
        color: '#f3e9c3',
        textAlign: 'center'
    },

};

// switch (fieldName) {
//     case 'email':
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailValid ? '' : ' is invalid';
//         break;
//     case 'password':
//         passwordValid = value.length >= 6;
//         fieldValidationErrors.password = passwordValid ? '' : ' is too short';
//         break;
//     default:
//         break;
// }
// this.setState({
//     formErrors: fieldValidationErrors,
//     emailValid: emailValid,
//     passwordValid: passwordValid
// }, this.validateForm);


// validateForm() {
//     this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
// }

// In Navbar, we can assign a style from an object by using curly braces
function ContactMe() {
    return (<article style={styles.contactMe} id="contact-Me" class="contact-Me">
        <section class="content">
            <div style={styles.contactMe} class="justify-content-around" >
                <h2>Contact Me</h2>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Name</label>
                            <input type="email" class="form-control" id="inputName" placeholder="Name" required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Email Address</label>
                            <input type="password" class="form-control" id="inputEmail" placeholder="Email" required />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    </div>
                    <button style={styles.formButton} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    </article>


    );
}




export default ContactMe;

