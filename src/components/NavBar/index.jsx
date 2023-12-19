import useModalContext from '../../hook/useModalContext';
import Button from '../Button';

export const NavBar = () => {
  const { setIsModalVisible  } = useModalContext();

  return (
    <nav className=" w-full h-20 bg-purple-950 flex justify-end items-center fixed z-0">
      <Button
        className="bg-violet-150 text-violet-50 rounded h-10 w-30 m-8 sm:m-20  text-xs sm:text-sm px-2 sm:px-4 "
        onClick={() => setIsModalVisible(true)} text=" + Novo Card"
      />
    </nav>
  );
};

