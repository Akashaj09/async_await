let get = (obj, ...props) => {
    const val = obj[props[0]];
    if(props.length === 1 || !val) return val;
    const rest = props.slice(1);
    return get.apply(null, [val, ...rest])
}

let persion = {
    name: "Akash",
    email: "akashajaj09@gmail.com"
}

console.log(get(persion, 'name'))