var Counter = React.createClass({
  propTypes: {
    number: React.PropTypes.number.isRequired
  },
  getDefaultProps: function() {
    console.log("Wstawianie domyślnych właściwości");
  },
  getInitialState: function() {
    console.log("Inicjujemy stan komponentu");
    return {
      counter: 0
    };
  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },
  componentWillMount: function() {
    console.log(
      "Z tego co wyczytałem to tutaj nie często się coś robi, ze względu na to, że metoda poprzedza pierwszy render :)"
    );
  },
  render: function() {
    console.log(
      "Renderujemy komponent z jego stanami początkowymi lub zaktualizowanymi"
    );
    return React.createElement(
      "div",
      { className: "counter-wrapper" },
      React.createElement(
        "span",
        { className: "counter-name" },
        "Licznik nr " + this.props.number + ": "
      ),
      React.createElement("span", { className: "counter" }, this.state.counter),
      React.createElement(
        "button",
        { onClick: this.increment, className: "button" },
        "+"
      ),
      React.createElement(
        "button",
        { onClick: this.decrement, className: "button" },
        "-"
      )
    );
  },
  componentDidMount: function() {
    console.log(
      "Tu możemy np. zastosować wywołanie AJAX i na podstawie odpowiedzi zaktualizować stan komponentu"
    );
  },
  componentWillReceiveProps: function() {
    console.log(
      "Możemy np. sprawdzić czy komponent zostanie odświeżony po otrzymaniu nowych propsów i ustawić mu na tej podstawie nowy stan "
    );
  },
  shouldComponentUpdate: function() {
    console.log(
      "Tu możemy porównać stare i nowe propsy i stany i zadecydować czy komponent ma się odświeżyć czy nie"
    );
    return true;
  },
  componentWillUpdate: function() {
    console.log(
      "Podobnie jak w metodzie componentWillMount, tu nie można za wiele zmienić, gdyż wprowadzenie nowego stanu nie spowoduje aktualizacji przy renderze"
    );
  },
  componentDidUpdate: function() {
    console.log(
      "Metoda zawiera jako parametry poprzednie propsy oraz stany. Możemy tu znów zmienić stan komponentu, który się odświeży przy następnym renderze"
    );
  },
  componentWillUnmount: function() {
    console.log(
      "Możemy anulować żądania do serwera, czy np. wyczyścić interwały kóre były przypisane do komponentu - clearInterval()"
    );
  }
});

var CounterList = React.createClass({
  propTypes: {
    countersNumber: React.PropTypes.array.isRequired
  },
  render: function() {
    var counterList = this.props.countersNumber.map(function(counter) {
      return React.createElement(Counter, { key: counter, number: counter });
    });
    return React.createElement("div", {}, counterList);
  }
});

var countersNumber = [1, 2, 3, 4];

var element = React.createElement(CounterList, {
  countersNumber: countersNumber
});

ReactDOM.render(element, document.getElementById("app"));

