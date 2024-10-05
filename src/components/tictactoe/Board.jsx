import Cell from './Cell';

function Board(props) {
  const { cells, onClick } = props;
  return (
    <div className='game-board'>
      {cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => onClick(index)}
          className={item === 'X' ? 'is-x' : item ==='O' ? 'is-o' : ''}
        />
      ))}
    </div>
  );
}

export default Board;
