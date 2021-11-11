export default fetch("../token.json")
  .then((res) => res.json())
  .then((data) => data);
