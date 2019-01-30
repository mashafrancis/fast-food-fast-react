import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="cover">
          <h2>The best place to order your meals without delay</h2>
          <hr />
          <form className="flex-form">
            <input type="search" placeholder="What do you want to eat today?" />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="wrapper-main">
          <section className="index-links">
            <a href="menu.html">
              <div className="index-boxlink-square" id="category-1">
                <h3>Burger</h3>
              </div>
            </a>
            <a href="pizza.html">
              <div className="index-boxlink-rectangle" id="category-2">
                <h3>Pizza</h3>
              </div>
            </a>
            <a href="salad.html">
              <div className="index-boxlink-square" id="category-3">
                <h3>Salads</h3>
              </div>
            </a>
            <a href="fries.html">
              <div className="index-boxlink-rectangle" id="category-4">
                <h3>Fries</h3>
              </div>
            </a>
            <a href="pasta.html">
              <div className="index-boxlink-square" id="category-5">
                <h3>Pasta</h3>
              </div>
            </a>
            <a href="drinks.html">
              <div className="index-boxlink-square" id="category-6">
                <h3>Drinks</h3>
              </div>
            </a>
          </section>
        </div>
      </div>

    );
  }
}

export default Home;
