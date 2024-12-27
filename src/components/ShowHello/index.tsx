interface ShowHelloProps {
  text?: string;
}

const ShowHello = ({ text = 'Hello!' }: ShowHelloProps) => {
  return (
    <div>
      <h1
        style={{
          fontSize: '2em',
          fontWeight: 'bold',
          color: 'blue',
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default ShowHello;
