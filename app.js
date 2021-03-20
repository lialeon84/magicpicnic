import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./icons/all.css";

import { createPopper } from "@popperjs/core";
const popcorn = document.querySelector("#popcorn");
const tooltip = document.querySelector("#tooltip");
createPopper(popcorn, tooltip, {
    placement: "top"
});