import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    fontSize: 2.5,
    fontFamily: 'Caveat',
  },
  heading: {
    backgroundColor: "#ff75a0",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  a: {
    textDecoration: 'none',
    color: '#eaffd0',
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Header() {
  return (
    <div style={styles.card}>
      <nav style={styles.heading} class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a style={styles.a} class="navbar-brand px-3" id="example" href="#"
          >Bonnie's Portfolio</a
          >
          <ul class="nav justify-content-end">
            <li class="nav-item px-3">
              <a style={styles.a} href="#about-Me"> About Me </a>
            </li>
            <li class="nav-item px-3">
              <a style={styles.a} href="#previous-Work"> Previous work </a>
            </li>
            <li class="nav-item px-3">
              <a style={styles.a} href="#contact-Me"> Contact Me </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;