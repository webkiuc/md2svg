import React from "react";
import { connect } from "react-redux";
import SplitPane from "react-split-pane"; //https://www.npmjs.com/package/react-split-pane
import Header from "../Common/Header";
import TemplateSelector from "./TemplateSelector";
import MarkdownEditor from "./MarkdownEditor";
import StyleEditor from "./StyleEditor";
import SVGCanvas from "./SVGCanvas";

class Home extends React.Component {
    state = { }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header />

                <div>
                    <SplitPane
                        split="vertical"
                        defaultSize={400}
                        className="split-panel-1 content-main"
                    >
                        <SplitPane
                            split="horizontal"
                            defaultSize={65}
                            className="split-panel-2"
                            allowResize={false}
                        >
                            <TemplateSelector />

                            <SplitPane
                                split="horizontal"
                                defaultSize={270}
                                className="split-panel-2"
                            >
                                <MarkdownEditor />
                                <StyleEditor />
                            </SplitPane>

                            
                        </SplitPane>

                        <SVGCanvas />
                    </SplitPane>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps, { }
)(Home);
