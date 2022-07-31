import React from "react";

const NavDetails = () => {
  return (
    <div className="col-9 m-auto mt-5">
      <nav className="d-flex justify-content-around">
        <div class="nav nav-tabs mb-4" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Description
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Customer Previews(5)
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Additional information
          </button>
        </div>
      </nav>
      <div class="tab-content text-start mt-4" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <p className="fs-5">
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            solicitud felis. Pellentesque diam dolor, elementum etos lobortis
            des mollis ut risus. Sedcus faucibus an sullamcorper mattis
            drostique des commodo pharetras loremos.
          </p>
          <div>
            <h5 className="fw-bold mb-3 mt-4">Products Infomation</h5>
            <p>
              A Pocket PC is a handheld computer, which features many of the
              same capabilities as a modern PC. These handy little devices allow
              individuals to retrieve and store e-mail messages, create a
              contact file, coordinate appointments, surf the internet, exchange
              text messages and more. Every product that is labeled as a Pocket
              PC must be accompanied with specific software to operate the unit
              and must feature a touchscreen and touchpad. As is the case with
              any new technology product, the cost of a Pocket PC was
              substantial during it’s early release. For approximately $700.00,
              consumers could purchase one of top-of-the-line Pocket PCs in
              2003. These days, customers are finding that prices have become
              much more reasonable now that the newness is wearing off. For
              approximately $350.00, a new Pocket PC can now be purchased.
            </p>
          </div>
          <div className="mt-5">
            <h5 className="fw-bold mb-3">Material used</h5>
            <p>
              Polyester is deemed lower quality due to its none natural
              quality’s. Made from synthetic materials, not natural like wool.
              Polyester suits become creased easily and are known for not being
              breathable. Polyester suits tend to have a shine to them compared
              to wool and cotton suits, this can make the suit look cheap. The
              texture of velvet is luxurious and breathable. Velvet is a great
              choice for dinner party jacket and can be worn all year round.
            </p>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <div>
            <h5 className="fw-bold mb-3">Products Infomation</h5>
            <p>
              A Pocket PC is a handheld computer, which features many of the
              same capabilities as a modern PC. These handy little devices allow
              individuals to retrieve and store e-mail messages, create a
              contact file, coordinate appointments, surf the internet, exchange
              text messages and more. Every product that is labeled as a Pocket
              PC must be accompanied with specific software to operate the unit
              and must feature a touchscreen and touchpad. As is the case with
              any new technology product, the cost of a Pocket PC was
              substantial during it’s early release. For approximately $700.00,
              consumers could purchase one of top-of-the-line Pocket PCs in
              2003. These days, customers are finding that prices have become
              much more reasonable now that the newness is wearing off. For
              approximately $350.00, a new Pocket PC can now be purchased.
            </p>
          </div>
          <div className="mt-5">
            <h5 className="fw-bold mb-3">Material used</h5>
            <p>
              Polyester is deemed lower quality due to its none natural
              quality’s. Made from synthetic materials, not natural like wool.
              Polyester suits become creased easily and are known for not being
              breathable. Polyester suits tend to have a shine to them compared
              to wool and cotton suits, this can make the suit look cheap. The
              texture of velvet is luxurious and breathable. Velvet is a great
              choice for dinner party jacket and can be worn all year round.
            </p>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabindex="0"
        >
          <p className="fw-bold fs-5">
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            solicitud felis. Pellentesque diam dolor, elementum etos lobortis
            des mollis ut risus. Sedcus faucibus an sullamcorper mattis
            drostique des commodo pharetras loremos.
          </p>
          <div>
            <h5 className="fw-bold mb-3 mt-4">Products Infomation</h5>
            <p>
              A Pocket PC is a handheld computer, which features many of the
              same capabilities as a modern PC. These handy little devices allow
              individuals to retrieve and store e-mail messages, create a
              contact file, coordinate appointments, surf the internet, exchange
              text messages and more. Every product that is labeled as a Pocket
              PC must be accompanied with specific software to operate the unit
              and must feature a touchscreen and touchpad. As is the case with
              any new technology product, the cost of a Pocket PC was
              substantial during it’s early release. For approximately $700.00,
              consumers could purchase one of top-of-the-line Pocket PCs in
              2003. These days, customers are finding that prices have become
              much more reasonable now that the newness is wearing off. For
              approximately $350.00, a new Pocket PC can now be purchased.
            </p>
          </div>
          <div>
            <h5 className="fw-bold mb-3 mt-4">Material used</h5>
            <p>
              Polyester is deemed lower quality due to its none natural
              quality’s. Made from synthetic materials, not natural like wool.
              Polyester suits become creased easily and are known for not being
              breathable. Polyester suits tend to have a shine to them compared
              to wool and cotton suits, this can make the suit look cheap. The
              texture of velvet is luxurious and breathable. Velvet is a great
              choice for dinner party jacket and can be worn all year round.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDetails;
