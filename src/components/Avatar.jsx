export default function Avatar({ person, size }) {
//   const { person, size } = props;

  return (
    <div>
      <div>
        <h1>{person.name}</h1>
        <p>{person.imageId}</p>
        <div>{size}</div>
      </div>
    </div>
  );
}
