import Handlebars from 'handlebars';

const getMarkupHtml = (tpl, data) => Handlebars.compile(tpl)(data);

export default getMarkupHtml;
