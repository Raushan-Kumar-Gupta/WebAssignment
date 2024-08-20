// const heading=React.createElement('h1',{id:'heading'},'this is heading with React');
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
const prnt = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "div div heading tag"),
    React.createElement("h1", {}, "div div heading tag")
]));
console.log(prnt);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(prnt);

//# sourceMappingURL=index.7c0ccee6.js.map
