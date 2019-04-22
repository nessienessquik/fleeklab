import React, { Component } from "react";
import Flexbox from "flexbox-react";

import NavBar from "./NavBar.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Gallery from "./Gallery.js";

class LooksPage extends Component {
  render() {
    return (
      <section>
        <Flexbox className="looks-page">
          <Header />

          <NavBar />

          <h2 className="component-heading">Browse our daily looks!</h2>

          <Gallery galleryType="api" userId={this.props.userId} />

          <Footer />
        </Flexbox>
      </section>
    );
  }
}

export default LooksPage;
