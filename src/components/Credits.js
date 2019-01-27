import React from 'react'
import { Link } from 'gatsby'

export default class Layout extends React.Component {
    render() {
        return (
            <div class="credits">
                <div class="container">
                    <div class="copyright">
                        <a href={`https://github.com/TheHandsomeCoder`}>{`© ${new Date().getFullYear()} by Scott O'Malley`}</a>
                    </div>
                    <div class="author">
                        <a href={`https://github.com/TheHandsomeCoder/codingtangents`}>Gatsberry Gatsby Theme</a>
                    </div>
                </div>
            </div>
        )
    }
}
