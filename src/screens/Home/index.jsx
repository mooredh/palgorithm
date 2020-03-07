import React, { Component } from 'react'
import './style.css'
import arraysIcon from '../../assets/images/arrays.svg'
import listsIcon from '../../assets/images/lists.svg'
import heapsIcon from '../../assets/images/heaps.svg'
import treesIcon from '../../assets/images/trees.svg'
import mapsIcon from '../../assets/images/maps.svg'
import queuesIcon from '../../assets/images/queues.svg'
import stacksIcon from '../../assets/images/stacks.svg'
import bg from '../../assets/images/bg.jpg'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <main className="home">
                <img src={bg} alt="Background"/>
                <div className="overlay" />
                <h1>Welcome to <span>PALGORITHM</span></h1>
                <section>
                    <Link to="/arrays"><img  src={arraysIcon} alt="Arrays Icon"/></Link>
                    <Link to="/lists"><img src={listsIcon} alt="Lists Icon"/></Link>
                    <Link to="/stacks"><img src={stacksIcon} alt="Stacks Icon"/></Link>
                    <Link to="/queues"><img src={queuesIcon} alt="Queues Icon"/></Link>
                    <Link to="/trees"><img src={treesIcon} alt="Trees Icon"/></Link>
                    <Link to="/heaps"><img src={heapsIcon} alt="Heaps Icon"/></Link>
                    <Link to="/maps"><img src={mapsIcon} alt="Maps Icon"/></Link>
                </section>
            </main>
        )
    }
}
