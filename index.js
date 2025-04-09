const flattenChildren = (children) => {
    const flat = [];

    const recurse = (child) => {
        if (Array.isArray(child)) child.forEach(recurse);
        else if (child !== null && child !== undefined && child !== false) flat.push(child);
    };

    recurse(children);
    return flat;
};

const createElement = (tag, att={}, ...children) =>
{ 
    children = flattenChildren(children);
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

const Fragment = (args) =>[...flattenChildren(args.children)].join("");

const Xmlx = { createElement, Fragment };

module.exports = Xmlx;