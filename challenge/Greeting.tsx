type Name = string;

function Greeting({ name }: { name: Name }) {
  return (
    <>
      <p>Hello {name}</p>
    </>
  );
}

export default Greeting;
