import { TYPES } from "../actions/index";

const initialState = {
    selectedTemplateId: -1,
    templateData: "",
    markdownData: "",
    styleData: ""
};

const templateReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ACTION_TEMPLATE_SET_SELECTED_TEMPLATE:
            return {
                ...state,
                selectedTemplateId: action.payload.id
            };

        case TYPES.ACTION_TEMPLATE_GET_TEMPLATE_DATA_SUCCESSFUL:
            var { data } = action.payload;

            return {
                ...state,
                templateData: data
            };

        case TYPES.ACTION_TEMPLATE_GET_MARKDOWN_DATA_SUCCESSFUL:
            var { data } = action.payload;

            return {
                ...state,
                markdownData: data
            };

        case TYPES.ACTION_TEMPLATE_GET_STYLE_DATA_SUCCESSFUL:
            var { data } = action.payload;

            return {
                ...state,
                styleData: data
            };

        case TYPES.ACTION_TEMPLATE_UPDATE_MARKDOWN:
            var { data } = action.payload;

            return {
                ...state,
                markdownData: data
            };  
            
        case TYPES.ACTION_TEMPLATE_UPDATE_STYLE:
            var { data } = action.payload;

            return {
                ...state,
                styleData: data
            };

            case TYPES.ACTION_TEMPLATE_GENERATE_SVG:
                var { generatedSVGData } = action.payload;
    
                return {
                    ...state,
                    generatedSVGData
                };

        default:
            return state;
    }
};

export default templateReducer;
