import React from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import '../assets/styles/theme.scss'
export default class Footer extends React.Component {

    render() {
        const tags = this.props.tags;

        return (

            <div className={`footer ${!tags ? 'no-tags' : ''}`}>
                <div className="tags">
                    <i className="fa fa-tags"></i>
                    <div className="links">
                        {tags.map(tag => (
                             <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        ))}
                    </div>
                </div>


                    {/*
            // <div class="languages">
            //     <i class="fa fa-language"></i>
            //     <div class="links">
            //         {{ range .Translations }}
            //             <a href="{{ .Permalink }}">{{ .Lang }}</a>
            //         {{ end }}
            //     </div>
            // </div> */}

                </div>)
        }
}