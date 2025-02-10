function ItemListContainer({ greeting }) {
  const myStyles = {
    color: "#67645e",
    fontSize: "30px",
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
