import "./Board.css";
import chessBoard from '../assets/chess-bg.jpg'
import Rook from '../assets/rook.png'
import whiteRook from '../assets/white-rook.png'
import Pawn from '../assets/pawn.png'
import whitePawn from '../assets/white-pawn.png'
import King from '../assets/king.png'
import Queen from '../assets/queen.png'
import Bishop from '../assets/bishop.png'
import whiteBishop from '../assets/white-bishop.png'
import Knight from '../assets/knight.png'
import whiteKnight from '../assets/white-knight.png'

const Board = () => {
  return (
    <>
      <div className="wrapper">
        <table>
          <tr className="row row-1">
            <td className="col col-1"><img src={Rook} alt="rook icon" /></td>
            <td className="col col-2 black"><img src={Knight} alt="black Knight icon" /></td>
            <td className="col col-3"><img src={Bishop} alt="black bishop icon" /></td>
            <td className="col col-4 black"><img src={Queen} alt="black queen icon" /></td>
            <td className="col col-5"> <img src={King} alt="black King icon" /></td>
            <td className="col col-6 black"><img src={Bishop} alt="black bishop icon" /></td>
            <td className="col col-7"><img src={Knight} alt="black Knight icon" /></td>
            <td className="col col-8 black"><img src={Rook} alt="rook icon" /></td>
          </tr>
          <tr className="row row-2">
            <td className="col col-1 black"><img src={Pawn} alt="rook icon" /></td>
            <td className="col col-2"><img src={Pawn} alt="rook icon" /></td>
            <td className="col col-3 black"><img src={Pawn} alt="rook icon" /></td>
            <td className="col col-4"><img src={Pawn} alt="rook icon" /></td>
            <td className="col col-5 black"><img src={Pawn} alt="rook icon" /></td>
            <td className="col col-6"><img src={Pawn} alt="rook icon" /></td>
            <td className="col col-7 black"><img src={Pawn} alt="rook icon" /></td>
            <td className="col col-8"><img src={Pawn} alt="rook icon" /></td>
          </tr>
          <tr className="row row-3">
            <td className="col col-1"></td>
            <td className="col col-2 black"></td>
            <td className="col col-3"></td>
            <td className="col col-4 black"></td>
            <td className="col col-5"></td>
            <td className="col col-6 black"></td>
            <td className="col col-7"></td>
            <td className="col col-8 black"></td>
          </tr>
          <tr className="row row-4">
            <td className="col col-1 black"></td>
            <td className="col col-2"></td>
            <td className="col col-3 black"></td>
            <td className="col col-4"></td>
            <td className="col col-5 black"></td>
            <td className="col col-6"></td>
            <td className="col col-7 black"></td>
            <td className="col col-8"></td>
          </tr>
          <tr className="row row-5">
            <td className="col col-1"></td>
            <td className="col col-2 black"></td>
            <td className="col col-3"></td>
            <td className="col col-4 black"></td>
            <td className="col col-5"></td>
            <td className="col col-6 black"></td>
            <td className="col col-7"></td>
            <td className="col col-8 black"></td>
          </tr>
          <tr className="row row-6">
            <td className="col col-1 black"></td>
            <td className="col col-2"></td>
            <td className="col col-3 black"></td>
            <td className="col col-4"></td>
            <td className="col col-5 black"></td>
            <td className="col col-6"></td>
            <td className="col col-7 black"></td>
            <td className="col col-8"></td>
          </tr>
          <tr className="row row-7">
            <td className="col col-1"><img src={whitePawn} alt="white Pawn icon" /></td>
            <td className="col col-2 black"><img src={whitePawn} alt="white Pawn icon" /></td>
            <td className="col col-3"><img src={whitePawn} alt="white Pawn icon" /></td>
            <td className="col col-4 black"><img src={whitePawn} alt="white Pawn icon" /></td>
            <td className="col col-5"><img src={whitePawn} alt="white Pawn icon" /></td>
            <td className="col col-6 black"><img src={whitePawn} alt="white Pawn icon" /></td>
            <td className="col col-7"><img src={whitePawn} alt="white Pawn icon" /></td>
            <td className="col col-8 black"><img src={whitePawn} alt="white Pawn icon" /></td>
          </tr>
          <tr className="row row-8">
            <td className="col col-1 black"><img src={whiteRook} alt="White rook icon" /></td>
            <td className="col col-2"><img src={whiteKnight} alt="white Knight icon" /></td>
            <td className="col col-3 black"><img src={whiteBishop} alt="white Bishop icon" /></td>
            <td className="col col-4"></td>
            <td className="col col-5 black"></td>
            <td className="col col-6"><img src={whiteBishop} alt="white Bishop icon" /></td>
            <td className="col col-7 black"><img src={whiteKnight} alt="white Knight icon" /></td>
            <td className="col col-8"><img src={whiteRook} alt="White rook icon" /></td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Board;
