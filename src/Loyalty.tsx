import ReactDom from "react-dom";

interface Props {
  children: React.ReactNode;
  open: Boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loyalty = ({ open, children }: Props) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div >
      <div className=" fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-20" />
      <div className=" fixed z-20 top-0 bottom-0 left-0 right-0 flex justify-center place-items-center">
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Loyalty;
