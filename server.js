const { readFileSync } = require("fs");
const { createServer } = require("http");
const { parse } = require("url");
const React = require("react");
const { renderToString } = require("react-dom/server");

const htmlIndexTemplate = readFileSync(
  `${__dirname}/templates/index.html`,
  "utf-8"
);

const clientJS = readFileSync(`${__dirname}/templates/client.js`, "utf-8");

function Calculator() {
  const [display, setDisplay] = React.useState("");
  const [result, setResult] = React.useState(null);

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
    setResult(null);
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(display);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{display}</div>
        <div className="result">{result !== null ? result : ""}</div>
      </div>
      <div className="buttons">
        <div>
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleDelete()}>DEL</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
        </div>
        <div>
          <button onClick={handleEquals}>=</button>
          <button onClick={() => handleButtonClick("0")} className="zero">
            0
          </button>
          <button onClick={() => handleButtonClick(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

const server = createServer((req, res) => {
  const pathname = parse(req.url, true).pathname;

  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const renderedReact = renderToString(<Calculator />);
    const html = htmlIndexTemplate.replace("%%%CONTENTHERE%%%", renderedReact);

    res.end(html);
  } else if (pathname === "/test") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Test Page");
  } else if (pathname === "/client.js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(clientJS);
  } else {
    res.end("404 Page Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server running on port: 127.0.0.1:8000");
});
