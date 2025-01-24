import { getTermsAndConditions } from "../../apis/api";
import withData from "../../hoc/withData";
import MarkdownViewer from "../others/MarkdownViewer";

export default withData(MarkdownViewer, getTermsAndConditions);