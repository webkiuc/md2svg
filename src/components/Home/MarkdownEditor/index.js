import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './style.css';
import Highlight from 'react-highlight';
import { updateMarkdownData } from "../../../actions";

class MarkdownEditor extends Component {
    constructor() {
        super();
        this.state = {
            isPreview: true,
            text: ''
        }
    }

    componentDidMount() {
    }
    
    componentWillReceiveProps(props) {
        if (props.markdownData != this.props.markdownData)
            this.setState({ text: props.markdownData });
    }

    // clicks = [];
    // timeout;

    // fingleClick = (event) => {
    //     alert("single click");
    // }

    // doubleClick = (event) => {
    //     this.togglePreview();
    // }

    // clickHandler = (event) => {
    //     console.log("ABCD");
    //     event.preventDefault();
    //     var clicks = this.clicks;
    //     clicks.push(new Date().getTime());
    //     window.clearTimeout(this.timeout);
    //     this.timeout = window.setTimeout(() => {
    //         if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250) {
    //             this.doubleClick(event.target);
    //         } else {
    //             this.singleClick(event.target);
    //         }
    //     }, 250);
    // }

    togglePreview = () => {
        this.setPreview(!this.state.isPreview);
    }

    setPreview = (isPreview) => {
        this.setState({ isPreview });

        if (isPreview)
            this.props.updateMarkdownData(this.state.text);

        if (!isPreview && this.refs.input) {
            setTimeout(
                function() {
                    ReactDOM.findDOMNode(this.refs.input).focus();
                }.bind(this)
            , 100);
        }
    }

    handleUpdateText = (event) => {
        var text = event.target.value;
        this.setState({ text });
    }

    handleKeydown = (event) => {
        var textArea = event.target;

        if (event.keyCode === 9) { // tab
            event.preventDefault();
            var v = textArea.value, 
            s = textArea.selectionStart, 
            e = textArea.selectionEnd; 
            
            textArea.value = v.substring(0, s) + '\t' + v.substring(e); 
            textArea.selectionStart = textArea.selectionEnd = s + 1; 
            
            return false; 
        } else if (event.keyCode === 27) { // esc
            event.preventDefault();
            this.togglePreview();
        }
    }

    render() {
        return (<div className="markdown-editor">
            <div className="title">Markdown Editor</div>

            <div className="input-text">
                <div onClick={this.togglePreview}
                    className={!this.state.isPreview? "hidden": ""}
                >
                    <Highlight 
                        className='stylesheet' 
                    >
                        {this.state.text}
                    </Highlight>
                </div>

                <textarea
                    ref="input"
                    onChange={this.handleUpdateText}
                    onKeyDown = {this.handleKeydown}
                    onBlur={() => this.setPreview(true)}
                    className={this.state.isPreview? "hidden": ""}
                    value={this.state.text}
                ></textarea>

            </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        markdownData: state.templateReducer.markdownData
    }
}

export default connect(
    mapStateToProps,
    { updateMarkdownData }
)(MarkdownEditor)

