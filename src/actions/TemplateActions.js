import { TYPES } from './types';
import { templateServices } from '../services';

// Sidebar Action
export const setSelectedTemplateId = (id) => {
    return dispatch =>
        dispatch({
            type: TYPES.ACTION_TEMPLATE_SET_SELECTED_TEMPLATE,
            payload: { id }
        });
};

export const getTemplateData = (id) => {
    return dispatch => {
        fetch(`/data/templates/${id+1}.svg`)
        .then((r) => r.text())
        .then(text  => {
            dispatch({
                type: TYPES.ACTION_TEMPLATE_GET_TEMPLATE_DATA_SUCCESSFUL,
                payload: { id, data: text }
            });
        })
    }  
}

export const getMarkdownData = (id) => {
    return dispatch => {
        fetch(`/data/templates/${id+1}.md`)
        .then((r) => r.text())
        .then(text  => {
            dispatch({
                type: TYPES.ACTION_TEMPLATE_GET_MARKDOWN_DATA_SUCCESSFUL,
                payload: { id, data: text }
            });
        })
    }
}

export const getStyleData = (id) => {
    return dispatch => {
        fetch(`/data/templates/${id+1}.style`)
        .then((r) => r.text())
        .then(text  => {
            dispatch({
                type: TYPES.ACTION_TEMPLATE_GET_STYLE_DATA_SUCCESSFUL,
                payload: { id, data: text }
            });
        })
    }  
}

export const updateMarkdownData = (text) => {
    return dispatch =>
        dispatch({
            type: TYPES.ACTION_TEMPLATE_UPDATE_MARKDOWN,
            payload: { data: text }
        });
}

export const updateStyleData = (text) => {
    return dispatch =>
        dispatch({
            type: TYPES.ACTION_TEMPLATE_UPDATE_STYLE,
            payload: { data: text }
        });
}

export const generateSVG = (templateId, templateData, markdownData, styleData) => {
    var generatedSVGData = templateServices.generateSVGData(templateId, templateData, markdownData, styleData);
    
    return dispatch =>
        {
            dispatch({
                type: TYPES.ACTION_TEMPLATE_GENERATE_SVG,
                payload: { generatedSVGData }
        });
    }
}

