import { useRef, useEffect, useState } from 'react';

const Landing = () => {
  const refWolverine = useRef(null); // useRef va creer un objet en faisant ref à un élément avec une liste de methodes disponibles VOIR LIGNE 14
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    refWolverine.current.classList.add('startingImg'); //
    setTimeout(() => {
      refWolverine.current.classList.remove('startingImg');
      setBtn(true);
    }, 1000);
  }, []);

  const displayBtn = btn && (
    <>
      <div className='leftBox'>
        <button className='btn-welcome'>Inscription</button>
      </div>

      <div className='rightBox'>
        <button className='btn-welcome'>Connexion</button>
      </div>
    </>
  );

  return (
    <main ref={refWolverine} className='welcomePage'>
      {displayBtn}
    </main>
  );
};

export default Landing;
