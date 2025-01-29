function ItemListContainer({ greeting }) {
  const myStyles = {
    color: "#7d1d3f",
    fontSize: "15 px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
    // backgroundColor: "grey",
  };

  return (
    <>
      <h1 style={myStyles}>{greeting}</h1>
    </>
  );
}

export default ItemListContainer;
