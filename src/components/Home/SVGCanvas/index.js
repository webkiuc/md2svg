import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class SVGCanvas extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(props) {
        if (props.styleData != this.props.styleData)
            this.setState({ text: props.styleData });
    }

    render() {
        var selectedTemplateId = this.props.selectedTemplateId;

        return (<div className="canvas">
            <div className="genarated-svg">
                { this.props.generatedSVGData
                    && <div dangerouslySetInnerHTML={{ __html: this.props.generatedSVGData }} /> }
            </div>

            {/* <div className="template-image">
                <img src={`/images/templates/png/${selectedTemplateId + 1}.png`} />
            </div> */}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedTemplateId: state.templateReducer.selectedTemplateId,
        generatedSVGData: state.templateReducer.generatedSVGData
    }
}

export default connect(
    mapStateToProps
)(SVGCanvas)

