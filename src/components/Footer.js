import React from 'react';
const envelope = require('./images/envelope.png');
const fileDownload = require('./images/fileDownload.png');
const github = require('./images/github.png');
const linkedin = require('./images/linkedin.png');
const phone = require('./images/phone.png');
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {

    footer: {
        fontFamily: 'Roboto Mono',
        position: 'relative',
        color: '#e4688f',
        backgroundColor: '#f3e9c3',
        height: '100vh',
        width: '100%',

    },
    contactIcons: {
        maxHeight: '50px',
        borderRadius: '3px',
        backgroundColor: '#f3e9c3',
        padding: '5px',
    },
};

// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
    return (

        <footer style={styles.footer} class="footer mt-auto py-3 page-footer pt-4">
            <div style={styles.footer} class="container-fluid text-center text-md-left">
                <div class="footer-copyright text-center py-3">© 2022 Created by:<br />🧁 Bonnie Reed 🧁
                </div>
                <div>
                    <a style={styles.contactIcons} href="https://github.com/bonniereed" target="_blank"><img style={styles.contactIcons} class="icon img-fluid rounded" src={github}
                        alt="Github icon" /></a>
                    <a style={styles.contactIcons} href="https://www.linkedin.com/in/bonniejeanreed/" target="_blank"><img style={styles.contactIcons} class="icon img-fluid rounded"
                        src={linkedin} alt="LinkedIn icon" /></a>
                    <a style={styles.contactIcons} href="mailto:bonniejeanreed@gmail.com" target="_blank"><img style={styles.contactIcons} class="icon img-fluid rounded"
                        src={envelope} alt="Envelope icon" /></a>
                    <a style={styles.contactIcons} href="tel:2543008020"><img style={styles.contactIcons} class="icon img-fluid rounded" src={phone} alt="Telephone icon" /></a>
                    <a style={styles.contactIcons} href="https://docs.google.com/document/d/1OfJAlqWpMJMa9iYKNVPsiV5yUXIgVWAdGyDavKrzdhk?export=download" target="_blank"><img style={styles.contactIcons} class="icon img-fluid rounded" src={fileDownload}
                        alt="File Download icon" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;