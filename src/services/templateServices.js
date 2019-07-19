import { templateConfigs } from "./templateConfigs";

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var MD_REPLACE = {
    PREFIX: "__",
    POSFIX: "__"
}

var extractMarkdownContent = function (prefix, markdownData, lineId) {
    var lines = markdownData.split("\n");

    if (lineId >= lines.length)
        return "";

    var line = lines[lineId];
    return line.replace(prefix, "").trim();
}

var getStyleObject = function (styleData) {
    var lines = styleData.split("\n").filter(line => line.indexOf("}") < 0 && line.indexOf("}") < 0);
    var styleObject = {};

    for (var i=0; i<lines.length; i++)
        if (lines[i].indexOf(":") >= 0) {
            var key = lines[i].split(":")[0].trim();
            var value = lines[i].split(":")[1].replace(";", "").trim();

            styleObject[key] = value;
        }

    return styleObject;
}

var replaceContent = function (data, key, content) {
    var fullKey = MD_REPLACE.PREFIX + key + MD_REPLACE.POSFIX;
    return data.replaceAll(fullKey, content);
}

const generateSVGData = (templateId, templateData, markdownData, styleData) => {
    var generatedData = templateData;

    var configMarkdownData = templateConfigs[templateId].markdown;
    for (var i = 0; i < configMarkdownData.length; i++) {
        var content = extractMarkdownContent(configMarkdownData[i].prefix, markdownData, i);
        generatedData = replaceContent(generatedData, configMarkdownData[i].key, content);
    }

    var configStyleData = templateConfigs[templateId].style;
    var styleObject = getStyleObject(styleData);

    for (var i = 0; i < configStyleData.length; i++) {
        var attributeValue = styleObject[configStyleData[i].cssKey]?
            styleObject[configStyleData[i].cssKey]: configStyleData[i].default;

        console.log(configStyleData[i].key, attributeValue);

        generatedData = replaceContent(generatedData, configStyleData[i].key, attributeValue);
    }

    return generatedData;
}

const getData = (templateId) => {

}

export const templateServices = {
    generateSVGData,
}