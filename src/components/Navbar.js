import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <section class="menu">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {menuOBJ.items.map(link => {
                if (link.items.length === 0) {
                  return (
                    <li className="nav-item active">
                      <Link to={link.subject} className="nav-link">
                        {link.title} <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        to={link.subject}
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Shop
                      </Link>
                      <div
                        className="dropdown-menu full-width"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="row">
                          {link.items.map(childLink => (
                            <div className="col-4">
                              <div className="dropdown-header">
                                {childLink.title}
                              </div>
                              <div className="dropdown-divider" />
                              {childLink.items.map(sublink => (
                                <Link to={"/collections/" + sublink.title}>
                                  {sublink.title}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;

const menuOBJ = {
  id: 34088583225,
  title: "Main menu",
  handle: "main-menu",
  created_at: "2018-06-02T22:48:50-04:00",
  updated_at: "2018-06-03T00:06:46-04:00",
  items: [
    {
      title: "Home",
      subject: "/",
      subject_id: null,
      subject_params: null,
      type: "frontpage",
      items: []
    },
    {
      title: "Shop",
      subject: "/collections/all",
      subject_id: null,
      subject_params: null,
      type: "catalog",
      items: [
        {
          title: "Mens",
          subject: "mens",
          subject_id: 48392863801,
          subject_params: null,
          type: "collection",
          items: [
            {
              title: "Jeans",
              subject: "mens-jeans",
              subject_id: 48392994873,
              subject_params: null,
              type: "collection",
              items: []
            },
            {
              title: "Shirts",
              subject: "mens-shirts",
              subject_id: 48392962105,
              subject_params: null,
              type: "collection",
              items: []
            }
          ]
        },
        {
          title: "Womens",
          subject: "womens",
          subject_id: 48393650233,
          subject_params: null,
          type: "collection",
          items: [
            {
              title: "Dresses",
              subject: "womens-dresses",
              subject_id: 48393060409,
              subject_params: null,
              type: "collection",
              items: []
            },
            {
              title: "Shirts",
              subject: "womens-shirts",
              subject_id: 48393158713,
              subject_params: null,
              type: "collection",
              items: []
            }
          ]
        },
        {
          title: "Jewelry",
          subject: "jewelry",
          subject_id: 48393486393,
          subject_params: null,
          type: "collection",
          items: [
            {
              title: "Watches",
              subject: "watches",
              subject_id: 48393388089,
              subject_params: null,
              type: "collection",
              items: []
            },
            {
              title: "Necklaces",
              subject: "necklaces",
              subject_id: 48393289785,
              subject_params: null,
              type: "collection",
              items: []
            }
          ]
        }
      ]
    }
  ]
};
