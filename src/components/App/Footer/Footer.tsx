import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left text-align:center">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Toledo AA Area 55</h5>
            <p>No AA literature or announcements will be posted without express permission. Links and advertising on map webpages are not endorsed by Area 55 AA.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Please send any comments to <a href="mailto:webmaster@toledoaa.com">Webmaster</a>.  Last modified on 07/01/2019.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;