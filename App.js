/**
 * <div id="parent">
 *  <div id="child1">
 *  <h1> I am a H1 tag</h1>
 * <h2> I am a H2 tag</h2>
 * </div>
 *  <div id="child2">
 *  <h1> I am a H1 tag</h1>
 * <h2> I am a H2 tag</h2>
 * </div>
 * </div>
 */
// here more than 1 element is returned into a single parent element passed as a array.

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]
    )]
);
// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

console.log(parent);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// React elments are immutable

