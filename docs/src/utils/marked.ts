import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import Prism from "prismjs";
import "prismjs/components/prism-lua";
import "prismjs/themes/prism.css";

marked.use({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: false,
});

marked.use(
  markedHighlight({
    langPrefix: "prism language-",
    highlight: (code: any, lang: any) => {
      if (lang === "lua") {
        return Prism.highlight(code, Prism.languages["lua"], lang);
      } else {
        return code;
      }
    },
  }),
);

export default marked;
