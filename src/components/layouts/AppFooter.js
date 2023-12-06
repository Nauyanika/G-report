import React from 'react'

export default function AppFooter() {
  return (
    <>
      <aside className="control-sidebar control-sidebar-dark"></aside>

      <footer className="main-footer">
        <h5 style={{ color: 'green' }}>For sales / marketing enquiry, please contact on WhatsApp Number: <span style={{ color: 'blue' }}>+91 9867066683</span></h5>
        <h5 style={{ color: 'green' }}>सेल्स / मार्केटिंग के लिए, कृपया व्हाट्सएप नंबर पर संपर्क करें: <span style={{ color: 'blue' }}>+91 9867066683</span></h5>
        <strong>
          Copyright &copy; 2023{" "}
          <a href=" ">RoyalLuck</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.1.0
        </div>
      </footer>
    </>
  )
}
