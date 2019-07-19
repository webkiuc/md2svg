import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    setSelectedTemplateId,
    getTemplateData,
    getMarkdownData,
    getStyleData,
    generateSVG
} from '../../../actions';
import './style.css';
var dateFormat = require('dateformat');

class TemplateSelector extends Component {
    constructor() {
        super();
        this.state = {
            templates: [
                { name: "Brand Promises" },
                { name: "3 Year" },
                { name: "Core Values" }
            ],
            selectedTemplateId: 0
        }
    }

    fetchTemplateById = (id) => {
        this.props.setSelectedTemplateId(id);
        this.props.getTemplateData(id);
        this.props.getMarkdownData(id);
        this.props.getStyleData(id);
    }

    componentDidMount() {
        this.fetchTemplateById(this.state.selectedTemplateId);
    }

    changeTemplate = (event) => {
        var selectedTemplateId = parseInt(event.target.value);
        this.fetchTemplateById(selectedTemplateId);
        this.setState({ selectedTemplateId });
    }

    saveFile = (content, fileName) => {
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        pom.setAttribute('download', fileName);
    
        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    }

    handleExport = () => {
        if (this.props.templateData) {
            var now = new Date();
            var timeStr = dateFormat(now, "yymmdd.HHMMss");
            this.saveFile(this.props.generatedSVGData, `exported-${timeStr}.svg`);
        }
    }

    handleDraw = () => {
        var { selectedTemplateId, templateData, markdownData, styleData } = this.props;
        this.props.generateSVG(selectedTemplateId, templateData, markdownData, styleData);
    }

    render() {
        var drawBtnDisable = !this.props.markdownData || !this.props.styleData;
        var exportBtnDisable = !this.props.generatedSVGData;

        return (<div className="template-selector">
            <div className="inner">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Template</label>
                        <div className="col-sm-5">
                            <select className="form-control" onChange={this.changeTemplate} value={this.state.selectedTemplateId}>
                                {this.state.templates.map((template, i) => <option value={i} key={i}>{template.name}</option>)}
                            </select>
                        </div>
                        <div className="col-sm-4">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-success btn-sm" onClick={this.handleDraw} disabled={drawBtnDisable}>Draw</button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={this.handleExport} disabled={exportBtnDisable}>Export</button>
                            </div>
                        </div>
                    </div>
                    {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
                </form>
            </div>

        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        selectedTemplateId: state.templateReducer.selectedTemplateId,
        templateData: state.templateReducer.templateData,
        markdownData: state.templateReducer.markdownData,
        styleData: state.templateReducer.styleData,
        generatedSVGData: state.templateReducer.generatedSVGData
    }
}

export default connect(
    mapStateToProps, 
    { 
        setSelectedTemplateId,
        getTemplateData,
        getMarkdownData,
        getStyleData,
        generateSVG
    }
)(TemplateSelector)

