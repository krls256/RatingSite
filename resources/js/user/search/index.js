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
            workingList: [],
            asideRoot: null,
            backgroundRoot: null
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

        this.close = () => {
            const { asideRoot } = this.state;
            if(asideRoot) {
                asideRoot.classList.remove('search-line--active')
            }
        }

        this.inputBlur = (e) => {
            if(e.target === this.state.backgroundRoot)
                this.onBlur();
        }
    }
    componentDidMount() {
        const asideRoot = document.querySelector('.search-line');
        const backgroundRoot = asideRoot.querySelector('.search-line__substrate');
        this.setState({asideRoot, backgroundRoot})

        asideRoot.addEventListener('click', this.inputBlur);
        backgroundRoot.addEventListener('click', this.close);
    }

    componentWillUnmount() {
        const {asideRoot, backgroundRoot} = this.state;
        asideRoot.removeEventListener('click', this.inputBlur);
        backgroundRoot.removeEventListener('click', this.close);
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
                <div className="search-line__input-wrapper">
                    <input type="text"
                           name="query"
                           id="query"
                           placeholder="Введите название компании"
                           className="search-line__input"
                           value={query} onChange={this.onChange}
                           autoComplete="off"
                           onFocus={this.onFocus}
                           onClick={this.onFocus}
                           onKeyDown={this.handleArrowClick}/>
                    <LiveSearch workingList={workingList} focus={focus} active={active}/>
                </div>
                {/*<button className="search-line__button" onClick={this.buttonFunction}>Найти</button>*/}
                <button className={'magnifier magnifier--thin magnifier--sm-big magnifier--sm-bold ml-1 ml-sm-3'} onClick={this.buttonFunction} />
                <button className={'close close--normal close--sm-big close--white ml-1 ml-sm-3 btn--reset'} onClick={this.close}/>
            </Fragment>
        )
    }
}

export default Search;
