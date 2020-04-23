import React from 'react';

function HomePage() {
    return (
        <div className='jumbotron'>
            <h2>Lawyers Inc.</h2>
            <p className='blockquote'><strong>Lawyer management software</strong></p>
            <div className={'LandingPage-details'}>
                <img style={{height: '20%', width: '20%',display:'block', marginLeft:'auto', marginRight:'auto'}} alt="LAWYER INC LOGO" src={require('../resources/images/lawyer_logo.jpg')} />
                <br/><br/>
                <p className='blockquote' style={{display:'block',marginLeft:'auto', marginRight:'auto'}}>
                    Using this application you will be able to locate lawyers based on the ind of law, proximity, fee range, number of
                    cases solved and can also contact them. Lawyers can enlist themselves or their firms and can be exposed to a much
                    wider group of clients. Things like getting a license, making drafts, consulting an appropriate lawyer, finding a
                    lawyer best suited to your purpose and budget shall no more be a herculean task.
                    <br/>
                    We at Lawyers Inc. are dedicated towards bridging the gap between the lawyers and the common man.
                </p>
            </div>
            <h4><a href="/about">About</a></h4>
        </div>);
}

export default HomePage;