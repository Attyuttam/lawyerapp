import React from "react";

function AboutPage() {
    return (
        <div>
            <h1 style={{marginRight:'auto',marginLeft:'auto',display:'block',width:'3em'}}>About</h1>
            <br/>
            <img style={{height: '8%', width: '9%',display:'block', marginLeft:'auto', marginRight:'auto'}} alt="LAWYER INC. LOGO"
                 src={require('../resources/images/lawyer_logo.jpg')}/>
                 <br/>
            <p style={{marginRight:'auto',marginLeft:'auto',display:'block',width:'50em'}}>
                Lawyers Inc. was conceived as an idea in 2019 by NITW Alumni Attyuttam Saha and Debarka Mukhopadhyay when they
                were fiddling with the idea of a startup. The importance of it was understood straight away but due to other
                unforseen cirucmstances the idea could not be brought to life. It was in the mid 2020 that the work started
                and now it has started to gain momentum and help all the people be more close to the law and not be overwhelmed
                by the paper work and conersation that needs to be taken. You come here, decide what you want, talk to people via
                the forum, see top rated lawyers and arrange an appointment. The best lawyers at your service at the blink of an eye.
            </p>
        </div>
    );

}

export default AboutPage;