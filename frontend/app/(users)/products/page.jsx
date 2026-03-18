const Products = async (props) => {
  const searchParam = await props.searchParams;

  console.log(searchParam);
  return <h1>Serach Paramas</h1>;
};
export default Products;
