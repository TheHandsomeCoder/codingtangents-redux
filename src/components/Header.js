import React from 'react'
import '../assets/styles/theme.scss'
export default class Header extends React.Component {

    render() {
        const { title } = this.props
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="/" className="logo">

                            <img src="https://www.gravatar.com/avatar/88188b6cc451928eba90e8400bc68086?d=mm&amp;size=200" alt="" />


                            <span className="overlay"><i className="fa fa-home"></i></span>
                        </a>
                    </div>
                    <div className="titles">
                        <h3 className="title"><a href="/">{title}</a></h3>

                        <span className="subtitle">Hello World! This is the most epic subtitle ever.
</span>

                    </div>

                    {/* <div className="languages">
                        <a href="//en" className="active">en</a>
                        <a href="//de">de</a>
                    </div>
                    <div className="toggler">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div> */}
                </div>
            </header>
        );
    }
}