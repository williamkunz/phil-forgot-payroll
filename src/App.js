import React, { PureComponent } from 'react'
import './App.css'

import philjobs from '../static/philjobs.jpg'
import sexyMan from '../static/sexiest-ceos-alive.jpg'

class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <header>
                    <h1>Phil forgot payroll one day</h1>
                </header>

                <section>
                    <header>
                        <h3>Who is Phil?</h3>
                        <h5>Phil Dougherty, CEO of ContainerShip & voted one of the sexiest CEO's alive.</h5>
                    </header>

                    <img src={sexyMan} alt="Sexiest CEOs"/>

                    <footer>
                        <small>(this may not be true)</small>
                    </footer>
                </section>


                <section>
                    <header>
                        <h3>How did Phil forget payroll?</h3>
                        <h5>Phil was hanging out with his CEO pals in sunny California.</h5>
                    </header>

                    <img src={philjobs} alt="Phil Jobs"/>

                    <footer>
                        <small>(this also may not be true)</small>
                    </footer>
                </section>

                <section>
                    <header>
                        <h3>Why did I make this?</h3>
                        <h5>Two reasons:</h5>
                    </header>

                    <ol>
                        <li>An email sent by Phil 2 hours ago that said: <quote>"Feel free to punch me or belittle me as payback."</quote> I hope this helps. We are all friends here.</li>
                        <li>
                            I wanted to try out <a href="https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html" title="create-react-app">create-react-app</a>, kudos to <a href="https://twitter.com/dan_abramov">Dan Abramov</a> and company.
                            I've been a developer working with React for a few years now. Learning React used to be very involved with having to learn <a href="https://facebook.github.io/react/" title="React.js">React</a>, a form of <a href="https://ryanclark.me/getting-started-with-flux/" title="Flux">Flux</a> and <a href="https://webpack.github.io/" title="Webpack">Webpack</a>.
                            This simple CLI tool takes a major towards involving an entirely new audience to the React community.
                        </li>
                    </ol>
                </section>

                <section>
                    <header>
                        <h3>Whoami?</h3>
                    </header>

                    <p><a href="https://twitter.com/williamkunz" title="William Kunz">William Kunz</a>, front-end lead at <a href="http://containership.io" title="ContianerShip">ContainerShip</a>.</p>
                </section>
            </div>
        )
    }
}

export default App;
