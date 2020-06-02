import React, { Component } from 'react'
import Hero from '../hero.svg'
export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="hero">
                    <img src={Hero} alt=""/>
                </div>
                <main>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia alias sit nulla fugit ut perspiciatis dolorem animi maiores id, amet tempore maxime hic a repellendus tenetur. Dolor unde labore ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero commodi nam optio. Facere, qui id voluptate, fugit natus quaerat aspernatur deserunt voluptas soluta in porro, dicta ut. Laborum, assumenda quibusdam.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus asperiores assumenda consequatur iure iusto temporibus veniam minima quos cupiditate modi voluptas sed laboriosam, quasi numquam aperiam repellendus repudiandae. Minima, eum?</p>
                </main>
            </div>
        )
    }
}
