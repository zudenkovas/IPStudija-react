import DataStore from 'flux/stores/DataStore.js';
import GoogleMapReact from 'google-map-react';
import Menu from 'components/Menu.js';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        let pageData = DataStore.getPageBySlug('kontaktai');
        console.log(pageData);

        var myform = $("form#myform");
        myform.submit(function (event) {
            event.preventDefault();

            var params = myform.serializeArray().reduce(function (obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});

            // Change to your service ID, or keep using the default service
            var service_id = "default_service";

            var template_id = "template_nECaEof6";
            myform.find("button").text("Sending...");
            emailjs.send(service_id, template_id, params)
                .then(function () {
                    alert("Sent!");
                    myform.find("button").text("Send");
                }, function (err) {
                    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                    myform.find("button").text("Send");
                });
            return false;
        });

        return (



            <div className="container ">

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">

                        <h4>PARAŠYKITE MUMS</h4>
                        <form id="myform" className="row">

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6">
                                <input type="text" name="from_name" placeholder="VARDAS, PAVARDĖ" /></div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6">
                                <input type="text" name="from_email" placeholder="E.PAŠTO ADRESAS" />
                            </div>


                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6">
                                <input type="number" name="from_number" placeholder="TELEFONO NUMERIS" />
                            </div>


                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6">
                                <input type="text" name="message_html" placeholder="JŪSŲ ŽINUTĖ" />
                            </div>

                            <br /><br />

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6">
                                <button>
                                    Send
                            </button>
                            </div>

                        </form>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">

                        <div className="row">

                            <div>UAB INTERJERO PROJEKTŲ STUDIJA</div>
                            
                            <div>ATEITIES PL. 34B, KAUNAS LT-52165</div>
                            
                            <div><a href="mailto:labas@ip-studija.lt?Subject=Labas" target="_top">LABAS@IP-STUDIJA.LT</a></div>
                            
                            <div>TEL.: 8-657-84444</div>
                            


                        </div>

                        <div className="row">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.54856515451!2d24.03636065366649!3d54.910845328844324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e71827fec33435%3A0x42bee694f872adc2!2sInterjero+projekt%C5%B3+studija!5e0!3m2!1slt!2slt!4v1540745732668" width="600" height="450" style={{ border: 0 }} ></iframe>

                            {/* <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDePWrslsroCU4I0N8FY-o244MSg60G3Jg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div> */}
                        </div>

                    </div>






                </div>




            </div>
        );
    }
}

export default Contact;
