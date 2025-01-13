const createElement = (tag, att={}, ...children) =>
{ 
    if(typeof tag === "function")
    {
        return tag({ ...att, children : children.join("") });
    }
    else
    {
        const final = children[0] ? `>${children.join("")}</${tag}>` : "/>";
        return `<${tag} ${Object.keys(att).map(k => `${k}="${att[k]}"`).join(" ")}${final}`;
    }
}

const Fragment = (...children) => children.join("");

const Xmlx = { createElement, Fragment };

module.exports = Xmlx;