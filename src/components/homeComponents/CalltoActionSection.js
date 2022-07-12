import React from "react";

const CalltoActionSection = () => {
  const handleSubmit = e => {
    e.preventDefault();
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Feel-good shopping</h2>
              <p>Why pay more?</p>
              <form onSubmit={handleSubmit} className="form-section">
                {/* <input placeholder="Your Email..." name="email" type="email" /> */}
                <input style={{ marginLeft: '0px'}} value="Shop now" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
