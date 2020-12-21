import React, {Fragment, Component} from 'react';
import LiveSearch from "./components/LiveSearch";
import {onChange, setData, handleArrowClick, setWorkingList, sendQuery} from "./funcs";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            counter: 1,
            data: {counter: 0, query: '', response: []},
            focus: false,
            active: null,
            isAllowedRequest: true,
            isTyping: true,
            workingList: []
        }

        this.onChange = onChange.bind(this);
        this.onFocus = () => this.setState({focus: true});
        this.onBlur = () =>  this.setState({focus: false});
        this.isTypingTrue = () => this.setState({isTyping: true});
        this.isTypingFalse = () => this.setState({isTyping: false});
        this.setActive = (active) => this.setState({active});
        this.disallowRequest = () => this.setState({isAllowedRequest: false})
        this.setData = setData.bind(this)
        this.setWorkingList = setWorkingList.bind(this);
        this.handleArrowClick = handleArrowClick.bind(this);
        this.sendQuery = sendQuery.bind(this);
        this.allowRequest = () => setTimeout(() => {
            this.setState({isAllowedRequest: true})
            this.sendQuery()
        }, 1000);
        this.buttonFunction = () => {
            const {query} = this.state;
            document.location.href = `/search/${query}`;
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const {query, isAllowedRequest, isTyping} = this.state;
        if(prevState.query !== query && query !== '' && isAllowedRequest && isTyping) {
            this.sendQuery();
            this.disallowRequest();
            this.allowRequest();
        }
    }

    render() {
        const {query, active, focus, workingList} = this.state;
        return (
            <Fragment>
                <label htmlFor="query" className="search-bar__label">Поиск по сайту:</label>
                <div className="search-bar__input-wrapper">
                    <input type="text"
                           name="query"
                           id="query"
                           placeholder="Введите название компании"
                           className="search-bar__input p-3"
                           value={query} onChange={this.onChange}
                           autoComplete="off"
                           onFocus={this.onFocus}
                           onBlur={this.onBlur}
                           onKeyDown={this.handleArrowClick}/>
                    <LiveSearch workingList={workingList} focus={focus} active={active}/>
                </div>
                <button className="btn bg-orange pv-3 ph-6 btn--search" onClick={this.buttonFunction}>Найти</button>
            </Fragment>
        )
    }
}

export default Search;
