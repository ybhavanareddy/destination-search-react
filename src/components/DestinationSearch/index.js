import "./index.css";
import { Component } from "react";
import DestinationItem from "../DestinationItem";
class DestinationSearch extends Component{
    state = {searchInput:""};
    onChangeSearchInput = (event) =>{
        this.setState({searchInput:event.target.value})
    }
    render(){
        const {DestinationItems} = this.props;
        const {searchInput} = this.state;
        const searchResults = DestinationItems.filter(eachDestination => eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()))
        return(
                <section className="search-section">
                    <header className="search-title">
                        <h1 className="title">Destination Search</h1>
                        <div className="search-input-container">
                            <input 
                            type="search"
                            className="search-input"
                            value = {searchInput}
                            placeholder="Search"
                            onChange={this.onChangeSearchInput}
                            />
                            <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                                alt="search icon"
                                className="search-icon"
                            />
                            </div>
                        </header>
                        <ul className="destination-list">
                            {searchResults.length > 0 ? (
                            searchResults.map(destination => (
                            <DestinationItem
                            key={destination.id}
                            destinationDetails={destination}
                                />
                                ))
                            ) : (
                                <div className="no-results-container">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                                        alt="no results"
                                        className="no-results-img"
                                    />
                                    <p className="no-results-text">No destinations found.</p>
                                    <button className="reset-button" onClick={() => this.setState({ searchInput: '' })}>
                                        Reset Search
                                    </button>
                                </div>
  )}
                        </ul>
                </section>
        )
    }
}

export default DestinationSearch;